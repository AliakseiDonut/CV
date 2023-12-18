import Education from './components/Education'
import Header from './components/Header'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="w-2/3 mx-auto">
      <Header />
      <div className='flex py-5 gap-10'>
        <div className='flex flex-col gap-10'>
          <Skills />
          <Education />
          <Languages />
        </div>
        <Projects />
      </div>
    </div>
  )
}

export default App
