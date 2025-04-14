import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';

const FeatureCard = ({ icon, title, description, delay }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      sx={{
        height: '100%',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 15px 30px rgba(79, 172, 254, 0.2)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2))',
            mb: 2,
            mx: 'auto',
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          fontFamily="Montserrat"
          fontWeight="700"
          textAlign="center"
          color="#fff"
          mb={1}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          fontFamily="Inter"
          textAlign="center"
          color="rgba(255, 255, 255, 0.7)"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const FeatureCards = () => {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Typography
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        variant="h4"
        fontFamily="Montserrat"
        fontWeight="700"
        textAlign="center"
        sx={{
          mb: 5,
          background: 'linear-gradient(90deg, #fff, #f3f4f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Why Choose Our Fitness App
      </Typography>

      <Grid container spacing={4}>
        <FeatureCard
          icon={<FitnessCenterIcon sx={{ fontSize: 30, color: '#4facfe' }} />}
          title="1300+ Exercises"
          description="Access our comprehensive database of exercises for every muscle group and fitness level."
          delay={0.2}
        />
        <FeatureCard
          icon={<AccessibilityNewIcon sx={{ fontSize: 30, color: '#4facfe' }} />}
          title="Body Part Targeting"
          description="Find exercises specifically designed for your target muscle groups."
          delay={0.4}
        />
        <FeatureCard
          icon={<LocalFireDepartmentIcon sx={{ fontSize: 30, color: '#4facfe' }} />}
          title="Effective Workouts"
          description="Follow proven workout routines designed to maximize your results."
          delay={0.6}
        />
        <FeatureCard
          icon={<SportsGymnasticsIcon sx={{ fontSize: 30, color: '#4facfe' }} />}
          title="Proper Form"
          description="Learn the correct technique with detailed instructions and animations."
          delay={0.8}
        />
      </Grid>
    </Box>
  );
};

export default FeatureCards;
