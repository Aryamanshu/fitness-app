import React, { useEffect, useRef, memo } from 'react';
import { Box } from '@mui/material';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let lastTime = 0;
    const fps = 30; // Limit to 30 FPS for better performance
    const fpsInterval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      // Reduce particle count on mobile devices
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ?
        Math.min(Math.floor(window.innerWidth / 30), 30) :
        Math.min(Math.floor(window.innerWidth / 15), 60);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5, // Smaller particles
          color: `rgba(255, 255, 255, ${Math.random() * 0.15 + 0.05})`, // More subtle
          speedX: (Math.random() * 0.3 - 0.15) * (isMobile ? 0.5 : 1), // Slower on mobile
          speedY: (Math.random() * 0.3 - 0.15) * (isMobile ? 0.5 : 1)
        });
      }
    };

    const drawParticles = (timestamp) => {
      // Throttle frame rate
      if (timestamp - lastTime < fpsInterval) {
        animationFrameId = requestAnimationFrame(drawParticles);
        return;
      }
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });

      // Connect particles with lines if they're close enough
      // Only check every 3rd particle to improve performance
      const isMobile = window.innerWidth < 768;
      const connectionDistance = isMobile ? 70 : 100;
      const skipFactor = isMobile ? 4 : 2;

      for (let i = 0; i < particles.length; i += skipFactor) {
        for (let j = i + skipFactor; j < particles.length; j += skipFactor) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Debounce resize event for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        createParticles();
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    resizeCanvas();
    createParticles();
    animationFrameId = requestAnimationFrame(drawParticles);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ParticleBackground);
