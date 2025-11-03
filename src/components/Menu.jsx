import React, { useRef, useState } from 'react';
'use client';

import { allCocktails } from '../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// ✅ Import your assets from src/assets/images
import leftLeaf from '../assets/images/slider-left-leaf.png';
import rightLeaf from '../assets/images/slider-right-leaf.png';
import leftArrow from '../assets/images/left-arrow.png';
import rightArrow from '../assets/images/right-arrow.png';

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOfSet) => {
    return allCocktails[(currentIndex + indexOfSet + totalCocktails) % totalCocktails];
  };

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const prevCocktail = getCocktailAt(-1);

  useGSAP(() => {
    gsap.fromTo(
      '#title',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      }
    );

    gsap.fromTo(
      '.cocktail img',
      { opacity: 0, xPercent: -100 },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      '.details h2',
      { opacity: 0, yPercent: 100 },
      {
        yPercent: 0,
        opacity: 1,
        ease: 'power1.inOut',
      }
    );

    gsap.fromTo(
      '.details p',
      { opacity: 0, yPercent: 100 },
      {
        yPercent: 0,
        opacity: 1,
        ease: 'power1.inOut',
      }
    );
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* ✅ Use imported assets */}
      <img src={leftLeaf} alt="left-leaf" id="m-left-leaf" />
      <img src={rightLeaf} alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktails Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${isActive ? 'text-white' : 'text-white/50'}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src={rightArrow} alt="right-arrow" aria-hidden="true" />
          </button>

          <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
            <img src={leftArrow} alt="left-arrow" aria-hidden="true" />
            <span>{nextCocktail.name}</span>
          </button>
        </div>

        <div className="cocktail">
          {/* ✅ currentCocktail.image is assumed to come from constants */}
          <img src={currentCocktail.image} className="object-contain" alt={currentCocktail.name} />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
