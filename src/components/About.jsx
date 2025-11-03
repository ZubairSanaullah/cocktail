import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

// Import images from src/assets
import abt1 from '../assets/images/abt1.png';
import abt2 from '../assets/images/abt2.png';
import abt3 from '../assets/images/abt3.png';
import abt4 from '../assets/images/abt4.png';
import abt5 from '../assets/images/abt5.png';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  useGSAP(() => {
    const titleSplit = new SplitText('#about h2', { type: 'words' });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
      },
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: 'expo.out',
        stagger: 0.02,
      })
      .from(
        '.top-grid div, .bottom-grid div',
        {
          opacity: 0,
          duration: 1,
          yPercent: 100,
          ease: 'power1.inOut',
          stagger: 0.04,
        },
        '-=0.5'
      );
  });

  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every drink is a masterpiece
              <span className="text-red-500"> - </span>
              Velvet Cocktails
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail is a unique blend of ingredients that creates a
              unique flavor profile. It's also a way to showcase your creativity
              and skill as a bartender. Whether you're a seasoned pro or just
              starting out, there's something for everyone at Velvet Cocktails.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold text-yellow">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Grid */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={abt1} alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={abt2} alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={abt5} alt="grid-img-5" />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={abt3} alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={abt4} alt="grid-img-4" />
        </div>
      </div>
    </div>
  );
};

export default About;
