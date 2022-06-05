<script context="module">
  import {API_HOST} from "$stores/config";
  export const load = async () => {
    let response = await fetch(`${API_HOST}/projects`);
    let projects = await response.json();
    return {
      props: {
        projects
      }
    }
  };
</script>


<script>
  import SocialLink from "$components/SocialLink.svelte";
  import Container from "$components/Container.svelte";
  import IndexSection from "$components/IndexSection.svelte";
  import TwinContainer from "$components/TwinContainer.svelte";
  import TopicCard from "$components/TopicCard.svelte";
  import Gallery from "$components/Gallery.svelte";
  import ProjectCard from "$components/ProjectCard.svelte";


  export let projects = [];
</script>

<style>
  .about_banner_container {
    --spaceship-size: 350px;
    background-color: var(--color-tertiary-dark);

    background-image: url("/banner_home_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow: hidden;
  }
  .about_banner_container::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: url("/triangle_bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .about_banner_container::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 1rem;
    background-color: var(--color-secondary);
    z-index: 100;
  }

  .about_banner {
    width: 100%;
    height: 480px;
    max-width: var(--max-width);
    margin: 0 auto;
    position: relative;
  }
  .about_banner_text {
    align-self: end;
    grid-area: text;
    text-align: center;
    position: absolute;
    bottom: 4rem;
    right: 2rem;
  }
  .about_banner_text h1 {
    font-size: 3.5rem;
    color: var(--color-gray);
    font-weight: 300;
  }
  .about_banner_text h2 {
    letter-spacing: 0.6rem;
    color: var(--color-primary);
    font-size: 6.8rem;
    font-weight: 600;
    text-shadow: 0px 0px 8px var(--color-accent);
  }
  .about_banner_text span {
    font-size: 1.6rem;
    color: var(--color-secondary);
    font-weight: 500;
    text-shadow: 0px 0px 2px var(--color-secondary);
  }
  .about_banner_image {
    position: absolute;
    left: 0;
    top: 0;
    width: 150%;
    display: block;
    transform: translateX(-30%);
    z-index: 2;
  }

  .about_banner_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

  }
  .profile-container{
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .profile-container h3{
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-white);
    padding-bottom: 1.5rem;
  }
  .profile-container p{
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-gray);
    line-height: 1.5rem;
    letter-spacing: 0.06rem;
  }
  .social-section{
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
  .social-section_list{
    display: flex;
    gap: 1rem;
  }
  @media (min-width: 768px) {
    .about_banner_text {
      align-self: center;
    }
    .about_banner_image {
      width: 75%;
    }
    .about_banner_image::after {
      width: 200px;
      height: 150px;
    }
	  .about_banner_container::before {
		  width: 80%;
	  }
    .about_banner::after {
      content: "";
      position: absolute;
      bottom: 1rem;
      left: 65%;
      width: var(--spaceship-size);
      height: calc(var(--spaceship-size) * 1.074);
      background-image: url("/spaceship.png");
      background-repeat: no-repeat;
      background-size: cover;
      transform: translateX(-50%) rotate(12deg);
      z-index: 1;

      animation: spaceship-animation 1s;
    }
    .profile-container{
      padding:0;
    }
    @keyframes spaceship-animation {
      from {
        left: 100%;
        bottom: -10rem;
      }
      to {
        left: 65%;
        bottom: 1rem;
      }
    }
  }
</style>

<svelte:head>
  <title>Acerca de mi</title>
</svelte:head>

<section class="about">
  <div class="about_banner_container">
    <div class="about_banner">
      <div class="about_banner_image">
        <img src={'/perfil_web.png'} alt="about banner" />
      </div>
      <div class="about_banner_text">
        <h1>Hola, soy</h1>
        <h2>YERIC</h2>
        <span>Web y Game Developer</span>
      </div>
    </div>
  </div>
  <section class="social-section">
    <Container>
      <div class="social-section_list">
          <SocialLink
            type="linkedin"
          />
          <SocialLink
            type="twitter"
          />
          <SocialLink
            type="github"/>
      </div>
    </Container>
  </section>
  <IndexSection title="Perfil" color="primary">
    <TwinContainer>
      <div class="profile-container" slot="left">
        <h3>Personal</h3>
        <p>
          Soy una persona empática que le gusta inspirar una actitud de servicio, me encanta poder ayudar a las personas, pienso que es una experiencia que todos deberían vivir. Me destaco por ser alguien muy paciente, soy perseverante, en cambio de angustiarme con un problema, busco como podría solucionarlo. No pienso que exista algo que no pueda aprender, solo es necesario conocer como adaptar el conocimiento a la forma en que aprendo.
        </p>
      </div>
      <div class="profile-container" slot="right">
        <h3>Profesional</h3>
        <p>
          Me encuentro estudiando el programa de Ingeniería en las Artes Digitales con énfasis en el desarrollo de videojuegos. Enfoco mi trabajo en la programación de mecánicas de juego, el desarrollo de inteligencia artificial en los personajes y los efectos especiales, pero también puedo diseñar interfaces de usuario, con un gran sentido de la usabilidad y del diseño. Los lenguajes de programación que uso son: C#, JavaScript y Go, manipulo bases de datos con MySQL o PostgreSQL. Adicional a esto, tengo gran capacidad con el desarrollo web y conozco tecnologías como HTML, CSS, Node y React.
        </p>
        
      </div>
    </TwinContainer>
  </IndexSection>
  <IndexSection title="Especialidades" color="secondary">
    <Container>    
      <Gallery>
        <TopicCard topic="games"></TopicCard>
        <TopicCard topic="frontend"></TopicCard>
        <TopicCard topic="backend"></TopicCard>
      </Gallery>
    </Container>
  </IndexSection>
  <IndexSection title="Proyectos" color="tertiary">
    <Container>    
      {#if projects.length > 0}
      <Gallery minwidth="200px">
        {#each projects as project}
          <ProjectCard project={project}></ProjectCard>
        {/each}
      </Gallery>
      {/if}
    </Container>
  </IndexSection>
  <Container />
</section>
