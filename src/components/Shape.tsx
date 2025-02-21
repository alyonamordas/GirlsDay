import React from 'react';
import { motion } from 'framer-motion';
import * as Tone from 'tone';
import { ShapeProps } from '../types';
import { getShapePath } from '../utils/shapes';

const animations = [
  { 
    scale: [1, 1.2, 0.8, 1],
    transition: { duration: 0.5 }
  },
  { 
    rotate: [0, 360],
    transition: { duration: 0.7 }
  },
  { 
    y: [0, -20, 0],
    transition: { duration: 0.4 }
  },
  { 
    x: [0, 10, -10, 0],
    transition: { duration: 0.3 }
  },
  { 
    opacity: [1, 0.5, 1],
    scale: [1, 1.1, 1],
    transition: { duration: 0.4 }
  },
  { 
    rotate: [0, -45, 45, 0],
    scale: [1, 1.1, 1.1, 1],
    transition: { duration: 0.6 }
  },
  { 
    scale: [1, 0.8, 1.2, 1],
    y: [0, 10, -10, 0],
    transition: { duration: 0.5 }
  },
  { 
    rotate: [0, 180, 0],
    scale: [1, 0.9, 1],
    transition: { duration: 0.6 }
  }
];

const Shape: React.FC<ShapeProps> = ({
  type,
  color = '#6366f1',
  opacity = 1,
  size = 50,
  borderColor = '#4f46e5',
  borderWidth = 2,
  borderRadius = 0,
  position = { x: 0, y: 0 }
}) => {
  const synth = React.useRef<Tone.Synth | null>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    synth.current = new Tone.Synth().toDestination();
    return () => {
      synth.current?.dispose();
    };
  }, []);

  const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  const getNoteForShape = () => {
    const notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];
    const shapeIndex = ['circle', 'square', 'star', 'heart', 'cloud', 'flower', 'butterfly', 'moon']
      .indexOf(type);
    return notes[shapeIndex % notes.length];
  };

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