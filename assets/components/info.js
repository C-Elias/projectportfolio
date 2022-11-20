class Info extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Elias C.</h1>
        <p>I'm a <span class="typed" data-typed-items="Full Stack Developer, Project Manager, MERN Stack Developer"></span></p>
        <div class="social-links">
        <a href="https://github.com/C-Elias" class="github"><i class="bx bxl-github"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="https://stackoverflow.com/users/16208207/elias" class="stackoverflow"><i class='bx bxl-stack-overflow'></i></a>
          <a href="https://dev.to/c_elias" class="stackoverflow"><i class='bx bxl-dev-to'></i></a>
          </div>
          </div>
          </section>
          `;
        }
      }

      customElements.define('info-component', Info);
      
      //Extra HTML
      // <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
  