import React from 'react';
import { motion } from 'framer-motion';
import * as Tone from 'tone';
import { ShapeProps } from '../types';
import { getShapePath } from '../utils/shapes';

/**
 * Predefined animations for the shape.
 */
const animations = [
  {
    /** Pulsing effect: scales up, then shrinks, then returns to normal. */
    scale: [1, 1.2, 0.8, 1],
    transition: { duration: 0.5 }
  },
  {
    /** Full rotation effect: spins 360 degrees. */
    rotate: [0, 360],
    transition: { duration: 0.7 }
  },
  {
    /** Bouncing effect: moves up and down. */
    y: [0, -20, 0],
    transition: { duration: 0.4 }
  },
  {
    /** Side-to-side shake: moves left and right. */
    x: [0, 10, -10, 0],
    transition: { duration: 0.3 }
  },
  {
    /** Fading pulse: briefly fades out and back in while slightly scaling up. */
    opacity: [1, 0.5, 1],
    scale: [1, 1.1, 1],
    transition: { duration: 0.4 }
  },
  {
    /** Tilting effect: rotates left and right while slightly scaling up. */
    rotate: [0, -45, 45, 0],
    scale: [1, 1.1, 1.1, 1],
    transition: { duration: 0.6 }
  },
  {
    /** Dynamic bounce: shrinks, grows, and moves up and down. */
    scale: [1, 0.8, 1.2, 1],
    y: [0, 10, -10, 0],
    transition: { duration: 0.5 }
  },
  {
    /** Half-spin: rotates 180 degrees and returns. */
    rotate: [0, 180, 0],
    scale: [1, 0.9, 1],
    transition: { duration: 0.6 }
  }
];
/**
 * Shape component renders an SVG shape with customizable properties such as type, color, size, and border.
 * It also plays a musical note when clicked and triggers an animation.
 */

const Shape: React.FC<ShapeProps> = ({
   type, // Possible values: 'circle', 'square', 'star', 'heart', 'cloud', 'flower', 'butterfly', 'moon'
   color = '#6366f1', // Any valid CSS color string https://webcode.tools/css-generator/color
   opacity = 1, // A number between 0 and 1 representing transparency (0 being fully transparent)
   size = 50, // A number representing the width and height in pixels
   borderColor = '#4f46e5', // Any valid CSS color string https://webcode.tools/css-generator/color
   borderWidth = 2, // A number representing the border thickness in pixels
   borderRadius = 0, // A number representing the border radius for squares (how round the corners are)
   position = { x: 0, y: 0 } // An object defining the shape's position
}) => {
  const synth = React.useRef<Tone.Synth | null>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    synth.current = new Tone.Synth().toDestination();
    return () => {
      synth.current?.dispose();
    };
  }, []);

  /**
   * Returns a random animation from the predefined animations list.
   */
  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  /**
   * Determines the musical note associated with the shape type.
   */
  const getNoteForShape = () => {
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
    const shapeIndex = ['circle', 'square', 'star', 'heart', 'cloud', 'flower', 'butterfly', 'moon']
      .indexOf(type);
    return notes[shapeIndex % notes.length];
  };

  /**
   * Handles the shape click event, triggering a musical note and animation.
   */
  const handleClick = () => {
    if (synth.current && !isAnimating) {
      setIsAnimating(true);
      synth.current.triggerAttackRelease(getNoteForShape(), '0.1');
      setTimeout(() => setIsAnimating(false), 600); // Reset after animation
    }
  };

  const shapePath = getShapePath(type);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      whileHover={{ scale: 1.1 }}
      animate={isAnimating ? getRandomAnimation() : {}}
      onClick={handleClick}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        style={{ opacity }}
      >
        <path
          d={shapePath}
          stroke={borderColor}
          strokeWidth={borderWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          rx={type === 'square' ? borderRadius : undefined}
        />
      </svg>
    </motion.div>
  );
};

export default Shape;