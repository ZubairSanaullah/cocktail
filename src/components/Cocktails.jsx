import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeLine = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })

        parallaxTimeLine.from('#c-left-leaf', {
            x: -100,
            y: 100,
        })

        .from('#c-right-leaf', {
            x: 100,
            y: 100,
        })

        //1:34:32
    })
  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />

        <div className='list'>
            <div className='popular'>
                <h2>Most Popular Cocktails:

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </h2>
            </div>

            <div className='loved'>
                <h2>Most loved Cocktails:

                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className='md:me-28'>
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </h2>

            </div>

        </div>
    </section>
  )
}

export default Cocktails