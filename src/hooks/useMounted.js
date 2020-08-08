import { useState, useEffect } from 'react';

const useMounted = (delay) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timeout);
  }, []);

  return { isMounted };
};

export default useMounted;
