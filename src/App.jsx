import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Story from './components/Story'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <SmoothScroll>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Story />
      </main>
    </SmoothScroll>
  )
}

export default App