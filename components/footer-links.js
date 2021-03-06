// This is just the arrow icons
class FooterLinks extends window.HTMLElement {
    connectedCallback () {
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
        <li class="m-y"><a href="/acknowledgements.html">Acknowledgements</a></li>
        <li class="m-y"><a href="/our-thanks.html">Thanks</a></li>
      </ul>
  </div>`;
    }
  
  }
  window.customElements.define('footer-links', FooterLinks);