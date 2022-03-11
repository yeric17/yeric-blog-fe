<script>
	import SocialLink from '$components/SocialLink.svelte';
	import {API_HOST} from '$stores/config.js';
</script>

<svelte:head>
	<title>¿Quien soy?</title>
</svelte:head>

<section class="about">
	<div class="about_banner_container">
		<div class="about_banner">
			<div class="about_banner_image">
				<img src={"/about_banner.png"} alt="about banner">
			</div>
			<div class="about_banner_text">
				<h1>Hola, Me llamo</h1>
				<h2>Carlos Yeric Fonseca Rios</h2>
				<p>Soy un desarrollador web y de videojuegos. Me interesa todo lo relacionado con el mundo de la programación, quiero poder contribuir con mi conocimiento a la comunidad y en el camino continuar aprendiendo más de este mundo del código.</p>
			</div>
			<div class="about_banner_social">
				<SocialLink type="linkedin"></SocialLink>
				<SocialLink type="twitter"></SocialLink>
				<SocialLink type="github"></SocialLink>
			</div>
		</div>
	</div>
	<div class="about_blog">
		<div class="about_blog_wrapper">		
			<h2 class="about_blog_title">Tecnologías del Blog</h2>
			<div class="about_blog_tec">
				<div class="about_blog_tec_item">
					<h3>SvelteKit</h3>
					<img src={`/svelte.png`} alt="svelte">
					<p>La base del frontend del blog esta construida bajo Sveltekit un framework de svelte, que permite construir aplicaciones basadas en esta tecnología muy rápido</p>
				</div>
				<div class="about_blog_tec_item">
					<h3>Go</h3>
					<img src={`/go.png`} alt="go">
					<p>El backend de esta desarrollado con Go, mediante el uso de un framework para el lenguaje llamado Gin</p>
				</div>
				<div class="about_blog_tec_item">
					<h3>Postgres</h3>
					<img src={`/postgres.png`} alt="postgres">
					<p>La base de datos del blog esta gestionada mediante Postgres</p>
				</div>
			</div>
		</div>
	</div>
	<div class="about_exp">

		<h2 class="about_exp_title">Experiencia</h2>
		<div class="about_exp_item">
			<h3>JavaScript</h3>
			<p>Hace mas de 6 años he trabajado con JavaScript en el desarrollo web, tanto en el backend como en el frontend. Es una de mis fortalezas, es uno de los lenguajes con los que he trabajado que más conozco y que me siento comodo</p>
		</div>
		<div class="about_exp_item">
			<h3>Go</h3>
			<p>Llevo alrededor de 2 años trabajando con el lenguaje, tiempo en el que he construido principalmente API para servir al frontend</p>
		</div>
		<div class="about_exp_item">
			<h3>Postgres</h3>
			<p>En este momento Postgres es la base de datos SQL que utilizo con mayor frecuencia, he aprendido bastante sobre el modelado de los datos junto con este lenguaje</p>
		</div>
		<div class="about_exp_item">
			<h3>C#</h3>
			<p>En mi carrera como Ingeniero de las Artes Digitales tome el camino del desarrollo de los videojuegos, por esta razón C# es uno de mis lenguajes favoritos, el cual he utilizado con el motor de videojuegos Unity, en donde he realizado juegos 2D, 3D, de realidad virtual y aumentada</p>
		</div>
		<div class="about_exp_item">
			<h3>Svelte</h3>
			<p>Svelte se esta convirtiendo en mi framework preferido para el desarrollo web, es por esta razón que todo este sitio web esta construido con el. Aun me encuentro en el camino de descubrir mas su potencial y espero poder desarrollar mas cosas increibles con esta gran herramienta</p>
		</div>

	</div>
</section>

