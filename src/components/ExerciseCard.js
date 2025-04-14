import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
// Using regular img tag for better performance

const ExerciseCard = ({ exercise }) => {

  if (!exercise || typeof exercise !== 'object') {
    return null;
  }

  const { id = '', gifUrl = '', name = '', bodyPart = '', target = '' } = exercise;

  return (
    <Box
      component={motion.div}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 }
      }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Link
        className="exercise-card"
        to={`/exercise/${id}`}
        style={{ textDecoration: 'none' }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            height: '280px',
          }}
        >
          <Box
            component={motion.div}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            sx={{
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src={gifUrl || `https://via.placeholder.com/400x400.png?text=${encodeURIComponent(name || 'Exercise')}`}
              alt={name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px',
                backgroundColor: '#f5f5f5',
              }}
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/400x400.png?text=${encodeURIComponent(name || 'Exercise')}`;
                console.log(`Image failed to load for ${name}, using placeholder`);
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
              borderRadius: '16px',
            }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: 'absolute',
            top: '10px',
            left: '10px',
          }}
        >
          <Chip
            icon={<AccessibilityNewIcon fontSize="small" />}
            label={bodyPart}
            size="small"
            sx={{
              backgroundColor: 'rgba(79, 172, 254, 0.8)',
              color: '#fff',
              fontFamily: 'Inter',
              fontWeight: 500,
              backdropFilter: 'blur(4px)',
            }}
          />
          <Chip
            icon={<FitnessCenterIcon fontSize="small" />}
            label={target}
            size="small"
            sx={{
              backgroundColor: 'rgba(0, 242, 254, 0.8)',
              color: '#fff',
              fontFamily: 'Inter',
              fontWeight: 500,
              backdropFilter: 'blur(4px)',
            }}
          />
        </Stack>

        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            padding: '20px',
            zIndex: 2,
          }}
        >
          <Typography
            fontFamily="Montserrat"
            fontWeight="700"
            sx={{
              fontSize: { lg: '20px', xs: '18px' },
              color: '#fff',
              textTransform: 'capitalize',
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {name}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(ExerciseCard);