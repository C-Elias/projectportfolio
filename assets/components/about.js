class About extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About</h2>
          <p>Versatile, personable, multilingual professional with a proven track record of identifying and addressing all unique customer requirements to maximize customer satisfaction and ensure loyalty in competitive markets. Respected as an empathetic, proactive leader and collaborator who guides team members in consistently surpassing ambitious goals. Builds and maintains lasting relationships with colleagues and clients, driving company objectives through a goal-oriented approach. Out-of-the-box thinker committed to making continuous communication, customer satisfaction, and strategic improvements to enable growth.</p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/profile-img.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>
            Project Manager & Full Stack Developer..</h3>
            <p class="fst-italic">
            Adept project manager and full stack developer with 5+ year track record of business development and 2+ years of web and software development.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.eliasc.dev</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Montreal, Canada</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>info@eliasc.dev</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
            Core Competencies in Customer Relationship Management, Needs Assessment, Workflow Optimization, Process Improvement, Project Management, Cross-Functional Collaboration, Problem-Solving, Creative Vision & Asset Management.
            </p>
          </div>
        </div>

      </div>
    </section>
      `;
    }
  }
  
  
  
  customElements.define('about-component', About);

  //Extra elements
  // <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+1 514 963 3277</span></li>
  // <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
