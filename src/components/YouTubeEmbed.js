import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

const YouTubeEmbed = ({ videoId, title, thumbnail, channelName }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ position: 'relative', cursor: 'pointer' }} onClick={handleOpen}>
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: '100%',
            height: '180px',
            objectFit: 'cover',
            display: 'block',
            backgroundColor: '#f0f0f0',
            borderRadius: '8px 8px 0 0'
          }}
          onError={(e) => {
            // Fallback if YouTube thumbnail fails to load
            e.target.src = `https://via.placeholder.com/320x180.png?text=${encodeURIComponent(title)}`;
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
            },
            borderRadius: '8px 8px 0 0'
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="youtube-video-modal"
        aria-describedby="modal-to-play-youtube-video"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            bgcolor: '#000',
            borderRadius: '8px',
            boxShadow: 24,
            p: 0,
            overflow: 'hidden'
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#fff',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 10,
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Box sx={{ pt: '56.25%', position: 'relative' }}>
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
            />
          </Box>
          
          <Box sx={{ p: 2, bgcolor: '#111' }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {channelName}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default YouTubeEmbed;
