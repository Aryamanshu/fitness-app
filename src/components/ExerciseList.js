import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const ExerciseList = ({ exercises, title }) => {
  if (!exercises || exercises.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Loader />
        <Typography variant="body1" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
          Loading similar exercises...
        </Typography>
      </Box>
    );
  }

  // Display up to 9 exercises for a better grid layout
  const displayedExercises = exercises.slice(0, 9);

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: '#fff',
          position: 'relative',
          display: 'inline-block',
          mb: 4,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: 0,
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
            borderRadius: '2px',
          }
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={3}>
        {displayedExercises.map((exercise, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`${exercise.id}-${index}`}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ExerciseCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseList;