<style>

	.about_banner_container{
		/* background: var(--color-white); */
		padding-top: var(--spacing-xxl);
		padding-bottom: var(--spacing-xxl);
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}
	.about_banner{
		max-width: var(--max-width);
		margin: 0 auto;
		display:grid;
		width: 100%;
		grid-template-columns: 1fr;
		grid-template-areas: 
			"image"
			"text"
			"social";
		gap: var(--spacing-lg);
		
	}
	.about_banner_text{
		align-self: end;
		grid-area: text;
	}
	.about_banner_text h1{
		font-size: var(--font-size-xxl);
		color: var(--color-secondary);		
	}
	.about_banner_text h2{
		font-size: var(--font-size-xxl);
		color: var(--color-primary);		
	}
	.about_banner_text p{
		font-size: var(--font-size-lg);
		color: var(--color-secondary);
		border-left: .5rem solid var(--color-primary);
		padding-left: var(--spacing-md);	
	}
	.about_banner_image{
		position: relative;
		grid-area: image;
		display: flex;
		justify-content: center;
		justify-self: start;
	}
	.about_banner_image::before{
		content: '';
		position: absolute;
		bottom: -1rem;
		left: 0;
		width: 170px;
		height: 170px;
		border-radius: 10px;
		background: var(--color-secondary);
		z-index: 3;
		transform: translateX(1rem);
	}
	.about_banner_image::after{
		content: '';
		position: absolute;
		top: 0;
		left: 10rem;
		width: 100px;
		height: 100px;
		border-radius: 10px;
		background: var(--color-primary-light);
		z-index: 3;
		
	}
	.about_banner_image img{
		max-height: 200px;
		position: relative;
		border-radius: 20px;
		z-index: 5;
	}

	.about_banner_social{
		display: grid;
		grid-template-columns: repeat(3, 50px);
		justify-items: start;
		gap: var(--spacing-md);
		grid-area: social;
	}
	.about_blog{
		/* background: var(--color-white); */
		padding-top: var(--spacing-xxl);
		padding-bottom: var(--spacing-xxl);
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
		border-top: 1px solid var(--color-gray-light);
	}
	.about_blog_wrapper{
		max-width: var(--max-width);
		margin: 0 auto;
	}
	.about_blog_tec{
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-md);
	}
	.about_blog_tec_item{
		border-bottom: 1px solid var(--color-gray-light);
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto 1fr;
		padding: var(--spacing-md);
		gap: var(--spacing-md);
		align-items: start;
	}
	.about_blog_tec_item img{
		width: 100%;
		height: 300px;
		object-fit: cover;
	}
	.about_blog_tec_item h3{
		font-size: var(--font-size-xl);
		color: var(--color-secondary);
		text-align: center;
	}
	.about_blog_tec_item p{
		align-self: start;
		margin: 0;
		padding: 0;
	}
	.about_blog_title{
		font-size: var(--font-size-xl);
		color: var(--color-secondary-dark);
		text-align: center;
		margin-bottom: var(--spacing-md);
	}
	.about_exp{
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-md);
		max-width: var(--max-width);
		margin: 0 auto;
		padding-bottom: var(--spacing-xxl);
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}
	.about_exp_title{
		font-size: var(--font-size-xxl);
		color: var(--color-secondary-dark);
		
		margin-bottom: var(--spacing-md);
	}
	.about_exp_item{
		display: grid;
		gap: var(--spacing-md);	
	}
	.about_exp_item h3{
		font-size: var(--font-size-xl);
		color: var(--color-secondary);
	
	}
	@media (min-width: 768px){
		.about_banner_container{
			padding-top: var(--spacing-xl);
			padding-bottom: var(--spacing-xl);
		}
		.about_banner{
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 
				"image text"
				"image social";
		}
		.about_banner_text{
			align-self: center;
		}
		.about_banner_image{
			grid-area: image;
		}
		.about_banner_social{
			grid-area: social;
		}
		.about_banner_image img{
			max-height: 300px;
		}
		.about_banner_image::before{
			
			width: 300px;
			height: 150px;
		}
		.about_banner_image::after{
			
			width: 200px;
			height: 150px;
		}
		.about_blog_tec{
			grid-template-columns: repeat(3, 1fr);
		}
	}

</style>