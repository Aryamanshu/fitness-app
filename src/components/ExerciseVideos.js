import React from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTubePlayer from './YouTubePlayer';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) {
    return (
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="body1" color="text.secondary">
          Loading exercise videos...
        </Typography>
      </Box>
    );
  }

  // Limit to 6 videos for better performance and UI
  const displayedVideos = exerciseVideos.slice(0, 6);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      sx={{
        mt: { xs: 5, md: 8 },
        mb: { xs: 5, md: 8 },
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 }
      }}
    >
      <Box sx={{ mb: 4, textAlign: 'center' }}>
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
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              borderRadius: '2px',
            }
          }}
        >
          Watch <span style={{ color: '#4facfe' }}>{name}</span> Exercise Videos
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            mx: 'auto',
            mb: 5
          }}
        >
          Learn proper form and technique with these helpful tutorial videos.
          Watching demonstrations can help you perform the exercise correctly and maximize results.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {displayedVideos.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              component={motion.div}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
              elevation={0}
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${item.video.videoId}`, '_blank')}
                  sx={{ cursor: 'pointer' }}
                >
                  <img
                    src={item.video.thumbnails[0].url}
                    alt={item.video.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      display: 'block',
                      backgroundColor: '#f0f0f0'
                    }}
                    onError={(e) => {
                      // Fallback if YouTube thumbnail fails to load
                      e.target.src = `https://via.placeholder.com/320x180.png?text=${encodeURIComponent(item.video.title)}`;
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      <PlayArrowIcon sx={{ fontSize: '30px', color: '#fff' }} />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    color: '#fff',
                    mb: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    lineHeight: 1.3
                  }}
                >
                  {item.video.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    mb: 2
                  }}
                >
                  {item.video.channelName}
                </Typography>

                <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${item.video.videoId}`, '_blank')}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '20px',
                      borderColor: '#4facfe',
                      color: '#4facfe',
                      '&:hover': {
                        borderColor: '#00f2fe',
                        backgroundColor: 'rgba(79, 172, 254, 0.1)',
                      }
                    }}
                  >
                    Watch on YouTube
                  </Button>

                  <YouTubePlayer videoId={item.video.videoId} title={item.video.title} />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExerciseVideos;
