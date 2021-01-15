// This is just the arrow icons
class GetInvolved extends window.HTMLElement {
    connectedCallback () {
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