import { type ClassValue } from "clsx";

// Fade in animation classes with stagger
export const fadeInStagger = (index: number = 0): ClassValue => ({
  opacity: 0,
  transform: "translateY(10px)",
  animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
});

// Scroll reveal animation
export const scrollReveal = (): ClassValue => ({
  opacity: 0,
  transform: "translateY(20px)",
  transition: "all 0.6s ease-out",
  "&.visible": {
    opacity: 1,
    transform: "translateY(0)",
  },
});

// Hover animation for cards
export const cardHover = (): ClassValue => ({
  transition: "all 0.2s ease-out",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
  },
});

// Ripple effect for buttons
export const rippleEffect = (): ClassValue => ({
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(255,255,255,0.2)",
    top: 0,
    left: 0,
    transform: "scale(0)",
    opacity: 0,
    transition: "transform 0.3s ease-out, opacity 0.2s ease-out",
  },
  "&:active::after": {
    transform: "scale(2)",
    opacity: 0,
    transition: "0s",
  },
});