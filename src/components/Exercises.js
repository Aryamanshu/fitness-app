import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination, CircularProgress, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { fallbackExercises } from '../utils/fallbackData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const exercisesPerPage = 9;


  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];


  const totalPages = Math.ceil((exercises?.length || 0) / exercisesPerPage);


  const handlePageChange = (_, value) => {
    setCurrentPage(value);


    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    setCurrentPage(1);

    const fetchExercisesData = async () => {
      setIsLoading(true);
      let exercisesData = [];

      try {
        // First try to fetch from API
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100`, exerciseOptions);
        }

        // Check if we got valid data
        if (Array.isArray(exercisesData) && exercisesData.length > 0) {
          console.log(`Fetched ${exercisesData.length} exercises for ${bodyPart}`);
          setExercises(exercisesData);
        } else {
          console.log('API returned empty or invalid data, using fallback data');
          // Filter fallback exercises by body part if needed
          if (bodyPart === 'all') {
            setExercises(fallbackExercises);
          } else {
            const filteredExercises = fallbackExercises.filter(exercise => exercise.bodyPart === bodyPart);
            setExercises(filteredExercises.length > 0 ? filteredExercises : fallbackExercises);
          }
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
        console.log('Using fallback exercises data');
        // Filter fallback exercises by body part if needed
        if (bodyPart === 'all') {
          setExercises(fallbackExercises);
        } else {
          const filteredExercises = fallbackExercises.filter(exercise => exercise.bodyPart === bodyPart);
          setExercises(filteredExercises.length > 0 ? filteredExercises : fallbackExercises);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises, setCurrentPage]);

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="exercises"
      sx={{
        mt: { lg: '110px' },
        pt: { xs: '50px', lg: '100px' },
        pb: '80px',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            mb: '40px',
          }}
        >
          <Box>
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              fontFamily="Montserrat"
              fontWeight="700"
              sx={{
                fontSize: { xs: '28px', md: '36px' },
                background: 'linear-gradient(90deg, #fff, #f3f4f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              {bodyPart === 'all' ? 'All Exercises' : `${bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)} Exercises`}
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              fontFamily="Inter"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: { xs: 3, md: 0 },
              }}
            >
              {exercises.length} exercises found
            </Typography>
          </Box>

          {bodyPart !== 'all' && (
            <Chip
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              label={`Category: ${bodyPart}`}
              sx={{
                backgroundColor: 'rgba(79, 172, 254, 0.2)',
                color: '#fff',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                py: 1.5,
                px: 2,
                borderRadius: '30px',
              }}
            />
          )}
        </Box>

        {isLoading ? (
          <Stack
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '400px' }}
          >
            <CircularProgress
              sx={{
                color: 'rgba(79, 172, 254, 0.8)',
                mb: 2,
              }}
              size={60}
            />
            <Typography
              fontFamily="Montserrat"
              variant="h6"
              sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
            >
              Loading exercises...
            </Typography>
          </Stack>
        ) : currentExercises.length > 0 ? (
          <Box
            component={motion.div}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            <Stack
              direction="row"
              sx={{
                gap: { xs: '20px', md: '40px' },
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {currentExercises.map((exercise, index) => (
                <Box
                  component={motion.div}
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <ExerciseCard exercise={exercise} />
                </Box>
              ))}
            </Stack>
          </Box>
        ) : (
          <Stack
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            alignItems="center"
            justifyContent="center"
            sx={{
              minHeight: '400px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              p: 4,
            }}
          >
            <Typography
              fontFamily="Montserrat"
              fontWeight="600"
              variant="h5"
              sx={{
                color: '#fff',
                mb: 2,
                textAlign: 'center',
              }}
            >
              No exercises found
            </Typography>
            <Typography
              fontFamily="Inter"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
              }}
            >
              Try a different category or search term
            </Typography>
          </Stack>
        )}

        {totalPages > 1 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            sx={{
              mt: '60px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size="large"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#fff',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  borderRadius: '8px',
                  margin: '0 4px',
                },
                '& .MuiPaginationItem-page.Mui-selected': {
                  background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                  boxShadow: '0 4px 10px rgba(79, 172, 254, 0.3)',
                },
                '& .MuiPaginationItem-page:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& .MuiPaginationItem-icon': {
                  color: '#fff',
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Exercises;