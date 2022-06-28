import React from 'react';

interface ButtonProps {
  type?: string;
}

const Button: React.ReactNode = ({ type }: ButtonProps) => {
  console.log('type', type);

  return <button>xxx-{type}</button>;
};

export default Button;
