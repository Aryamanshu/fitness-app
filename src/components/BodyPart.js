import React, { memo } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { getBodyPartIcon } from '../assets/icons/body-part-icons';
import { bodyPartDisplayNames } from '../utils/fallbackData';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Box
    component={motion.div}
    whileHover={{ y: -10 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
    className={`bodyPart-card ${bodyPart === item ? 'selected' : ''}`}
    sx={{
      width: '180px',
      height: '180px',
      cursor: 'pointer',
      borderRadius: '16px',
      position: 'relative',
      overflow: 'hidden',
      background: bodyPart === item ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2))' : 'rgba(255, 255, 255, 0.05)',
      border: bodyPart === item ? '2px solid rgba(79, 172, 254, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: bodyPart === item ? '0 8px 16px rgba(79, 172, 254, 0.2)' : 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))',
        border: '2px solid rgba(79, 172, 254, 0.3)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-5px)',
      },
    }}
  >
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100%',
        width: '100%',
        p: 3,
      }}
    >
      <Box
        component={motion.div}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        sx={{
          mb: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: bodyPart === item ? 'rgba(79, 172, 254, 0.2)' : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(5px)',
          border: bodyPart === item ? '2px solid rgba(79, 172, 254, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: bodyPart === item ? '0 0 15px rgba(79, 172, 254, 0.3)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <img
          src={getBodyPartIcon(item) || require('../assets/icons/gym.png')}
          alt={item}
          style={{
            width: '50px',
            height: '50px',
            filter: bodyPart === item ? 'drop-shadow(0 0 8px rgba(79, 172, 254, 0.8))' : 'none',
          }}
        />
      </Box>
      <Typography
        fontSize="16px"
        fontWeight="600"
        fontFamily="Montserrat"
        color="#fff"
        textTransform="capitalize"
        textAlign="center"
        sx={{ mt: 1 }}
      >
        {bodyPartDisplayNames[item] || item}
      </Typography>
    </Stack>
  </Box>
);

// Use memo to prevent unnecessary re-renders
export default memo(BodyPart, (prevProps, nextProps) => {
  // Only re-render if these props change
  return prevProps.item === nextProps.item && prevProps.bodyPart === nextProps.bodyPart;
});