class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="header_inner">
                <h1 tabindex="0" class="header_title">RestoHunter</h1>
            </div>        
            
            <button id="menu" class="header_menu">☰</button>
            <nav id="drawer" class="nav">
                <ul class="nav_list">
                    <li class="nav_item"><a href="#/home">Home</a></li>
                    <li class="nav_item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav_item"><a href="https://www.linkedin.com/in/rina-herlina/" target="_blank" rel="noreferrer">About Us</a></li>
                </ul>
            </nav>     
        `;
  }
}

customElements.define('app-bar', AppBar);
