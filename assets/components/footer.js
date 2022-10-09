class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer id="footer">
    <div class="container">
    <div class="social-links">
    <a href="https://github.com/C-Elias" class="github"><i class="bx bxl-github"></i></a>
    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
    </div>
      <div class="copyright">
      &copy; Copyright <strong><span>Elias Chawki</span></strong>. All Rights Reserved
      </div>
      
      </div>
      </footer>
      `;
    }
  }
  
      // <h3>Elias Chawki</h3>
  
  // <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
  
  customElements.define('footer-component', Footer);
  