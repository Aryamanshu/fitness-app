import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Fab, Zoom, CircularProgress } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';
import './App.css';

// Lazy load components
const ExerciseDetail = lazy(() => import('./pages/ExerciseDetail'));
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
// Removed ParticleBackground import to improve performance

const App = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Suspense fallback={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress color="primary" />
        </Box>
      }>
        {/* Removed ParticleBackground to improve performance */}
        {/* Removed animated background shapes to improve performance */}
        <Box width="400px" sx={{ width: { xl: '1488px' }, position: 'relative', zIndex: 1 }} m="auto">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                  <CircularProgress color="primary" />
                </Box>
              }>
                <Home />
              </Suspense>
            } />
            <Route path="/exercise/:id" element={
              <Suspense fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                  <CircularProgress color="primary" />
                </Box>
              }>
                <ExerciseDetail />
              </Suspense>
            } />
          </Routes>
          <Footer />
        </Box>
      </Suspense>

      <Zoom in={showScrollTop}>
        <Box
          onClick={scrollToTop}
          role="presentation"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 2,
          }}
        >
          <Fab
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            color="primary"
            size="medium"
            aria-label="scroll back to top"
            sx={{
              background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
              boxShadow: '0 4px 10px rgba(79, 172, 254, 0.3)',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};

export default App;
