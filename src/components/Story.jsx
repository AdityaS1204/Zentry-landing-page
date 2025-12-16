import AnimatedTitle from "./AnimatedTitle"
import RoundedCorner from "./RoundedCorner"
import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";

const Story = () => {
    const frameRef = useRef(null);
    const handleMouseLeave = () => {
        const frame = frameRef.current;
        gsap.to(frame, {
            duration: 0.3,
            rotateX:0, rotateY:0,
            transfromPerspective: 500,
            ease: "power1.inOut"
        });

    }
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const frame = frameRef.current;
        if (!frame) return;
        const rect = frame.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(frame, {
            duration: 0.3,
            rotateX, rotateY,
            transfromPerspective: 500,
            ease: "power1.inOut"
        });

    }

    return (
        <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col py-5 items-center pb-24">
                <p className="font-general text-sm uppercase md:text-[10px] pb-7">the multiversal ip world</p>
                <div className="absolute size-full">
                    <AnimatedTitle
                        title="The st<b>o</b>ry of <br/> the hidden real<b>m</b>"
                        sectionId="#story"
                        textColor={'text-blue-50'}
                        containerClass={"mt-5 pointer-events-none mix-blend-difference relative z-10"}
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img src="img/entrance.webp" alt="entrance"
                                    className="object-contain"
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                />
                            </div>
                        </div>
                        <RoundedCorner />
                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:mt-44 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-96 max-w-sm text-center text-violet-50 md:text-start font-circular-web">Where realms converge, lies Zentry and boundless pillars. Discover its secrets  and shape your fate  admist infinite opportunities.</p>
<Button id={'realm-button'} title={'Discover Prologue'} containerClass={'mt-6 text-black'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story