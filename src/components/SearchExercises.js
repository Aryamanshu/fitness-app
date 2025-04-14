import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography, CircularProgress, InputAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { fallbackBodyParts, fallbackExercises } from '../utils/fallbackData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsLoading(true);
      try {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        console.log('Body parts data received:', bodyPartsData);

        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('bodyPartsData is not an array:', bodyPartsData);

          setBodyParts(fallbackBodyParts);
        }
      } catch (error) {
        console.error('Error fetching body parts:', error);
        setBodyParts(fallbackBodyParts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      setIsLoading(true);
      try {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300', exerciseOptions);

        if (Array.isArray(exercisesData) && exercisesData.length > 0) {
          const searchedExercises = exercisesData.filter(
            (item) => item.name.toLowerCase().includes(search.toLowerCase())
              || item.target.toLowerCase().includes(search.toLowerCase())
              || item.equipment.toLowerCase().includes(search.toLowerCase())
              || item.bodyPart.toLowerCase().includes(search.toLowerCase()),
          );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

          setSearch('');
          setExercises(searchedExercises.length > 0 ? searchedExercises : []);
          console.log(`Found ${searchedExercises.length} exercises matching "${search}"`);
        } else {
          console.log('API returned empty or invalid data, searching in fallback data');
          // Search in fallback data
          const searchedExercises = fallbackExercises.filter(
            (item) => item.name.toLowerCase().includes(search.toLowerCase())
              || item.target.toLowerCase().includes(search.toLowerCase())
              || item.equipment.toLowerCase().includes(search.toLowerCase())
              || item.bodyPart.toLowerCase().includes(search.toLowerCase()),
          );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

          setSearch('');
          setExercises(searchedExercises);
        }
      } catch (error) {
        console.error('Error searching exercises:', error);
        console.log('Searching in fallback data');
        // Search in fallback data
        const searchedExercises = fallbackExercises.filter(
          (item) => item.name.toLowerCase().includes(search.toLowerCase())
            || item.target.toLowerCase().includes(search.toLowerCase())
            || item.equipment.toLowerCase().includes(search.toLowerCase())
            || item.bodyPart.toLowerCase().includes(search.toLowerCase()),
        );

        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

        setSearch('');
        setExercises(searchedExercises);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      sx={{
        mt: { xs: '120px', lg: '150px' },
        mb: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        fontFamily="Montserrat"
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '30px' },
          mb: '20px',
          textAlign: 'center',
          background: 'linear-gradient(90deg, #fff, #f3f4f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Discover Your Perfect Workout
      </Typography>

      <Typography
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        fontFamily="Inter"
        sx={{
          fontSize: { lg: '18px', xs: '16px' },
          color: '#d1d5db',
          mb: '40px',
          textAlign: 'center',
          maxWidth: '700px'
        }}
      >
        Search from over 1,300 exercises to find the perfect fit for your routine
      </Typography>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          mb: '72px',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search exercises by name, target muscle, equipment, or body part"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '60px',
              borderRadius: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#fff',
              fontFamily: 'Inter',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              },
              '&.Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(0, 242, 254, 0.5)',
                boxShadow: '0 0 15px rgba(79, 172, 254, 0.3)',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '& .MuiInputBase-input': {
              color: '#fff',
              fontFamily: 'Inter',
              '&::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
                opacity: 1,
              },
            },
          }}
        />
        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="search-btn"
          onClick={handleSearch}
          disabled={isLoading}
          sx={{
            position: 'absolute',
            right: '5px',
            top: '5px',
            height: '50px',
            borderRadius: '25px',
            px: '30px',
          }}
        >
          {isLoading ? <CircularProgress color="inherit" size={24} /> : 'Search'}
        </Button>
      </Box>
      {/* Body Parts Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
          mt: 4,
          mb: 4
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 3,
            textAlign: 'center',
            color: '#fff',
            fontFamily: 'Montserrat',
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
          Target Muscle Groups
        </Typography>

        {isLoading ? (
          <Stack alignItems="center">
            <CircularProgress sx={{ color: '#4facfe' }} />
            <Typography variant="h6" mt="20px" color="#fff">
              Loading body parts...
            </Typography>
          </Stack>
        ) : (
          <>
            {bodyParts.length > 0 ? (
              <Box sx={{ mt: 4, mb: 6 }}>
                <Box
                  sx={{
                    width: '100%',
                    position: 'relative',
                    pb: 2, // Add padding to bottom to avoid cut-off shadows
                    px: 2, // Add padding to sides
                    border: '1px solid rgba(255, 255, 255, 0.1)', // Add border for visibility
                    borderRadius: '8px', // Rounded corners
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background for visibility
                  }}
                >
                  <HorizontalScrollbar
                    data={bodyParts}
                    bodyParts={true}
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                  />
                </Box>
              </Box>
            ) : (
              <Typography variant="h6" color="#fff" textAlign="center">
                No body parts found. Please refresh the page.
              </Typography>
            )}

          </>
        )}
      </Box>
    </Container>
  );
};

export default SearchExercises;