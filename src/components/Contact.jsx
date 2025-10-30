import React from 'react'
import { openingHours, socials } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: 'words',
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut',
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02,
        })

        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.2,
        })

        .to('#f-left-leaf', {
            y: -50,
            duration: 1,
            ease: 'power1.inOut',
        })

        .to('#f-right-leaf', {
            y: -50,
            duration: 1,
            ease: 'power1.inOut',
        })
    }, '<');
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="right-leaf" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="left-leaf" id="f-left-leaf" />

        <div className='content'>
            <h2>Where to find us</h2>

            <div>
                <h3>Visit us at:</h3>
                <p>Address: 123 Main Street, City, Country</p>
            </div>

            <div>
                <h3>Contact us:</h3>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: 1Kk6m@example.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day}: {time.time}
                    </p>
                ))}
            </div>

            <div>
                <h3>Socials and More</h3>

                <div className='flex-center gap-5'>
                    {socials.map((socials) => (
                        <a 
                            href={socials.url}
                            key={socials.name}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={socials.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact