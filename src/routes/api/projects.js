const projects = [
    {
        id: "1",
        title: "Space limits",
        description: 'Space limits es un proyecto personal en desarrollo, que trata de sobrevivir en el espacio, con el fin de alcanzar nuevos limites para alcanzar nuevos retos cada vez mas desafiantes',
        poster: '/space_limits_banner.png',
        link: '/projects/1',
        tags: ['game', 'VFX', 'AI'],
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
        title: 'Pagina de productos con React',
        description: 'Diseño de una vista de producto con React',
        poster: '/project_product_page.png',
        link: '/projects/2',
        tags: ['backend', 'web','frontend'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Información del proyecto',
                items: [
                    {type: 'text', value: 'Es una practica de desarrollo de una pagina de productos utilizando React, para crear una vista de producto con un carrusel de imagenes y carrito de compras. Se utilizo Vite como herramienta de frontend. <a class="link" target="_blank" href="https://react-product-page-ecru.vercel.app/">Ir al sitio del proyecto</a>'},
                    {type: 'text', value: '<a  target="_blank" href="https://react-product-page-ecru.vercel.app/"><img src="/project_product_page.png" alt="page_link"/></a>'},  
                ]
            },
        ]
    },
    {
        id: "3",
        title: 'Pokedex creado con Vue',
        description: '',
        poster: '/project_pokedex.png',
        link: '/projects/3',
        tags: ['frontend','web'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Información del proyecto',
                items: [
                    {type: 'text', value: 'Es una practica de desarrollo de una pagina de productos utilizando React, para crear una vista de producto con un carrusel de imagenes y carrito de compras. Se utilizo Vite como herramienta de frontend. <a class="link" target="_blank" href="https://vue-pokedex-rho.vercel.app/">Ir al sitio del proyecto</a>'},
                    {type: 'text', value: '<a  target="_blank" href="https://vue-pokedex-rho.vercel.app/"><img src="/project_pokedex.png" alt="page_link"/></a>'},  
                ]
            },
        ]
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