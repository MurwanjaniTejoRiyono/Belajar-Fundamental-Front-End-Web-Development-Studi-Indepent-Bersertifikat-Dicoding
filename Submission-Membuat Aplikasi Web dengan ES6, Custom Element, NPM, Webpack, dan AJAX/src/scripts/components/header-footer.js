class HeaderFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container text-center mt-4">
                            <p class="footer">&copy; 2021. Dibuat oleh Murwanjani Tejo R.</p>
                        </div>`;
  }
}

customElements.define("header-footer", HeaderFooter);
