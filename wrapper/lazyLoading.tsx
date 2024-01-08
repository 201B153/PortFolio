'use client';
import React, { useRef, useEffect, useState } from 'react';

const LazyLoadComponent = ({ children }: any) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return <div ref={containerRef as any}>{isVisible && children}</div>;
};

export default LazyLoadComponent;
