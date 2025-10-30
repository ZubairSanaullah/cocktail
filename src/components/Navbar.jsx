import React from 'react'
import { navLinks } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { use } from 'react'

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                // start: "top top",
                // end: "bottom top",
                start: 'bottom top',
                scrub: true
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'rgba(0, 0, 0, 0)'}, {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })
  return (
    <nav>
        <div>
            <a href="#home" className='flex itmes-center gap-2'>
                <img src="/images/logo.png" alt="logo" />
                <p>Velvet Cocktails</p>
            </a>

            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar