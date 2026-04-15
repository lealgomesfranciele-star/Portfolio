import useReveal from '../hooks/useReveal.js'

export default function Contato() {
  useReveal()
  return (
    <section className="sect sect-ivory" id="contato">
      <div className="container">
        <div className="sect-head">
          <span className="sect-chip">📬 Fale comigo</span>
          <h2>Entre em <span className="text-sage">Contato</span></h2>
          <div className="head-bar"></div>
        </div>
        <p className="contact-msg">Estou aberta a oportunidades e adoraria conectar! Sinta-se à vontade para me procurar.</p>
        <div className="contact-duo">
          <a href="mailto:lealgomesfranciele@gmail.com" className="contact-tile" data-anim>
            <div className="ct-icon"><i className="fas fa-envelope"></i></div>
            <div className="ct-body">
              <span className="ct-label">E-mail</span>
              <span className="ct-value">lealgomesfranciele@gmail.com</span>
            </div>
            <i className="fas fa-arrow-right ct-arrow"></i>
          </a>
          <a href="https://github.com/lealgomesfranciele-star" target="_blank" rel="noopener noreferrer" className="contact-tile" data-anim>
            <div className="ct-icon"><i className="fab fa-github"></i></div>
            <div className="ct-body">
              <span className="ct-label">GitHub</span>
              <span className="ct-value">lealgomesfranciele-star</span>
            </div>
            <i className="fas fa-arrow-right ct-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
