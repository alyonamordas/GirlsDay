import React from 'react';
import { motion } from 'framer-motion';
import { ImageProps } from '../types';

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
  position = { x: 0, y: 0 },
  description,
  rounded = false,
  shadow = true,
}) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`
        relative 
        ${rounded ? 'rounded-lg overflow-hidden' : ''} 
        ${shadow ? 'shadow-lg' : ''}
      `}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover"
        />
        {description && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
            {description}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Image;