import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);

  // Motion values for X/Y position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform these relative coordinates to degrees of rotation
  const rotateX = useTransform(y, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);

  // Apply a spring configuration to smooth out the movement
  const springConfig = { damping: 20, stiffness: 120, mass: 0.5 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coords relative to the element bounding box
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Convert mouse coordinates to values between -0.5 and 0.5
    const relativeX = (mouseX / width) - 0.5;
    const relativeY = (mouseY / height) - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Reset rotations smoothly back to center
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
        perspective: 1000,
        ...style
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default TiltCard;
