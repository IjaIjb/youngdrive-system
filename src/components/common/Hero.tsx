// src/components/common/Hero.tsx
import { ReactNode } from 'react';
import clsx from 'clsx';

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  backgroundImage?: string;
  children?: ReactNode;
  fullHeight?: boolean;
  overlay?: boolean;
  className?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  children,
  fullHeight = false,
  overlay = true,
  className,
}: HeroProps) => {
  return (
    <div 
      className={clsx(
        'relative flex items-center',
        fullHeight ? 'min-h-screen' : 'py-32 md:py-40',
        backgroundImage ? 'bg-cover bg-center' : 'bg-primary',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 hero-overlay opacity-80"></div>
      )}
      
      <div className="container-custom relative z-10 text-white">
        {typeof title === 'string' ? (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        ) : (
          title
        )}
        
        {subtitle && typeof subtitle === 'string' ? (
          <p className="text-xl md:text-2xl max-w-3xl mb-8">{subtitle}</p>
        ) : (
          subtitle
        )}
        
        {children}
      </div>
    </div>
  );
};

export default Hero;