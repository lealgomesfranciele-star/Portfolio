import useReveal from '../hooks/useReveal.js'
import { projetos } from '../data/projetos.js'

export default function Projetos() {
  useReveal()
  return (
    <section className="sect" id="projetos">
      <div className="container">
        <div className="sect-head">
          <span className="sect-chip">🌼 Projetos</span>
          <h2>Meus <span className="text-sage">Projetos</span></h2>
          <div className="head-bar"></div>
        </div>
        <div className="about-grid">
          {projetos.map(p => (
            <div key={p.id} className="about-leaf-card" data-anim>
              <div className="alc-icon" style={{ fontSize: '1.6rem' }}>
                <span>{p.emoji}</span>
              </div>
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                {p.categorias.map(cat => (
                  <span
                    key={cat}
                    style={{
                      fontSize: '.72rem',
                      fontWeight: 600,
                      padding: '4px 12px',
                      borderRadius: '50px',
                      background: 'rgba(124,169,130,.14)',
                      color: 'var(--forest)',
                    }}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
