import React from 'react';
import { ContainerProps } from '../types';

const Container: React.FC<ContainerProps> = ({
  backgroundColor = 'bg-gray-100',
  backgroundImage,
  children
}) => {
  const containerStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: backgroundImage ? 'cover' : undefined,
    backgroundPosition: backgroundImage ? 'center' : undefined,
  };

  return (
    <div 
      className={`min-h-screen w-full ${backgroundColor} relative`}
      style={containerStyle}
    >
      {children}
    </div>
  );
};

export default Container;