import React from 'react';
import { ContainerProps } from '../types';

/**
 * Container component that provides a flexible background with optional image support.
 * It ensures full-screen coverage and wraps children elements.
 * This is where you place all the other shapes!
 */
const Container: React.FC<ContainerProps> = ({
   backgroundColor = 'bg-gray-100', // Possible values: Tailwind's background colors like 'bg-gray-100', 'bg-blue-500', 'bg-green-700'. Full list: https://tailwindcss.com/docs/background-color
   backgroundImage, // URL string for a background image (optional)
   children// this is where all the other shapes go.
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