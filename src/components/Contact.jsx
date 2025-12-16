import Button from './Button'

const ImageClipBox = ({src,ClipClass}) => (
     <div className={ClipClass}>
                        <img src={src} alt="Image" />
                    </div>
        )

const Contact = () => {
  return (
        <div id="contact" className="min-h-96 w-screen px-10 my-20">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden w-72 overflow-hidden h-full sm:block lg:w-96 lg:left-20">
                   <ImageClipBox src="img/contact-1.webp" ClipClass={"contact-clip-path-1"} />
                   <ImageClipBox src="img/contact-2.webp" ClipClass={"contact-clip-path-2 translate-y-60 lg:translate-y-40"} />
                </div>
                <div className="absolute right-0 -top-40 w-60 sm:top-1/2 lg:w-80 md:left-auto md:right-10 lg:top-20">
                   <ImageClipBox src="img/swordman-partial.webp" ClipClass={"md:scale-125 absolute"} />
                   <ImageClipBox src="img/swordman.webp" ClipClass={"md:scale-125 sword-man-clip-path"} />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10x] uppercase">
                        Join Zentry
                    </p>
                    <p className="special-font mt-10 text-5xl w-full font-zentry leading-[0.9] md:text-[6rem] ">Let&apos;s b<b>u</b>ild the<br/> n<b>e</b>w era of<br/> g<b>a</b>ming t<b>o</b>gether</p>
<Button id={'contact-button'} title={'Contact Us'} containerClass={'mt-10 cursor-pointer text-black'} /> 
                </div>
            </div>
        </div>
        )
}

        export default Contact