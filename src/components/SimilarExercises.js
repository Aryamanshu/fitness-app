import React from 'react';
import { Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ExerciseList from './ExerciseList';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      sx={{
        mt: { xs: 5, md: 8 },
        mb: { xs: 5, md: 8 },
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 }
      }}
    >
      <Divider sx={{ mb: 8, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      {/* Similar Target Muscle Exercises */}
      <ExerciseList
        exercises={targetMuscleExercises}
        title={<>Similar <span style={{ color: '#4facfe' }}>Target Muscle</span> Exercises</>}
      />

      {/* Similar Equipment Exercises */}
      <ExerciseList
        exercises={equipmentExercises}
        title={<>Similar <span style={{ color: '#4facfe' }}>Equipment</span> Exercises</>}
      />
    </Box>
  );
};

export default SimilarExercises;
