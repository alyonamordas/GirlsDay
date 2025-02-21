export type Position = {
  x: number;
  y: number;
};

export type TextProps = {
  text: string;
  font?: string;
  color?: string;
  backgroundColor?: string;
  size?: string;
  position?: Position;
};

export type ShapeType = 'circle' | 'square' | 'star' | 'heart' | 'cloud' | 'flower' | 'butterfly' | 'moon';

export type ShapeProps = {
  type: ShapeType;
  color?: string;
  opacity?: number;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  position?: Position;
};

export type ContainerProps = {
  backgroundColor?: string;
  backgroundImage?: string;
  children: React.ReactNode;
};

export type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  position?: Position;
  description?: string;
  rounded?: boolean;
  shadow?: boolean;
};