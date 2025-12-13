import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'

const Navbar = () => {
    const [lastScrollY, setlastScrollY] = useState(0)

    const navContainerRef = useRef(null)
    const AudioIndicatorRef = useRef(null)
    const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']
    const [isAudioPlaying, setisAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const [isNavbarVisible, setIsNavbarVisible] = useState(false)
    const { y: currentScrollY } = useWindowScroll()

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavbarVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        } else if (currentScrollY > lastScrollY) {
            setIsNavbarVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        } else if (currentScrollY < lastScrollY) {
            setIsNavbarVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        }
    }, [currentScrollY, lastScrollY])

    // useEffect(() => {
    //     gsap.to(navContainerRef.current,{
    //         y: isNavbarVisible ? 0 : -100,
    //         opacity: isNavbarVisible ? 1 : 0,
    //         duration: 0.2,
    //     })
    // },[isNavbarVisible])

    const toggleAudioIndicator = () => {
        setIsIndicatorActive((prev) => prev + 1)
        setisAudioPlaying((prev) => !prev)
    }

    useEffect(() => {
        if (isAudioPlaying) {
            AudioIndicatorRef.current.play();
        } else {
            AudioIndicatorRef.current.pause();
        }
    }, [isAudioPlaying])

    return (
        <div ref={navContainerRef} className='inset-x-0 fixed top-4 z-50 h-16 trnasition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 -translate-y-1/2  w-full'>
                <nav className='flex justify-between items-center size-full p-4' id='navbar'>
                    <div className="flex items-center gap-4">
                        <img src="/img/logo.png" alt="logo" className='w-10' />
                        <Button title="Products" id="Products-btn" leftIcon={<TiLocationArrow />} containerClass="!bg-blue-300 flex-center gap-1" />
                    </div>

                    <div className="flex items-center gap-7">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a href={`/`} key={index} className='nav-hover-btn'>{item}</a>
                            ))}
                        </div>
                        <button className="flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                            <audio ref={AudioIndicatorRef} src={'/audio/loop.mp3'} className='hidden' loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}
                        </button>
                    </div>

                </nav>
            </header>
        </div >
    )
}

export default Navbar