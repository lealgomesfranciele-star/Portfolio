import useReveal from '../hooks/useReveal.js'

const cards = [
  { icon: 'fas fa-sun', title: 'Quem Sou', text: 'Sou Franciele Leal Gomes, uma profissional jovem que traz frescor e determinação para tudo o que faz. Assim como a natureza, acredito na força do crescimento constante.' },
  { icon: 'fas fa-compass', title: 'Meu Rumo', text: 'Busco oportunidades que me permitam aplicar meus conhecimentos, aprender com pessoas inspiradoras e contribuir positivamente nos ambientes em que me insiro.' },
  { icon: 'fas fa-leaf', title: 'Meus Pilares', text: 'Ética, resiliência, empatia e aprendizado contínuo. Esses valores são o solo fértil que sustenta minha trajetória profissional e pessoal.' },
]

export default function Sobre() {
  useReveal()
  return (
    <section className="sect" id="sobre">
      <div className="container">
        <div className="sect-head">
          <span className="sect-chip">🌿 Conheça-me</span>
          <h2>Sobre <span className="text-sage">Mim</span></h2>
          <div className="head-bar"></div>
        </div>
        <div className="about-grid">
          {cards.map(c => (
            <div key={c.title} className="about-leaf-card" data-anim>
              <div className="alc-icon"><i className={c.icon}></i></div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
