import React from 'react';
import { cocktailLists, mockTailLists } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// ✅ Import your images from src/assets
import leftLeaf from '../assets/images/cocktail-left-leaf.png';
import rightLeaf from '../assets/images/cocktail-right-leaf.png';

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    parallaxTimeLine
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="cocktails" className="noisy relative overflow-hidden">
      {/* ✅ Correct image imports */}
      <img src={leftLeaf} alt="left-leaf" id="c-left-leaf" className="absolute left-0" />
      <img src={rightLeaf} alt="right-leaf" id="c-right-leaf" className="absolute right-0" />

      <div className="list container mx-auto py-10 space-y-10">
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul className="space-y-4 mt-4">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex justify-between items-start md:me-28">
                <div>
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-gray-300">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-medium text-white">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most Loved Cocktails:</h2>
          <ul className="space-y-4 mt-4">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex justify-between items-start md:me-28">
                <div>
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-gray-300">
                    {country} | {detail}
                  </p>
                </div>
                <span className="font-medium text-white">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
