import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#caminho', label: 'Caminho' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(section => {
        const top = section.offsetTop - 120
        if (window.scrollY >= top) current = section.getAttribute('id')
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <nav className={`topnav${scrolled ? ' scrolled' : ''}`} id="topnav">
      <div className="topnav-inner">
        <a href="#home" className="brand" onClick={(e) => handleClick(e, '#home')}>
          <span className="brand-leaf">☘</span> Franciele
        </a>
        <div className={`topnav-links${open ? ' open' : ''}`} id="topnavLinks">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className={`toggle-menu${open ? ' active' : ''}`}
          id="toggleMenu"
          aria-label="Menu"
          onClick={() => setOpen(o => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
