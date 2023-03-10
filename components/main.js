// This is just the arrow icons
class UtilityLinks extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<a href="/pdf/Vision-2023-California-Technology-Strategic-Plan.pdf"><span class="ca-gov-icon-download" aria-hidden="true"></span> Download Vision 2023 PDF</a> <a href="/translations.html"><span class="ca-gov-icon-globe" aria-hidden="true"></span> Translate</a>
  <button class="btn btn-xs btn-primary" data-toggle="collapse" data-target="#siteSettings"
      aria-expanded="false" aria-controls="siteSettings"><span class="ca-gov-icon-gear"
          aria-hidden="true"></span> Settings</button>`;
    }

}
window.customElements.define('utility-links', UtilityLinks);
// This is just the arrow icons
class MainNav extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<nav id="navigation" class="main-navigation singlelevel auto-highlight no-icons nav" aria-owns="nav-icon3">
      <ul id="nav_list" class="top-level-nav">
        <li class="nav-item">
            <a href="/" class="first-level-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="/vision/" class="first-level-link">Our Vision</a>
        </li>
        <li class="nav-item">
            <a href="/principles/" class="first-level-link">Principles</a>
        </li>
        <li class="nav-item">
            <a href="/goals/" class="first-level-link">Goals</a>
        </li>
        <li class="nav-item">
            <a href="https://ca-code-works.github.io/Vision-2023/challenge/" class="first-level-link">Challenges</a>
        </li>  
      </ul></nav>`;
    }
}
window.customElements.define('main-nav', MainNav);
// This is just the arrow icons
class GetInvolved extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<div class="section-understated p-sm-3 p-md-5" id="get-involved-sec">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-9 mx-auto">
                 
                      <h2 class="text-center h2 pb-4 m-b">How to Share Feedback and Get Involved</h2>
                      <p class="lead">We are actively looking for feedback and people to get involved in Vision 2023. Here’s how you can help:</p>
                      <ol style="font-weight:300">
                      <li>Read the Vision 2023 <a href="https://ca-code-works.github.io/Vision-2023/challenge/">goals and challenges</a>.</li>
                      <li><a href="https://forms.gle/zSbFssCE4YCWYiTB8">Share your feedback</a> and your interest in being part of a challenge team.</li>
                      <li>Our team will follow up in the coming weeks to better understand how you can help.</li>
                      </ol>
                      <div class="text-center">
                      <div class="btn-row p-t-sm">
                          <a href="https://forms.gle/zSbFssCE4YCWYiTB8" class="btn btn-highlight btn-lg rounded-50 p-x-md m-r-sm" role="button">Share feedback</a>
                          <a href="https://ca-code-works.github.io/Vision-2023/challenge/" class="btn btn-outline-primary btn-lg p-x-md rounded-50 m-l-sm"
                              role="button">Explore challenges</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }

}
window.customElements.define('get-involved', GetInvolved);
// Download PDF Component
class DownloadPDF extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<div class="section-primary p-5">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col">
                  <div class="text-center">
                      <a href="/pdf/Vision-2023-California-Technology-Strategic-Plan.pdf" class="btn btn-outline-light rounded-50" role="button"><span
                              class="ca-gov-icon-file-pdf"></span> Download Vision 2023 PDF document</a>
                  </div>
              </div>
          </div>
      </div>
  </div>`;
    }

}
window.customElements.define('download-pdf', DownloadPDF);
// This is just the arrow icons
class FooterLinks extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<div class="row"><div class="col-sm">
      <ul class="list-none">
        <li class="m-y"><a href="/vision/">Our Vision</a></li>
        <li class="m-y"><a href="/process/">Our Process</a></li>
        <li class="m-y"><a href="/references.html">References</a></li>
      </ul>
  </div>
  <div class="col-sm">
      <ul class="list-none">
        <li class="m-y"><a href="/pdf/Research-Findings-and-Insights.pdf">Research Findings and Insights</a></li>
        <li class="m-y"><a href="/acknowledgements.html">Acknowledgements</a></li>
        <li class="m-y"><a href="/our-thanks.html">Thanks</a></li>
      </ul>
  </div>`;
    }

}
window.customElements.define('footer-links', FooterLinks);

// This is just the arrow icons
class FooterNav extends window.HTMLElement {
    connectedCallback() {
        const { classPrefix, classList } = this.dataset;
        this.innerHTML = `<ul class="footer-links">
      <li>
          <a href="#skip-to-content">Back to Top</a>
      </li>
      <li>
          <a href="/use.html">Conditions of Use</a>
      </li>
      <li>
          <a href="/privacy-policy.html">Privacy Policy</a>
      </li>
      <li>
          <a href="/accessibility.html">Accessibility</a>
      </li>
      <li>
          <a href="/pdf/WebsiteAccessibilityCert-vision2023.cdt.ca.gov.pdf">Accessibility Certification</a>
      </li>
  </ul>`;
    }

}
window.customElements.define('footer-nav', FooterNav);

// Get current year
document.getElementById("year").innerHTML = new Date().getFullYear();