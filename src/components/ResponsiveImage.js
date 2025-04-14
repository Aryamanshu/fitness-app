import React, { useState, memo } from 'react';
import { Box, Skeleton } from '@mui/material';

const ResponsiveImage = ({ src, alt, style, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <Box position="relative" {...props}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            width: style?.width || '100%',
            height: style?.height || '100%',
            borderRadius: style?.borderRadius || 0,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
        />
      )}
      <img
        src={error ? 'https://via.placeholder.com/400x400.png?text=Image+Not+Found' : src}
        alt={alt}
        style={{
          ...style,
          display: loaded ? 'block' : 'none',
          objectFit: 'cover',
        }}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </Box>
  );
};

export default memo(ResponsiveImage);
