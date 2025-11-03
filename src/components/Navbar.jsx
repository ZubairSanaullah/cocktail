import React from 'react';
import { navLinks } from '../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// ✅ Import your logo from src/assets/images
import logo from '../assets/images/logo.png';

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        scrub: true,
      },
    });

    navTween.fromTo(
      'nav',
      { backgroundColor: 'rgba(0, 0, 0, 0)' },
      {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="logo" />
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
  );
};

export default Navbar;
