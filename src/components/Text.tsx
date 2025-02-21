import React from 'react';
import { TextProps } from '../types';

const Text: React.FC<TextProps> = ({
  text,
  font = 'font-sans',
  color = 'text-gray-900',
  backgroundColor,
  size = 'text-base',
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