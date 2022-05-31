const projects = [
    {
        id: "1",
        title: "Space limits",
        description: 'Space limits es un proyecto personal en desarrollo, que trata de sobrevivir en el espacio, con el fin de alcanzar nuevos limites para alcanzar nuevos retos cada vez mas desafiantes',
        poster: '/space_limits_banner.png',
        link: '/projects/1',
        tags: ['game', 'vfx', 'AI'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'VFX (Visual Effect Graph)',
                items: [
                    {type: 'image', value: '/space_limits_vfx.png'},
                    {type: 'text', value: 'Para los effectos visuales del juego se trabaja sobre visual effect graph; una herramienta de Unity para crear efectos visuales.'},
                ]
            },
            {
                title: 'Shader Graph',
                items: [
                    {type: 'text', value: 'En los shaders del juego se utiliza Shader Graph, se han creado los materiales para simular la propulsión de las naves'},
                    {type: 'image', value: '/space_limits_shader_graph.png'},
                    {type: 'image', value: '/space_limits_shader_graph_2.png'},
                    {type: 'text', value: 'Tambien se ha utilizado para mostrar los impactos de las balas en el escudo de las naves'},
                ]
            }
        ]
    },
    {
        id: "2",
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        poster: 'https://source.unsplash.com/random/400x200',
        link: '/projects/2',
        tags: ['backend', 'web'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                image: 'https://source.unsplash.com/random/400x200'
            },
        ]
    },
    {
        id: "3",
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        poster: 'https://source.unsplash.com/random/400x200',
        link: '/projects/3',
        tags: ['frontend', 'web'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                image: 'https://source.unsplash.com/random/400x200'
            },
        ]
    },
    {
        id: "4",
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        poster: 'https://source.unsplash.com/random/400x200',
        link: '/projects/4',
        tags: ['game', 'AI'],
        createdAt: '2020-01-01',
    }


]



export function get(event){
    const id = event.url.searchParams.get('id');
    if(id){
        return {
            body: JSON.stringify(projects.find(project => project.id === id))
        }
    }
    return {
        body: JSON.stringify(projects)
    }
}