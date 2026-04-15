export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-nature-bg"></div>
      <div className="hero-content">
        <div className="hero-col-text">
          <div className="hero-tag">
            <span className="tag-leaf">🌱</span> Portfólio Pessoal
          </div>
          <h1>Franciele<br /><span className="text-sage">Leal Gomes</span></h1>
          <p className="hero-bio">Jovem profissional com olhar atento e espírito conectado à natureza. Determinada, curiosa e sempre em busca de novas raízes para crescer.</p>
          <div className="hero-actions">
            <a href="#contato" className="btn-forest">
              <i className="fas fa-leaf"></i> Fale comigo
            </a>
            <a href="#sobre" className="btn-outline-forest">
              Conhecer mais <i className="fas fa-angle-down"></i>
            </a>
          </div>
        </div>
        <div className="hero-col-photo">
          <div className="photo-organic">
            <div className="photo-ring"></div>
            <img src="/perfil.jpg" alt="Franciele Leal Gomes" />
          </div>
          <div className="float-tag ft-1" data-float>
            <i className="fas fa-eye"></i> Visão clara
          </div>
          <div className="float-tag ft-2" data-float>
            <i className="fas fa-seedling"></i> Crescimento
          </div>
        </div>
      </div>
    </section>
  )
}
