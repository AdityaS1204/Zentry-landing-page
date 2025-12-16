import { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import AnimatedTitle from './AnimatedTitle'


gsap.registerPlugin(ScrollTrigger)


const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=1200 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0
    })
    ScrollTrigger.refresh()
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => clearTimeout(timer)
  }, [])


  return (
    <div id='about' className='min-h-screen w-screen'>
      <div className="mb-8 mt-36 flex flex-col relative items-center gap-5 ">
        <h2 className='text-sm uppercase font-general md:text-[10px] font-bold'>Welcome to zentry</h2>
        <AnimatedTitle title={"Disc<b>o</b>ver the World's l<b>a</b>rgest shared adventure"} containerClass='mb-8' textColor={'text-black'} />
        <div className="about-subtext">
          <p>The Games of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player form countless games and platform</p>
        </div>
      </div>
      <div className="h-dvh w-screen">
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image relative">
            <img
              src="img/about.webp"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About