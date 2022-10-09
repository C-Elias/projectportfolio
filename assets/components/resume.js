class Resume extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section id="resume" class="resume">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Resume</h2>
          <p>Professional and relevant experience.</p>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Elias C</h4>
              <p><em>Versatile, personable, multilingual professional adept in project management, needs assessment,
              and customer relations skills honed during 5+ years as a financial and business development specialist and software developer.</em></p>
              <ul>
                <li>Montreal, Quebec, Canada</li>
                <li>(123) 456-7891</li>
                <li>info@eliasc.dev</li>
              </ul>
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Full Stack Web Development</h4>
              <h5>2020 - 2021</h5>
              <p><em>LeWagon International Coding School, Rio de Janeiro, Brazil</em></p>
              <p>Through immersive coding bootcamps in Web Developpement and Data Science, Le Wagon teaches you the tech skills and product mindset you need to thrive. Our cutting-edge programs and world-class teachers give you all the skills and tools needed to kick-start your tech career, upskill in your current job, or launch your own startup</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor of Commerce in Finance</h4>
              <h5>2015 - 2018</h5>
              <p><em>Concordia University, Montreal, Canada</em></p>
              <p>Finance is a competitive program in which you acquire the skills to manage money and practise making decisions that affect the future of corporations, communities and investors. As a Finance student, you will learn to:

              Understand the way money appreciates over time
              Analyze investment opportunities
              Develop financing alternatives
              Weigh risk factors to build wealth responsibly</p>
            </div>
            <div class="resume-item">
              <h4>Law, Society & Justice</h4>
              <h5>2011 - 2014</h5>
              <p><em>Dawson College, Rochester, NY</em></p>
              <p>As a profile, Law, Society and Justice encompasses all of the knowledge and skills of the Social Science Program. Its distinctiveness comes from the particular themes, topics and lens of analysis related to justice, crime, law, democracy and politics. Law, Society and Justice students will learn: Critical thinking Oral communication Debating skills</p>
            </div>
          </div>
          <div class="col-lg-6">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>2020 - Present</h5>
              <p><em>FirstNorth Real Estate Group, Montreal, Canada</em></p>
              <ul>
                <li>Assist in the design, development, and implementation of internal softwares, and production communication materials</li>
                <li>Writing clean, functional code on the front- and back-end</li>
                <li>Testing and fixing bugs or other coding issues</li>
                <li>Technologies and languages - JavaScript, HTML, PHP </li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>Business Development Manager</h4>
              <h5>2021 - 2022</h5>
              <p><em>TDAM, Montreal, Canada</em></p>
              <ul>
                <li>Identifying opportunities in target markets for product fits</li>
                <li>Developing and nurturing relationships with key customer accounts</li>
                <li>Keeping up with the latest industry developments, including market positioning of corporate competitors</li>
                <li>Following up with new leads and referrals generated from the sales team </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
      `;
    }
  }
  
  
  
  customElements.define('resume-component', Resume);
  