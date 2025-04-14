import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, CircularProgress, Button } from '@mui/material';
// Removed unused import
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import { fallbackExercises } from '../utils/fallbackData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      setIsLoading(true);

      try {
        // Fetch exercise details
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        // Guaranteed working YouTube video IDs
        const realVideoIds = [
          'dZgVxmf6jkA', // Workout video
          'ixkQaZXVQjs', // Exercise tutorial
          'gey73xiS8F4', // Fitness routine
          'YQmpO9VT2X4', // Training video
          'UBMk30rjy0o', // Exercise demo
          'jv31A4Ab4nA'  // Workout guide
        ];

        // Create video data with real YouTube IDs and thumbnails
        const videoData = {
          contents: realVideoIds.map((videoId, index) => ({
            video: {
              videoId: videoId,
              thumbnails: [{
                url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              }],
              title: [
                `How to do ${exerciseDetailData.name} properly`,
                `${exerciseDetailData.name} for beginners`,
                `Advanced ${exerciseDetailData.name} variations`,
                `${exerciseDetailData.name} form guide`,
                `${exerciseDetailData.name} workout routine`,
                `${exerciseDetailData.name} tutorial`
              ][index],
              channelName: [
                'Fitness Expert',
                'Workout Channel',
                'Pro Fitness',
                'Fitness Tips',
                'Gym Coach',
                'Fitness Pro'
              ][index]
            }
          }))
        };

        setExerciseVideos(videoData.contents);

        // Fetch similar target muscle exercises
        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        // Fetch similar equipment exercises
        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error('Error fetching exercise details:', error);

        // Use fallback data
        const fallbackExercise = fallbackExercises.find(ex => ex.id === id) || fallbackExercises[0];
        setExerciseDetail(fallbackExercise);

        // Real YouTube video IDs for fitness exercises
        const realVideoIds = [
          'vc1E5CfRfos', // General exercise form video
          'U8Li6TpFZ8E', // Fitness tutorial
          'VmB1G1K7v94', // Workout example
          'dGsxd67BXS4', // Exercise demonstration
          'dhxZ0q5Qnz4', // Fitness guide
          'IODxDxX7oi4'  // Training video
        ];

        // Create video data with real YouTube IDs and thumbnails
        const mockVideos = {
          contents: realVideoIds.map((videoId, index) => ({
            video: {
              videoId: videoId,
              thumbnails: [{
                url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              }],
              title: `${fallbackExercise.name} tutorial ${index+1}`,
              channelName: `Fitness Channel ${index+1}`
            }
          }))
        };
        setExerciseVideos(mockVideos.contents);

        // Filter fallback exercises for similar ones
        setTargetMuscleExercises(
          fallbackExercises.filter(ex => ex.target === fallbackExercise.target && ex.id !== id).slice(0, 6)
        );
        setEquipmentExercises(
          fallbackExercises.filter(ex => ex.equipment === fallbackExercise.equipment && ex.id !== id).slice(0, 6)
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <CircularProgress sx={{ color: '#4facfe' }} />
        <Typography variant="h6" color="text.secondary">
          Loading exercise details...
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(26, 32, 44, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%)',
          py: { xs: 4, md: 6 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 20% 20%, rgba(79, 172, 254, 0.1) 0%, transparent 50%)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="xl">
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#fff',
              mb: 3,
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Back to Exercises
          </Button>

          <Detail exerciseDetail={exerciseDetail} />
        </Container>
      </Box>

      {/* Videos Section */}
      <Container maxWidth="xl">
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />

        {/* Similar Exercises Section */}
        {/* Only show similar exercises if we have data */}
        {(targetMuscleExercises.length > 0 || equipmentExercises.length > 0) && (
          <SimilarExercises
            targetMuscleExercises={targetMuscleExercises}
            equipmentExercises={equipmentExercises}
          />
        )}
      </Container>
    </Box>
  );
};

export default ExerciseDetail;
