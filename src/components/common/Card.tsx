// src/components/common/Card.tsx
import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <div className={clsx(
      'card p-6',
      hover ? 'hover:shadow-hover' : '',
      className
    )}>
      {children}
    </div>
  );
};

export default Card;