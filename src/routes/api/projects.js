const projects = [
    {
        id: "1",
        title: "Wild Space",
        description: 'Wild Space es proyecto personal en desarrollo, de un juego ambientado en el espacio, enfocado en las batallas espaciales y al desafío del mundo y sus obstáculos al estilo plataformas que requiera habilidad del piloto.',
        poster: '/space_limits_banner.png',
        link: '/projects/1',
        tags: ['game', 'VFX', 'AI'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Caracteristicas principales',
                items: [
                    {type: 'text', value: 'El juego esta siendo desarrollado en Unity en la versión 2021.3 LTS.<br/><br/>Lo que busca el juego es ofrecer una experiencia de vuelo que premie la habilidad del jugador conseguida a través de la experiencia, debido a que contara con un estilo de obstáculos parecidos a los de juegos de plataformas, pero ambientado en el espacio. Adicional a esto, contará con un enfoque táctico simple, en donde se podrá elegir entre tres aspectos a fortalecer en la nave: velocidad, defensa y ataque.'},
                    {type:'image', value: '/wild_space_01.png'}
                ]
            },
            {
                title: 'Elementos desarrollados',
                items: [
                    {type: 'list', value: [
                        'Efectos Espaciales',
                        'Interafaz de usuario',
                        'IA',
                        'Controles',
                    ]},
                ]
            },
            {
                title: 'Efectos especiales',
                items: [
                    {type: 'text', value: 'Para desarrollar los efectos especiales del juego se esta utilizando la herramienta de Visual Effect Graph de Unity. Se han implementado los efectos del blaster en los impactos de las naves. Tambien en los indicadores del UI del Radar de la nave, que enseña donde esta ubicado un objetivo mediante el uso de particulas.'},
                    {type: 'video', value: '/wild_space_video_1.mp4'},
                    {type: 'image', value: '/wild_space_02.png'},
                    {type: 'image', value: '/wild_space_09.png'},
                    {type: 'image', value: '/wild_space_10.png'},
                    {type: 'image', value: '/wild_space_11.png'},
                ]
            },
            {
                title: 'Interfaz de usuario',
                items: [
                    {type: 'text', value: 'En la interfaz de usuario se han implementado algunos elementos como: '},
                    {type: 'list', value: [
                        'Barras de vida',
                        'Barras de escudo',
                        'Menu principal',
                        'Radar de objetivos',
                        'Información de objetivos',
                        'Indicador de munición'
                    ]},
                    {type: 'subtitle', value: 'Menu principal'},
                    {type: 'text', value: 'El menu principal cuenta con opciones basicas como iniciar el juego, salir y opciones de configuración. Dentro de las cuales esta el sonido que esta segmentado en diferentes grupos, como efectos, musica, menus y dialogos'},
                    {type: 'image', value: '/wild_space_03.png'},
                    {type: 'subtitle', value: 'Radar de objetivos'},
                    {type: 'text', value: 'El radar de objetivos esta segmentado en dos indicadores, uno que son tooltips que aparecen en la pantalla, nombre y su distancia, indicando la posicion de los objetivos, y otro que es una esfera que ofrece una vista del espacio.'},
                    {type: 'image', value: '/wild_space_04.png'},
                    {type: 'text', value: 'Los indicadores varian de acuerdo al tipo de objetivo, en este caso son rojos por tratarse de amenazas'},
                    {type: 'image', value: '/wild_space_05.png'},
                    {type: 'text', value: 'Los tooltips tienen información para las naves como su estado de vida, escudo, nombre y distancia del objetivo.'},
                    {type: 'video', value: '/wild_space_video_2.mp4'},
                    {type: 'text', value: 'Los tooltips siempre tienen una referencia de la ubicación del objetivo aunque este por fuera de la pantalla, para ayudar al usuario a encontrarlo mas facilmente.'},

                ]
            },
            {
                title: 'IA',
                items: [
                    {type: 'text', value: 'La IA se basa principalmente en el patron de diseño de maquina de estados, en donde se implementa un controlador que maneja todos los estados posibles del enemigo. Esta maquina se apoya de una serie de sensores que detectan al jugador y de un systema de conciencia que indica cuando un objetivo esta totalmente detectado.'},
                    {type: 'image', value: "/wild_space_06.png"},
                    {type: 'image', value: "/wild_space_07.png"},
                    {type: 'text', value: 'Más adelante se piensa implementar una IA que utilice la metodología de GOAP (Goal Oriented Action Planning), para tener un comportamiento mas variado en los enemigos y que puedan decidir de acuerdo a un arbol de desición.'},
                ]
            },
            {
                title: 'Controles',
                items: [
                    {type: 'text', value: 'Para los controles del juego se esta utilizando el paquete llamado Input System, que permite tener una compatibilidad con varios controladores como el teclado, mouse, joystick, etc. Tambien facilita la implementación de la edición de las teclas de acuerdo al gusto del usuario. Se esta segmentando en dos grupos, uno que son los controles durante el gameplay y otros para los menus.'},
                    {type: 'image', value: "/wild_space_08.png"},
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
                    {type: 'text', value: 'Es un practica de desarrollo fronted, creada en el framework React y Vite como empaquetador de archivos <a class="link" target="_blank" href="https://react-product-page-ecru.vercel.app/">Ir al sitio del proyecto</a>'},
                    {type: 'image', value: '/project_product_page_2.png'},
                    {type: 'text', value: 'Dentro del proyecto se implementaron cosas como: un carusel para las imagenes detalladas del producto y un carrito de compra que es dinamico de acuerdo a la cantidad de productos que se asignen.'},
                    {type: 'text', value: 'El sitio esta desplegado en Vercel y contiene su repositorio en Github.'},
                ]
            },
        ]
    },
    {
        id: "3",
        title: 'Pokedex creado con Vue',
        description: 'Es un pokedex creado con Vue utilizando la API de pokeapi',
        poster: '/project_pokedex.png',
        link: '/projects/3',
        tags: ['frontend','web'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Información del proyecto',
                items: [
                    {type: 'text', value: 'Este es un proyecto de practica en donde se utilizo VUE un framework para el frontend. <a class="link" target="_blank" href="https://vue-pokedex-rho.vercel.app/">Ir al sitio del proyecto</a>'},
                    {type: 'image', value: '/project_pokedex_2.png'},
                    {type: 'text', value: 'El sitio esta desplegado en Vercel y contiene su repositorio en Github.'}, 
                ]
            },
            {
                title: 'Consumo de API',
                items: [
                    {type: 'text', value: 'En este ejercicio se consumio una API publica de pokemon, que contiene toda su información, incluyendo imagenes y estadisticas. <a class="link" target="_blank" href="https://pokeapi.co/">Ir a la API</a>'},
                ]
            }
        ]
    },
    {
        id: "4",
        title: 'Clone de Twitter con React',
        description: 'Un clone de Twitter creado con react que se vincula a la API de Twitter',
        poster: '/project_twitter_1.png',
        link: '/projects/4',
        tags: ['frontend','web'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Información del proyecto',
                items: [
                    {type: 'text', value: 'Este es un proyecto de practica en donde se utilizo React para el frontend. <a class="link" target="_blank" href="https://twiiter-clone-react.vercel.app">Ir al sitio del proyecto</a>'},
                    {type: 'image', value: '/project_twitter.png'},
                    {type: 'text', value: 'El sitio esta desplegado en Vercel y contiene su repositorio en Github.'},
                ]
            }
        ]
    },
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