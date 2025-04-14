import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Divider, Chip } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DynamicHeroImage from '../assets/images/dynamic-fitness-hero.svg';

// Reimagined HeroBanner component with a dynamic, visually impressive design
const HeroBanner = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
        pt: { xs: 8, md: 0 },
        pb: { xs: 8, md: 0 },
        overflow: 'hidden',
        position: 'relative',
        minHeight: { md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      {/* Dynamic background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.05) 20%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.05) 20%, transparent 60%)',
          zIndex: 0
        }}
      />
      
      {/* Animated light beams */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          opacity: 0.4,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            right: '-50%',
            bottom: '-50%',
            background: 'conic-gradient(from 0deg at 50% 50%, rgba(79, 172, 254, 0.3) 0deg, transparent 60deg, rgba(0, 242, 254, 0.3) 120deg, transparent 180deg, rgba(79, 172, 254, 0.3) 240deg, transparent 300deg)',
            backgroundSize: '100% 100%',
            animation: 'rotate 20s linear infinite',
          }
        }}
      />
      
      {/* Add keyframes for rotation */}
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left content - Text */}
          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Chip
                  icon={<WhatshotIcon />}
                  label="PREMIUM FITNESS"
                  sx={{
                    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    color: '#fff',
                    fontFamily: 'Montserrat',
                    fontWeight: 600,
                    fontSize: { xs: '12px', md: '14px' },
                    borderRadius: '50px',
                    px: 2,
                    '& .MuiChip-icon': {
                      color: '#fff'
                    }
                  }}
                />
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 900,
                  fontSize: { xs: '40px', sm: '56px', md: '72px', lg: '84px' },
                  lineHeight: 1,
                  mb: 2,
                  color: '#fff',
                  textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                  letterSpacing: '-1px'
                }}
              >
                POWER<br />
                <Box component="span" sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    borderRadius: '4px',
                  }
                }}>
                  FITNESS
                </Box>
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  fontSize: { xs: '24px', sm: '32px', md: '40px' },
                  lineHeight: 1.2,
                  mt: 4,
                  mb: 4,
                  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}
              >
                TRANSFORM YOUR BODY.<br />UNLEASH YOUR POTENTIAL.
              </Typography>

              <Box sx={{ position: 'relative', mb: 5, mt: 2 }}>
                <Divider sx={{ 
                  borderColor: 'rgba(255, 255, 255, 0.1)', 
                  width: '100%', 
                  maxWidth: '500px',
                  my: 3 
                }} />
                
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.9)',
                    mb: 2,
                    maxWidth: '600px',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Access our comprehensive library of over <strong>1,300 exercises</strong> with detailed instructions, animations, and personalized recommendations to help you achieve your fitness goals faster and more efficiently.
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  <Chip
                    icon={<FitnessCenterIcon sx={{ fontSize: '16px' }} />}
                    label="1300+ Exercises"
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)', 
                      color: '#fff',
                      '& .MuiChip-icon': { color: '#4facfe' }
                    }}
                  />
                  <Chip
                    icon={<SportsGymnasticsIcon sx={{ fontSize: '16px' }} />}
                    label="10+ Body Parts"
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)', 
                      color: '#fff',
                      '& .MuiChip-icon': { color: '#4facfe' }
                    }}
                  />
                  <Chip
                    icon={<DirectionsRunIcon sx={{ fontSize: '16px' }} />}
                    label="All Fitness Levels"
                    size="small"
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.1)', 
                      color: '#fff',
                      '& .MuiChip-icon': { color: '#4facfe' }
                    }}
                  />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    const exercisesSection = document.getElementById('exercises');
                    if (exercisesSection) {
                      exercisesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  startIcon={<DirectionsRunIcon />}
                  sx={{
                    background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    borderRadius: '50px',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: '0 10px 20px rgba(79, 172, 254, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                      transition: 'all 0.5s ease',
                    },
                    '&:hover': {
                      boxShadow: '0 15px 30px rgba(79, 172, 254, 0.4)',
                      transform: 'translateY(-3px)',
                      '&::after': {
                        left: '100%',
                      }
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Explore Exercises
                </Button>
                
                <Button
                  variant="outlined"
                  onClick={() => {
                    const bodyPartsSection = document.getElementById('bodyParts');
                    if (bodyPartsSection) {
                      bodyPartsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  sx={{
                    borderColor: 'rgba(79, 172, 254, 0.5)',
                    borderWidth: '2px',
                    borderRadius: '50px',
                    padding: '14px 32px',
                    fontSize: '16px',
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    '&:hover': {
                      borderColor: '#4facfe',
                      backgroundColor: 'rgba(79, 172, 254, 0.1)',
                    },
                  }}
                >
                  Body Parts
                </Button>
              </Box>

              {/* Quick stats - now with animated counters */}
              <Box sx={{ display: 'flex', gap: 3, mt: 6, flexWrap: 'wrap' }}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    minWidth: '120px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ color: '#4facfe', fontWeight: 800, mb: 0.5 }}>1300+</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Exercises</Typography>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    minWidth: '120px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ color: '#4facfe', fontWeight: 800, mb: 0.5 }}>10+</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Categories</Typography>
                </Paper>
                
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    minWidth: '120px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ color: '#4facfe', fontWeight: 800, mb: 0.5 }}>24/7</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Access</Typography>
                </Paper>
              </Box>
            </Box>
          </Grid>

          {/* Right content - Hero image */}
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(79, 172, 254, 0.15) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  zIndex: -1
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)',
                  zIndex: -2
                }
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    width: '100px',
                    height: '100px',
                    borderTop: '4px solid rgba(79, 172, 254, 0.5)',
                    borderLeft: '4px solid rgba(79, 172, 254, 0.5)',
                    borderTopLeftRadius: '20px',
                    zIndex: 1
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    borderBottom: '4px solid rgba(79, 172, 254, 0.5)',
                    borderRight: '4px solid rgba(79, 172, 254, 0.5)',
                    borderBottomRightRadius: '20px',
                    zIndex: 1
                  }
                }}
              >
                <img
                  src={DynamicHeroImage}
                  alt="Fitness illustration"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))'
                  }}
                  loading="eager" // Load this image immediately as it's above the fold
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroBanner;
