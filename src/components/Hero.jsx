import { useState, useRef } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const upcomingVideosIndex = (currentIndex % totalVideos) + 1;

  const nextVideoRef = useRef(null);

  const hanadleMiniVdClick = () => {
    setHasClicked(true)
    setCurrentIndex(upcomingVideosIndex)
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  }


  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-video', { visibility: 'visible' });

      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current.play(),

      })
      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',

      })
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true })

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 94%, 0% 100%)',
      borderRadius: '0 0 40% 10%',
    })
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: 1,
        invalidateOnRefresh: true,
        markers:true,
      }
    })
    setTimeout(()=> ScrollTrigger.refresh(),100)
  }, { dependencies: [] })


  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      {/* {isLoading && (
  <div className='flex-center bg-violet-50 h-dvh w-screen absolute z-[100] overflow-hidden' >
    <div className="three-body">
      <div className="three-body__dot"/>
      <div className="three-body__dot"/>
      <div className="three-body__dot"/>
    </div>
  </div>
)} */}

      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden bg-blue-75 rounded-lg'>
        <div>
          <div className="mask-clip-path absolute-center absolute size-64 cursor-pointer overflow-hidden rounded-lg z-50">
            <div onClick={hanadleMiniVdClick} className='origin-center opacity-0 transition-all duration-500 ease-in hover:scale-50 hover:opacity-100 '>
              <video
                id='current-video'
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideosIndex)}
                muted
                loop
                autoPlay
                className='rounded-lg size-64 origin-center scale-150 object-cover object-center'
                onLoadedData={handleVideoLoad}
              />

            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            id='next-video'
            className='absolute-center invisible absolute z-20 size-64 object-cover object-center '
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            loop
            muted
            autoPlay
            className='absolute left-0 top-0 size-full object-cover object-center'
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0  top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e</h1>
            <p className="mb-5 font-robert-regular text-blue-100 max-w-64">Enter the Metagame Layer <hr />Unleash the Play Economy</p>
            <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="!bg-yellow-300 flex-center gap-1" />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 -z-40 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  )
}

export default Hero