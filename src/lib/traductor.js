

class Traductor {
    constructor() {
        this.labels = {};
        this.lang = 'es';
    }

    add(id, text, lang) {
        if (this.labels.hasOwnProperty(id)) {
            this.labels[id][lang] = text;
            return
        }
        
        this.labels[id] = {};
        this.labels[id][lang] = text;
    }

    get(id) {
        return this.labels[id][this.lang];
    }

    setLang(lang) {
        this.lang = lang;
    }
}

const CreateTraductor = () => {
    return new Traductor();
}

export { CreateTraductor };



