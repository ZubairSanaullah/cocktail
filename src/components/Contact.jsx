import React from 'react';
import { openingHours, socials } from '../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

// ✅ Import assets from src/assets
import leftLeaf from '../assets/images/footer-left-leaf.png';
import rightLeaf from '../assets/images/footer-right-leaf.png';

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText('#contact h2', { type: 'words' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
      },
      ease: 'power1.inOut',
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.05,
      })
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.1,
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
      });
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ✅ Correct image imports */}
      <img src={rightLeaf} alt="right-leaf" id="f-right-leaf" className="absolute right-0" />
      <img src={leftLeaf} alt="left-leaf" id="f-left-leaf" className="absolute left-0" />

      <div className="content text-center space-y-6 py-10">
        <h2>Where to find us</h2>

        <div>
          <h3>Visit us at:</h3>
          <p>Address: Ghaziabad, Lahore, Pakistan.</p>
        </div>

        <div>
          <h3>Contact us:</h3>
          <p>Phone: +923214903447</p>
          <p>Email: zubairsanaullah1122@gmail.com</p>
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
          <div className="flex justify-center gap-5 mt-2">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* ✅ Each icon should be imported or use a proper URL */}
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
