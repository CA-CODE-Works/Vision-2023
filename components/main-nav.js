// This is just the arrow icons
class MainNav extends window.HTMLElement {
    connectedCallback () {
      const { classPrefix, classList } = this.dataset;
      this.innerHTML = `<nav id="navigation" class="main-navigation singlelevel auto-highlight no-icons nav collapse" aria-owns="nav-icon3">
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