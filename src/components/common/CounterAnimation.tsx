// src/components/common/CounterAnimation.tsx
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const CounterAnimation = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    if (inView) {
      window.requestAnimationFrame(step);
    }
  }, [end, duration, inView]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref} className={`animate-counter ${className}`}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

export default CounterAnimation;