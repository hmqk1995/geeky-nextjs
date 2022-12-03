import { useEffect, useState } from 'react';

export default function useWindowScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);

  function handleScroll() {
    setScrollTop(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return scrollTop;
}
