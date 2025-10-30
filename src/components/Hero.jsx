import React, { use } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import { useRef, useEffect } from 'react'


const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0)
        // .to('.lines', {y: -200}, 0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            })
        }
        // .to('.left-leaf', {
        //     y: 200,
        //     x: -100, 
        //     duration: 1.5, 
        //     ease: 'power1.inOut'
        // })
        // .to('.right-leaf', {
        //     y: 200,
        //     x: 100,
        //     duration: 1.5, 
        //     ease: 'power1.inOut'
        // })
    }, [])
  return (
    <>
        <section id='hero' className='noisy'>
            <h1 className='title'>Cocktails</h1>

            <img 
            src="/images/hero-left-leaf.png" alt="left-leaf" 
            className='left-leaf'
            />

            <img 
            src="/images/hero-right-leaf.png" alt="right-leaf" 
            className='right-leaf'
            />

            <div className='body'>
                <div className='content'>
                    <div className='space-y-5 hidden md:block'>
                        <p>Cocktail recipes for you to try</p>
                        <p className='subtitle'>
                            From around <br />the world
                        </p>
                    </div>

                    <div className='view-cocktails'>
                        <p className='subtitle'>
                            Every cocktail on out menu is handcrafted by our team of expert mixologists. We are committed to creating unique and delicious cocktails that will leave you wanting more.
                        </p>
                        <a href="#cocktails">View Cocktails</a>
                    </div>
                </div>
            </div>
        </section>

        <div className="video absolute inset-0">
            <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            src="/videos/output.mp4"
            />
        </div>
    </>
  )
}

export default Hero