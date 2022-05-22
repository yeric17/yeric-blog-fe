<script>
  import SocialLink from "$components/SocialLink.svelte";
  import Container from "$components/Container.svelte";
  import IndexSection from "$components/IndexSection.svelte";
  import TwinContainer from "$components/TwinContainer.svelte";
</script>

<style>
  .about_banner_container {
    --spaceship-size: 460px;
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
    height: 768px;
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

  @media (min-width: 768px) {
    .about_banner {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "image text"
        "image social";
    }
    .about_banner_text {
      align-self: center;
    }
    .about_banner_image {
      width: 100%;
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
      transform: translateX(-50%) rotate(10deg);
      z-index: 1;

      animation: spaceship-animation 1s;
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
        <h1>Hello, I'm</h1>
        <h2>YERIC</h2>
        <span>Web And Game Developer</span>
      </div>
    </div>
  </div>
  <section class="social-section">
    <Container>
          <SocialLink
            type="linkedin"
          />
          <SocialLink
            type="twitter"
          />
          <SocialLink
            type="github"/>
    </Container>
  </section>
  <IndexSection title="Perfil" color="primary">
    <TwinContainer>
      <div class="profile-container" slot="left">
        hola
      </div>
      <div class="profile-container" slot="right">
        hola
      </div>
    </TwinContainer>
  </IndexSection>
  <IndexSection title="Especialidades" color="secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. A consequuntur consectetur eaque laboriosam voluptas molestias incidunt. Ullam, qui amet odio doloremque quisquam distinctio nostrum iste, expedita nobis, non dolorem adipisci.</IndexSection>
  <IndexSection title="Proyectos" color="tertiary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab ad dolore asperiores similique nesciunt qui quis. Deserunt repudiandae inventore cumque laborum, exercitationem illum, suscipit, animi unde debitis eligendi hic. Facere?</IndexSection>
  <Container />
</section>
