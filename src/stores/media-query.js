import { readable, derived, writable, get } from 'svelte/store';
import { browser } from "$app/env";

const docDim = readable({width:0,height:0}, set => {
    if(browser){
        set({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        });
        window.addEventListener('resize', () => {
            set({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            });
        });
    }
});

const defaultBreakPoints = [
    {
        name: 'sm',
        breakPoint: 640
    },
    {
        name: 'md',
        breakPoint: 768
    },
    {
        name: 'lg',
        breakPoint: 1024
    },
    {
        name: 'xl',
        breakPoint: 1280
    },
    {
        name: '2xl',
        breakPoint: 1536
    }
];

const breakPoints = writable(defaultBreakPoints);

function getLevel(name) {
    let bps = get(breakPoints);
    for(let i = 0; i < bps.length; i++) {
        if (bps[i].name === name) {
            return (bps[0].breakPoint === 0) ? i : i + 1;
        }
    }
    console.log("MediaQuery: invalid name parameter");
    return -1;
}

function getIndex(name) {
    let bps = get(breakPoints);
    return bps.findIndex((bp) => {
        return (bp.name === name);
    })
}

class MediaQuery {
    name = '';
    level = -1;
    constructor(name, level) {
        this.name = name;
        this.level = level
    }

    is = (name) => {
        let lastCharacter = name.slice(name.length - 1);
        let shortName = name.slice(0, name.length - 1);
        if (lastCharacter === '+') {
            return (this.level >= getLevel(shortName));
        } else if (lastCharacter === '-') {
            return (this.level <= getLevel(shortName));
        } else {
            return (this.name === name);
        }
    }
       
    applyIf = (name, data) => {
        let lastCharacter = name.slice(name.length - 1);
        let shortName = name.slice(0, name.length - 1);
        if (lastCharacter === '+') {
            if (this.level >= getLevel(shortName))
            {
                return data;
            }
        } else if (lastCharacter === '-') {
            if (this.level <= getLevel(shortName))
            {
                return data;
            }
        } else  if (this.name === name) {
            return data;
        }
        return '';
    }
    
    apply = (...args) => {
        let index = getIndex(this.name);
        let data = '';
        for (let i = 0; i < args.length; i++) {
            if (args[i]) {
                data = args[i];
            }
            if (i === index) {
                break;
            }
        }
        return data;
    }
    
}

let lastBreakPoint = '';

const docQuery = derived([docDim, breakPoints], ([$docDim,$breakPoints], set) => {
    let w = $docDim.width;
    for (let i = ($breakPoints.length - 1); i >= 0; i--) {
        if (w >= $breakPoints[i].breakPoint) {
            if (lastBreakPoint !== $breakPoints[i].name) {
                lastBreakPoint = $breakPoints[i].name;
                let level = ($breakPoints[0].bp === 0) ? i : i + 1;
                set(new MediaQuery($breakPoints[i].name,level))
            } 
            return;
        }    
    }
    if (lastBreakPoint !== '') {
        lastBreakPoint = '';
        set(new MediaQuery('',0));
    }
}, new MediaQuery('',0));



class mediaQueryManager {
    dimensionStore = null;
    mediaQueryStore = null;
    constructor() {
        this.dimensionStore = docDim;
        this.mediaQueryStore = docQuery;
    }

    setMediaBreakPoints(arrayOfBreakPoints) {
        if (Array.isArray) {
            //check for valid objects in array
            if (arrayOfBreakPoints.length === 0) {
                console.log("mediaQueryManager.setMediaBreakPoints(): invalid parameter");
                return;
            }
            let names = [];
            let dims = [];
            arrayOfBreakPoints.forEach((obj) => {
                if (!obj.name || !obj.breakPoint || !Number.isInteger(obj.breakPoint) || obj.breakPoint < 0) {
                    console.log("mediaQueryManager.setMediaBreakPoints(): invalid parameter");
                    return;
                }
                names.push(obj.name);
                dims.push(obj.breakPoint);
            });
            let snames = new Set(names);
            let sdims = new Set(dims);
            if (snames.size !== arrayOfBreakPoints.length || sdims.size !== arrayOfBreakPoints.length)  {
                console.log("mediaQueryManager.setMediaBreakPoints(): invalid parameter");
                return;
            }

            //sort ascending
            arrayOfBreakPoints.sort((a,b) => {
                return a.breakPoint - b.breakPoint;
            });
            //update breakpoints
            breakPoints.set(arrayOfBreakPoints);
        }
    }
}

const MediaQueryManager = new mediaQueryManager();

export default MediaQueryManager; 




