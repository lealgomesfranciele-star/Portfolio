import { useEffect, useRef } from 'react'
import useReveal from '../hooks/useReveal.js'

const skills = [
  { name: 'Comunicação', percent: 90 },
  { name: 'Trabalho em Equipe', percent: 93 },
  { name: 'Organização', percent: 85 },
  { name: 'Informática', percent: 80 },
  { name: 'Proatividade', percent: 88 },
  { name: 'Resiliência', percent: 92 },
]

const CIRC = 2 * Math.PI * 42

export default function Skills() {
  useReveal()
  const ref = useRef(null)

  useEffect(() => {
    const circles = ref.current?.querySelectorAll('.sl-progress') ?? []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const circle = entry.target
          const percent = parseInt(circle.getAttribute('data-percent'), 10)
          const offset = CIRC - (CIRC * percent / 100)
          circle.style.strokeDasharray = CIRC
          circle.style.strokeDashoffset = offset
          observer.unobserve(circle)
        }
      })
    }, { threshold: 0.4 })
    circles.forEach(c => observer.observe(c))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sect" id="skills">
      <div className="container">
        <div className="sect-head">
          <span className="sect-chip">💪 Competências</span>
          <h2>Minhas <span className="text-sage">Habilidades</span></h2>
          <div className="head-bar"></div>
        </div>
        <div className="skill-leaves" ref={ref}>
          {skills.map(s => (
            <div key={s.name} className="skill-leaf" data-anim>
              <div className="sl-circle">
                <svg viewBox="0 0 100 100">
                  <circle className="sl-track" cx="50" cy="50" r="42" />
                  <circle className="sl-progress" cx="50" cy="50" r="42" data-percent={s.percent} />
                </svg>
                <span className="sl-val">{s.percent}%</span>
              </div>
              <span className="sl-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
