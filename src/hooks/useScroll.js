import { useState, useEffect } from 'react';

const useScroll = () => {
  const [lastScroll, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('none');

  const handleScroll = () => {
    const currentPosition = window.scrollY;

    if (currentPosition < 30) {
      setScrollDirection('none');
    } else if (currentPosition > lastScroll && currentPosition > 100) {
      if (scrollDirection !== 'down') setScrollDirection('down');
    } else if (currentPosition + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') setScrollDirection('up');
    }

    setLastScrollTop(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return { scrollDirection };
};

export default useScroll;
