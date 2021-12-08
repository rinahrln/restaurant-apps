class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero_inner">
                <h2 tabindex="0" class="hero_title">Welcome to RestoHunter</h2>
                <p tabindex="0" class="hero_tagline">You deserve to find the best restaurants!</p>
            </div>
        </div>  
    `;
  }
}

customElements.define('hero-content', HeroContent);
