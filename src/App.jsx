import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Caminho from './components/Caminho.jsx'
import Skills from './components/Skills.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="leaf-deco leaf-1">🌿</div>
      <div className="leaf-deco leaf-2">🍃</div>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Caminho />
        <Skills />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
