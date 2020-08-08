import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useScrollTrigger = (sectionId) => {
  gsap.registerPlugin(ScrollTrigger);

  const refSection = useRef(null);

  useEffect(() => {
    gsap.fromTo(refSection.current, { y: '+=50', opacity: 0 }, { y: 0, opacity: 1, duration: 2, scrollTrigger: {
      trigger: sectionId,
      start: 'top 50%',
    }})
  }, [])

  return { refSection };
};

export default useScrollTrigger;
