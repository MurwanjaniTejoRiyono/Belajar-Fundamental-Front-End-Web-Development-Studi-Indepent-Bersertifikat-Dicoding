import illustration from "../../image/5188822.png";

class HeaderContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="container mt-5 mt-md-2">
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-8 text-xs-center text-center text-lg-left">
                                    <div class="header-caption px-4 py-1">
                                        188+ negara telah terinfeksi
                                    </div>
                                    <h1 class="text-white header-text pt-2">WASPADA <span class="text-orange">CORONA</span></h1>
                                    <p class="header-subtext text-gray mt-3 mb-5 text-justify">
                                        Penyakit virus corona (COVID-19) adalah penyakit menular yang disebabkan oleh virus SARS-CoV-2.
                                        Sebagian besar orang yang tertular COVID-19 akan mengalami gejala ringan hingga sedang, dan akan pulih tanpa penanganan khusus. Namun, sebagian orang akan mengalami sakit parah dan memerlukan bantuan medis.
                                        Website ini menyajikan data statistik COVID-19 di Indonesia
                                    </p>
                                    <a href="/now/dist/index.html" target="_blank" class="mt-2 text-decoration-none btn-corona-detail d-inline-block">
                                        <h2 class="text-orange">Klik Untuk Detail Kasus Covid-19</h2>
                                    </a>
                                </div>
                                <div class="col-12 col-lg-4 position-relative illustration text-center">
                                    <img src="${illustration}" class="img-illustration">
                                </div>
                            </div>
                        </div>`;
  }
}

customElements.define("header-content", HeaderContent);
