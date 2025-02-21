import React from 'react';
import { motion } from 'framer-motion';
import { ImageProps } from '../types';

/**
 * Image component renders an image with customizable properties such as size, position, border radius, and shadow.
 */
const Image: React.FC<ImageProps> = ({
   src, // The image source URL
   alt='alt text', // Alternative text for the image (you don't need to worry about this one)
   width = 200, // The width of the image in pixels
   height = 200, // The height of the image in pixels
   position = { x: 0, y: 0 }, // Object specifying the x and y coordinates
   description, // Optional description displayed as an overlay
   rounded = false, // If true, applies rounded corners
   shadow = true // If true, applies a shadow effect
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