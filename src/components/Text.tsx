import React from 'react';
import { TextProps } from '../types';

/*
    * A component that renders text.
    * Can take in various props to configure the look, size and location of it.
 */
const Text: React.FC<TextProps> = ({
  text,
  font = 'font-sans', // Possible values: 'font-sans', 'font-serif', 'font-mono'. Full list: https://tailwindcss.com/docs/font-family
  color = 'text-gray-900', // Possible values: Tailwind's text colors like 'text-gray-900', 'text-red-500', 'text-blue-700'. Full list: https://tailwindcss.com/docs/text-color
  backgroundColor, // Possible values: Tailwind's background colors like 'bg-gray-100', 'bg-blue-500', 'bg-green-700'. Full list: https://tailwindcss.com/docs/background-color
  size = 'text-base', // Possible values: 'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', etc. Full list: https://tailwindcss.com/docs/font-size
  position = { x: 0, y: 0 }
}) => {
  return (
    <div
      className={`absolute ${font} ${color} ${size} ${backgroundColor || ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {text}
    </div>
  );
};

export default Text;