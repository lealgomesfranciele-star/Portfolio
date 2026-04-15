import useReveal from '../hooks/useReveal.js'

const steps = [
  { step: 'Passo 01', icon: 'fas fa-graduation-cap', title: 'Formação Acadêmica', text: 'Construção de uma base sólida de conhecimentos por meio da educação formal, desenvolvendo pensamento crítico e habilidades técnicas.' },
  { step: 'Passo 02', icon: 'fas fa-hands-helping', title: 'Experiência Prática', text: 'Vivências no mercado de trabalho que moldaram minha capacidade de adaptação, trabalho em equipe e resolução de problemas reais.' },
  { step: 'Passo 03', icon: 'fas fa-arrow-trend-up', title: 'Evolução Contínua', text: 'Cursos, certificações e aprendizado autodidata que mantêm meus conhecimentos atualizados e minha mente aberta a novos horizontes.' },
]

export default function Caminho() {
  useReveal()
  return (
    <section className="sect sect-green" id="caminho">
      <div className="container">
        <div className="sect-head light">
          <span className="sect-chip chip-light">🛤️ Trajetória</span>
          <h2>Meu <span className="text-ivory">Caminho</span></h2>
          <div className="head-bar bar-light"></div>
        </div>
        <div className="path-cards">
          {steps.map(s => (
            <div key={s.step} className="path-card" data-anim>
              <div className="pc-top">
                <span className="pc-step">{s.step}</span>
                <div className="pc-icon"><i className={s.icon}></i></div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
