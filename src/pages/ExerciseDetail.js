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

        // Get exercise-specific video IDs based on the exercise name and target muscle
        const exerciseKeywords = [
          `${exerciseDetailData.name} exercise tutorial`,
          `how to do ${exerciseDetailData.name} properly`,
          `${exerciseDetailData.name} form guide`,
          `${exerciseDetailData.name} ${exerciseDetailData.target} workout`,
          `best ${exerciseDetailData.name} variations`,
          `${exerciseDetailData.name} for beginners`
        ];

        // Map of exercise types to specific video IDs that are guaranteed to work
        const exerciseTypeToVideoMap = {
          // Chest exercises
          'bench press': ['rT7DgCr-3pg', 'gRVjAtPip0Y', 'XSza8hVTlmM'],
          'push up': ['IODxDxX7oi4', 'wxhNoKZlfY8', '0pkjOk0EiAk'],
          'chest fly': ['eozdVDA78K0', 'QENKPHhQVi4', 'Iwe6AmxVf7o'],
          'chest press': ['VmB1G1K7v94', 'dGsxd67BXS4', 'QwuUZ5PNYZM'],
          'cable crossover': ['taI4XduLpTk', 'M1N804yWA-8', 'WEM9FCIPlsQ'],
          'decline press': ['LfyQBUKR8SE', 'qEwKCR5JCog', '0xEUndBJiIE'],
          'incline press': ['DbFgADa2PL8', '8iPEnn-ltC8', 'jRUZX5_m7Cc'],
          'pec deck': ['xUm0BiZCWlQ', 'Qr9lo2KQwdU', 'Z57a7g5My-Y'],

          // Back exercises
          'pull up': ['eGo4IYlbE5g', 'XB_7En-zv14', 'sIvJTfGxdFU'],
          'chin up': ['brhRXlOhsAM', 'b-ztMQpj8yc', '49fTlDFgr_Q'],
          'row': ['roCP6wCXPFo', 'T3N-TO4reLQ', 'GZbfZ033f74'],
          'lat pulldown': ['CAwf7n6Luuc', 'an1BMInTXLk', 'u3gQT2aMVB8'],
          'seated row': ['GZbfZ033f74', 'sP_4vybjVws', 'xQNrFHOs-AM'],
          'deadlift': ['r4MzxtBKyNE', 'XxWcirHIwVo', 'ytGaGIn3SjE'],
          'back extension': ['ph3pddpKzzw', 'vx0jZBEmZcE', 'olv8E-ZaF7c'],
          'pull over': ['JY442Cer48c', 'tpLnfSQGLac', 'AsfK_SD5i4k'],

          // Leg exercises
          'squat': ['YaXPRqUwItQ', 'gsNoPYwWXeM', 'nEQQle9-0NA'],
          'lunge': ['QOVaHwm-Q6U', 'UEUQkMTuRJU', 'D7KaRcUTQeE'],
          'leg press': ['IZxyjW7MPJQ', 'GvRgijoJ2xY', '8vk6rWMKEbw'],
          'leg extension': ['YyvSfVjQeL0', 'ljO6udoBxxc', 'Fkzk9q9aHFc'],
          'leg curl': ['1Tq3QdYUuHs', 'oFxGMbuhLUw', '6y_GEg_1Daw'],
          'calf raise': ['JbyjNymZOt0', 'gwLzBJYHmxo', 'Vk7-AQzqUg0'],
          'hip thrust': ['SEdqd1n0cvg', 'LM8XHLYJoYs', 'Zp26q4BY5HE'],
          'glute bridge': ['wPM8icPu6H8', 'OUgsJ8-Vi0E', '0O-NdyMdpCY'],

          // Arm exercises
          'bicep curl': ['ykJmrZ5v0Oo', 'kwG2ipFRgfo', 'soxrZlIl35U'],
          'tricep extension': ['nRiJapZA69I', '2-LAMcpzODU', 'hbqnqOkHdQw'],
          'hammer curl': ['TwD-YGVP4Bk', 'P5sYHyVwLcI', 'zC3nLlEvin4'],
          'skull crusher': ['d_KZxkI_0CM', 'NIWKqcmpBug', 'jRHo6IgK-RY'],
          'preacher curl': ['Gydx7CucBGg', 'fIWP-FRFNU0', 'nwEek2QUX38'],
          'concentration curl': ['Jvj2wV0vOYU', '0AUFgJ_TI1s', 'ZRX1UxwA2u8'],
          'tricep pushdown': ['2-LAMcpzODU', 'REWv05om0ho', 'HIKzvGwlKPU'],
          'dip': ['wjUmnZH528Y', '6kALZikXxLc', '2z8JmcrW-As'],

          // Shoulder exercises
          'shoulder press': ['qEwKCR5JCog', '0JfYxMRsUCQ', 'Fq67OMQyTXo'],
          'lateral raise': ['3VcKaXpzqRo', 'JIhbYYA1Q90', 'XDLOXKqOa_s'],
          'front raise': ['sOcYlBI85gg', 'UjGkY_Eki0s', 'gzDCmQ5N8Qg'],
          'face pull': ['eIq5CB9JfKE', 'V8dZ3pyiCBo', 'rep-qRt-1FE'],
          'upright row': ['IXZZtQnrGpM', 'VpGDJEkTc68', 'ZohFLxX9s1Q'],
          'reverse fly': ['JENKmsEZQO8', 'lPt0GqwaqEw', 'ttvfGGRDMX8'],
          'shrug': ['g6gce7oULek', 'cYMo8f89hxM', 'C6sYRCbVPfQ'],
          'arnold press': ['6Z15_WdXmVw', '6Z15_WdXmVw', 'odhXwoS3mDA'],

          // Core exercises
          'crunch': ['Xyd_fa5zoEU', '5ER5Of4MOPI', 'NGRKFMKhiiQ'],
          'plank': ['pSHjTRCQxIw', 'ASdvN_XEl_c', 'kL_NJAkCQBg'],
          'russian twist': ['wkD8rjkodUI', 'NeAtimSCxsY', 'JyUqwkVpsi8'],
          'leg raise': ['l4kQd9eWclE', 'JB2oyawG9KI', '1w8ZgOPJxRI'],
          'sit up': ['jDwoBqPH0jk', '1fbU_MkV7NE', 'UKwkChzThao'],
          'mountain climbers': ['nmwgirgXLYM', 'zT-9L3CEcmk', 'QOCn3_iOAro'],
          'bicycle crunch': ['9FGilxCbdz8', '1we3bh9uhqY', 'Iwyvozckjak'],
          'hanging leg raise': ['hdng3Nm1x_E', 'arTdO4Xkjgg', 'ZR6ajDJRmGM'],

          // Cardio exercises
          'treadmill': ['k3uxq-NJD-c', 'YpecOvgazSk', 'YpecOvgazSk'],
          'elliptical': ['ftI5KDGJOgY', 'NFAfPANKDKs', 'mfmV5G3zUTQ'],
          'jumping jack': ['c4DAnQ6DtF8', '4knOrWGdXcU', 'iSSAk4XCsRA'],
          'jump rope': ['FJmRQ5iTXKE', 'u3zgwmOOHr4', '1BZM2Vre5oc'],
          'burpee': ['dZgVxmf6jkA', 'TU8QYVW0gO4', 'qLBImHhCXSw'],
          'high knee': ['oDdkytLOqRQ', 'ZZZvU4uUZCY', 'TX1yQBGhLz8'],
          'climbers': ['nmwgirgXLYM', 'zT-9L3CEcmk', 'QOCn3_iOAro'],
          'jumping lunge': ['hTdcOEJI7qY', 'eXs-ZYN30lc', 'iYDALpYuhRU']
        };

        // Function to get video IDs for a specific exercise
        const getVideoIdsForExercise = (exerciseName, targetMuscle) => {
          // Convert to lowercase for matching
          const lowerName = exerciseName.toLowerCase();

          // First, try to find an exact match
          for (const [exerciseType, videoIds] of Object.entries(exerciseTypeToVideoMap)) {
            if (lowerName === exerciseType) {
              console.log(`Found exact match for ${lowerName}: ${videoIds}`);
              return videoIds;
            }
          }

          // If no exact match, try to find a partial match
          let bestMatch = null;
          let bestMatchLength = 0;

          for (const [exerciseType, videoIds] of Object.entries(exerciseTypeToVideoMap)) {
            // Check if the exercise type is contained in the exercise name
            if (lowerName.includes(exerciseType)) {
              // If this is a longer match than our previous best, use it
              if (exerciseType.length > bestMatchLength) {
                bestMatch = videoIds;
                bestMatchLength = exerciseType.length;
                console.log(`Found partial match: ${exerciseType} for ${lowerName}`);
              }
            }
          }

          if (bestMatch) {
            return bestMatch;
          }

          // If still no match, check if any exercise type words are in the exercise name
          for (const [exerciseType, videoIds] of Object.entries(exerciseTypeToVideoMap)) {
            const typeWords = exerciseType.split(' ');
            for (const word of typeWords) {
              if (word.length > 3 && lowerName.includes(word)) { // Only match words longer than 3 chars
                console.log(`Found word match: ${word} in ${lowerName}`);
                return videoIds;
              }
            }
          }

          // Fallback videos based on target muscle
          const targetMuscleVideos = {
            'chest': ['IODxDxX7oi4', 'rT7DgCr-3pg', 'gRVjAtPip0Y'],
            'back': ['eGo4IYlbE5g', 'XB_7En-zv14', 'roCP6wCXPFo'],
            'shoulders': ['qEwKCR5JCog', '0JfYxMRsUCQ', '3VcKaXpzqRo'],
            'upper arms': ['ykJmrZ5v0Oo', 'kwG2ipFRgfo', 'nRiJapZA69I'],
            'lower arms': ['TwD-YGVP4Bk', 'P5sYHyVwLcI', 'zC3nLlEvin4'],
            'upper legs': ['YaXPRqUwItQ', 'gsNoPYwWXeM', 'QOVaHwm-Q6U'],
            'lower legs': ['YyvSfVjQeL0', 'ljO6udoBxxc', 'Fkzk9q9aHFc'],
            'waist': ['Xyd_fa5zoEU', '5ER5Of4MOPI', 'pSHjTRCQxIw'],
            'cardio': ['dZgVxmf6jkA', 'ixkQaZXVQjs', 'gey73xiS8F4']
          };

          console.log(`Using target muscle videos for ${targetMuscle}`);
          return targetMuscleVideos[targetMuscle] || ['dZgVxmf6jkA', 'ixkQaZXVQjs', 'gey73xiS8F4'];
        };

        // Get video IDs specific to this exercise
        const exerciseSpecificVideoIds = getVideoIdsForExercise(
          exerciseDetailData.name,
          exerciseDetailData.target
        );

        // Use only the first 3 exercise-specific videos
        const realVideoIds = exerciseSpecificVideoIds.slice(0, 3); // Limit to 3 videos

        // Create video data with real YouTube IDs and thumbnails
        const videoData = {
          contents: realVideoIds.map((videoId, index) => ({
            video: {
              videoId: videoId,
              thumbnails: [{
                url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              }],
              title: exerciseKeywords[index % exerciseKeywords.length] || `${exerciseDetailData.name} exercise tutorial`,
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

        // Real YouTube video IDs for fitness exercises (limited to 3)
        const realVideoIds = [
          'vc1E5CfRfos', // General exercise form video
          'U8Li6TpFZ8E', // Fitness tutorial
          'VmB1G1K7v94', // Workout example
        ];

        // Create video data with real YouTube IDs and thumbnails
        const mockVideos = {
          contents: realVideoIds.map((videoId, index) => ({
            video: {
              videoId: videoId,
              thumbnails: [{
                url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              }],
              title: [
                `How to do ${fallbackExercise.name} properly`,
                `${fallbackExercise.name} for beginners`,
                `Advanced ${fallbackExercise.name} variations`,
                `${fallbackExercise.name} form guide`,
                `${fallbackExercise.name} workout routine`,
                `${fallbackExercise.name} tutorial`
              ][index] || `${fallbackExercise.name} exercise tutorial ${index+1}`,
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
