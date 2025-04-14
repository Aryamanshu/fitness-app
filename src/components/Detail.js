import React from 'react';
import { Typography, Box, Chip, Paper, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Typography variant="h5" color="text.secondary">Loading exercise details...</Typography>
      </Box>
    );
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: '20px', md: '40px' },
        borderRadius: '16px',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Exercise Image */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
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
            <Box
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              sx={{
                overflow: 'hidden',
                borderRadius: '16px',
                height: { xs: '300px', md: '450px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#f5f5f5',
              }}
            >
              <img
                src={gifUrl}
                alt={name}
                loading="lazy"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '16px',
                }}
              />
            </Box>
          </Paper>
        </Grid>

        {/* Exercise Details */}
        <Grid item xs={12} md={6}>
          <Box>
            <Chip
              label={bodyPart.toUpperCase()}
              sx={{
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                color: '#fff',
                fontWeight: 600,
                mb: 2
              }}
            />

            <Typography
              variant="h3"
              component={motion.h3}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{
                fontWeight: 800,
                textTransform: 'capitalize',
                mb: 2,
                color: '#fff',
                fontSize: { xs: '28px', sm: '36px', md: '42px' },
                lineHeight: 1.2,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                  borderRadius: '2px',
                }
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                mt: 4,
                mb: 4,
                lineHeight: 1.8,
                fontSize: '16px'
              }}
            >
              <strong>{name}</strong> is an effective exercise targeting your <strong>{target}</strong>.
              Regular practice of this exercise helps strengthen your muscles, improve flexibility,
              and enhance overall fitness. It's particularly effective for developing the {bodyPart} area.
            </Typography>

            <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

            {/* Exercise Metadata */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <AccessibilityNewIcon
                    sx={{
                      fontSize: '40px',
                      color: '#4facfe',
                      mb: 1
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.6)' }}>
                    Body Part
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      color: '#fff'
                    }}
                  >
                    {bodyPart}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <SportsGymnasticsIcon
                    sx={{
                      fontSize: '40px',
                      color: '#4facfe',
                      mb: 1
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.6)' }}>
                    Target Muscle
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      color: '#fff'
                    }}
                  >
                    {target}
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <FitnessCenterIcon
                    sx={{
                      fontSize: '40px',
                      color: '#4facfe',
                      mb: 1
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, color: 'rgba(255, 255, 255, 0.6)' }}>
                    Equipment
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      color: '#fff'
                    }}
                  >
                    {equipment}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
