// src/components/common/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline-primary' | 'outline-secondary';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  external,
  fullWidth,
  className,
  ...rest
}: ButtonProps) => {
  const classes = clsx(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-accent': variant === 'accent',
      'btn-outline btn-outline-primary': variant === 'outline-primary',
      'btn-outline btn-outline-secondary': variant === 'outline-secondary',
      'py-2 px-4 text-sm': size === 'sm',
      'py-3 px-5': size === 'md',
      'py-4 px-6 text-lg': size === 'lg',
      'w-full': fullWidth,
    },
    className
  );

  if (to) {
    if (external) {
      return (
        <a 
          href={to}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;