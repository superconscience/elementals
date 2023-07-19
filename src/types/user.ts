import { Color } from './color';

// User. User rank is determined by its array index
export interface User {
  // Favorite color
  color: Color;
  // Full name
  name: string;
  // Race speed
  speed: number;
  // Race time in milliseconds
  time: number;
}
