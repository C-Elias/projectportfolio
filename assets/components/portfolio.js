class Portfolio extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <section id="portfolio" class="portfolio section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>A small gallery of recent projects. Many other projects in the works.
          </p>
        </div>
      
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>FirstNorth Real estate</h4>
                <p>Real estate lead gen.</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="FirstNorth Equity"></i></a>
                  <a href="portfolio-firstnorth.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><button type="button" class="btn btn-primary">See Details</button></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Playlist Maker</h4>
                <p>Create playlists and save to spotify</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"></i></a>
                  <a href="portfolio-playlistmaker.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><button type="button" class="btn btn-primary">See Details</button></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>EasyFolio</h4>
                <p>Cryptocurrency portfolio management solution</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"></i></a>
                  <a href="portfolio-easyfolio.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><button type="button" class="btn btn-primary">See Details</button></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src="assets/img/portfolio/portfolio-10.jpg" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>FocusTimer</h4>
              <p>Pomodoro timer.</p>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-10.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Pomodoro Timer"></i></a>
                <a href="portfolio-focustimer.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><button type="button" class="btn btn-primary">See Details</button></i></a>
              </div>
            </div>
          </div>
        </div>
          
          </div>
          
          </div>
          </section>
          `;
    }
  }
  
  
  
  customElements.define('portfolio-component', Portfolio);

  // Additional Portfolio Items
  
          // <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          //   <div class="portfolio-wrap">
          //     <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
          //     <div class="portfolio-info">
          //       <h4>Card 2</h4>
          //       <p>Card</p>
          //       <div class="portfolio-links">
          //         <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
          //         <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          // <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          //   <div class="portfolio-wrap">
          //     <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
          //     <div class="portfolio-info">
          //       <h4>Web 2</h4>
          //       <p>Web</p>
          //       <div class="portfolio-links">
          //         <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
          //         <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
          //       </div>
          //     </div>
          //   </div>
          // </div>

          // <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          //   <div class="portfolio-wrap">
          //     <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
          //     <div class="portfolio-info">
          //       <h4>App 3</h4>
          //       <p>App</p>
          //       <div class="portfolio-links">
          //         <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
          //         <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
          //       </div>
          //     </div>
          //   </div>
          // </div>