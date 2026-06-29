import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./ThreeCanvas.css";

function ThreeCanvas({ darkMode }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // --- SETUP SCENE, CAMERA, RENDERER ---
    const scene = new THREE.Scene();
    
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(
      60,
      containerWidth / containerHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true, // transparent background to blend with CSS gradient
      antialias: true,
    });
    renderer.setSize(containerWidth, containerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- CONSTELLATION NODE GENERATION ---
    const particleCount = 120;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    // Place particles on a sphere surface with slight randomness
    const radius = 3.2;
    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere for uniform distribution
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      particlePositions[i * 3] = x + (Math.random() - 0.5) * 0.4;
      particlePositions[i * 3 + 1] = y + (Math.random() - 0.5) * 0.4;
      particlePositions[i * 3 + 2] = z + (Math.random() - 0.5) * 0.4;

      // Small movement velocities
      particleVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.003,
      });
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Particle styling depending on light/dark mode
    const particleColor = darkMode ? 0x4db8ff : 0x005cb9;
    const particlesMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.12,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // --- LINE SEGMENTS (CONSTELLATION CONNECTIONS) ---
    // We will dynamically connect nodes that are close to each other in each frame
    const lineMaterial = new THREE.LineBasicMaterial({
      color: darkMode ? 0x005cb9 : 0x4db8ff,
      transparent: true,
      opacity: darkMode ? 0.35 : 0.25,
    });

    // Preallocate max possible lines to avoid garbage collection overhead
    const maxLines = 400;
    const linePositions = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSystem);

    // --- MOUSE TRACKING ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event) => {
      // Calculate mouse pos normalized from -1 to 1
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // --- ANIMATION LOOP ---
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse rotation interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base auto-rotation
      particleSystem.rotation.y = elapsedTime * 0.08;
      particleSystem.rotation.x = elapsedTime * 0.04;
      lineSystem.rotation.y = elapsedTime * 0.08;
      lineSystem.rotation.x = elapsedTime * 0.04;

      // Apply mouse parallax camera shift
      camera.position.x = mouse.x * 1.5;
      camera.position.y = mouse.y * 1.5;
      camera.lookAt(scene.position);

      // Retrieve positions attribute to update velocities
      const positions = particlesGeometry.attributes.position.array;
      let lineIndex = 0;

      // Update positions based on velocities
      for (let i = 0; i < particleCount; i++) {
        let xVal = positions[i * 3];
        let yVal = positions[i * 3 + 1];
        let zVal = positions[i * 3 + 2];

        // Apply velocity
        xVal += particleVelocities[i].x;
        yVal += particleVelocities[i].y;
        zVal += particleVelocities[i].z;

        // Keep them bounded in the spherical area (boundary bounce)
        const dist = Math.sqrt(xVal * xVal + yVal * yVal + zVal * zVal);
        if (dist > radius + 0.4) {
          // Push back toward center
          particleVelocities[i].x -= xVal * 0.0001;
          particleVelocities[i].y -= yVal * 0.0001;
          particleVelocities[i].z -= zVal * 0.0001;
        } else if (dist < radius - 0.4) {
          // Push away from center
          particleVelocities[i].x += xVal * 0.0001;
          particleVelocities[i].y += yVal * 0.0001;
          particleVelocities[i].z += zVal * 0.0001;
        }

        // Apply slight speed limits/damping
        particleVelocities[i].x *= 0.98;
        particleVelocities[i].y *= 0.98;
        particleVelocities[i].z *= 0.98;

        // Add a random tiny nudge
        particleVelocities[i].x += (Math.random() - 0.5) * 0.0002;
        particleVelocities[i].y += (Math.random() - 0.5) * 0.0002;
        particleVelocities[i].z += (Math.random() - 0.5) * 0.0002;

        positions[i * 3] = xVal;
        positions[i * 3 + 1] = yVal;
        positions[i * 3 + 2] = zVal;
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      // Build lines dynamic array
      let numConnected = 0;
      for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          // Compute 3D distance
          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const distSq = dx * dx + dy * dy + dz * dz;

          // If distance is small enough, connect them
          if (distSq < 1.3 && numConnected < maxLines) { // approx 1.14 units max distance
            linePositions[lineIndex++] = x1;
            linePositions[lineIndex++] = y1;
            linePositions[lineIndex++] = z1;

            linePositions[lineIndex++] = x2;
            linePositions[lineIndex++] = y2;
            linePositions[lineIndex++] = z2;

            numConnected++;
          }
        }
      }

      // Fill remaining vertices with zeros to hide them
      for (let k = numConnected * 6; k < maxLines * 6; k++) {
        linePositions[k] = 0;
      }

      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Clean up geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div className="three-canvas-container" ref={containerRef}>
      <canvas className="three-canvas-element" ref={canvasRef} />
    </div>
  );
}

export default ThreeCanvas;
