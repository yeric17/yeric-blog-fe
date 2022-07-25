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
                    {type: 'text', value: 'El juego está siendo desarrollado en Unity en la versión 2021.3 LTS.<br/><br/>Lo que busca el juego es ofrecer una experiencia de vuelo que premie la habilidad del jugador conseguida a través de la experiencia, debido a que contara con un estilo de obstáculos parecidos a los de juegos de plataformas, pero ambientado en el espacio. Adicional a esto, contará con un enfoque táctico simple, en donde se podrá elegir entre tres aspectos a fortalecer en la nave: velocidad, defensa y ataque.'},
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
                    {type: 'text', value: 'Para desarrollar los efectos especiales del juego se está utilizando la herramienta de Visual Effect Graph de Unity. Se han implementado los efectos del blaster en los impactos de las naves. También en los indicadores del UI del Radar de la nave, que enseña donde está ubicado un objetivo mediante el uso de partículas.'},
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
                    {type: 'subtitle', value: 'Menú principal'},
                    {type: 'text', value: 'El menú principal cuenta con opciones básicas como iniciar el juego, salir y opciones de configuración. Dentro de las cuales está el sonido que esta segmentado en diferentes grupos, como efectos, música, menús y diálogos'},
                    {type: 'image', value: '/wild_space_03.png'},
                    {type: 'subtitle', value: 'Radar de objetivos'},
                    {type: 'text', value: 'El radar de objetivos esta segmentado en dos indicadores, uno que son tooltips que aparecen en la pantalla, nombre y su distancia, indicando la posición de los objetivos, y otro que es una esfera que ofrece una vista del espacio.'},
                    {type: 'image', value: '/wild_space_04.png'},
                    {type: 'text', value: 'Los indicadores varían de acuerdo con el tipo de objetivo, en este caso son rojos por tratarse de amenazas'},
                    {type: 'image', value: '/wild_space_05.png'},
                    {type: 'text', value: 'Los tooltips tienen información para las naves como su estado de vida, escudo, nombre y distancia del objetivo.'},
                    {type: 'video', value: '/wild_space_video_2.mp4'},
                    {type: 'text', value: 'Los tooltips siempre tienen una referencia de la ubicación del objetivo, aunque este por fuera de la pantalla, para ayudar al usuario a encontrarlo más fácilmente.'},

                ]
            },
            {
                title: 'IA',
                items: [
                    {type: 'text', value: 'La IA se basa principalmente en el patrón de diseño de máquina de estados, en donde se implementa un controlador que maneja todos los estados posibles del enemigo. Esta máquina se apoya de una serie de sensores que detectan al jugador y de un systema de conciencia que indica cuando un objetivo está totalmente detectado.'},
                    {type: 'image', value: "/wild_space_06.png"},
                    {type: 'image', value: "/wild_space_07.png"},
                ]
            },
            {
                title: 'Controles',
                items: [
                    {type: 'text', value: 'Para los controles del juego se está utilizando el paquete llamado Input System, que permite tener una compatibilidad con varios controladores como el teclado, ratón, joystick, etc. También facilita la implementación de la edición de las teclas de acuerdo con el gusto del usuario. Se está segmentando en dos grupos, uno que son los controles durante el gameplay y otros para los menús.'},
                    {type: 'image', value: "/wild_space_08.png"},
                ]
            }
        ]
    },
    {
        id: "2",
        title: 'Chat con Svelte',
        description: 'App para crear conversaciones privadas y chatear con usuarios agregados',
        poster: '/project_chat-svelte.png',
        link: '/projects/2',
        tags: ['backend', 'web','frontend'],
        createdAt: '2020-01-01',
        sections:[
            {
                title: 'Información del proyecto',
                items: [
                    {type: 'text', value: 'Este Proyecto se realizo para un hackaton, la cual tuvo un lapso de tiempo de dos semanas. En la aplicación es posible registrarse, crear conversaciones y chatear con invitados <a class="link" target="_blank" href="https://squad-meeting.vercel.app/">Ir al sitio del proyecto</a>'},
                    {type: 'image', value: '/project_chat-svelte_2.png'},
                ]
            },
            {
                title: 'Tecnologias',
                items: [
                    {type: 'subtitle', value: 'Twilio'},
                    {type: 'text', value: 'En el proyect se utilizo <a class="link" target="_blank" href="https://www.twilio.com/">Twilio</a>: es una API que ofrese soluciones de comunicacions como SMS. Para este desarrollo se uso el servicio de conversaciones, que permite organizar conversaciones de varias fuentes como SMS, WhatsApp y MMS'},
                    {type: 'subtitle', value: 'Sveltekit'},
                    {type: 'text', value: 'Para el trabajo de fue usado <a class="link" target="_blank" href="https://kit.svelte.dev/">SvelteKit</a>  que es una herramienta del framework <a class="link" target="_blank" href="https://svelte.dev/">Svelte</a>, es un nuevo framework parecido a React o Vue que sirve para construir aplicaciones web'},
                    {type: 'subtitle', value: 'Supabase'},
                    {type: 'text', value: 'Para el control de registro, inicio de sesión y autenticación se utilizo <a class="link" target="_blank" href="https://supabase.com/">Supabase</a>: una alternativa a Firebase, que cuenta con APIs de autenticación y almacenamiento'},
                ]
            }
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