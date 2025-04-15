import React, { useState } from 'react';
import { Box, Stack, Typography, Container, IconButton, Divider, Grid, TextField, Button, Snackbar, Alert, Link } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import SendIcon from '@mui/icons-material/Send';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Logo from '../assets/images/fitness-logo.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      setSnackbarMessage('Please fill in all fields');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // In a real app, you would send this data to your backend
    console.log('Contact form submitted:', { email, message });

    // Show success message
    setSnackbarMessage('Thank you for your message! We will get back to you soon.');
    setSnackbarSeverity('success');
    setSnackbarOpen(true);

    // Reset form
    setEmail('');
    setMessage('');
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
  <Box
    component={motion.footer}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    sx={{
      mt: '80px',
      background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      py: 8,
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
        zIndex: 1,
      },
    }}
  >
    {/* Background elements */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.05) 20%, transparent 60%)',
        zIndex: 0
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Grid container spacing={6}>
        {/* Logo and About Section */}
        <Grid item xs={12} md={4}>
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            sx={{ mb: 3, display: 'inline-block' }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                height: '60px',
                filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(79, 172, 254, 0.5))'
              }}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3,
              fontFamily: 'Inter',
              lineHeight: 1.7,
            }}
          >
            Power Fitness is your ultimate destination for fitness resources. Access over 1,300 exercises with detailed instructions to help you achieve your fitness goals.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <IconButton
              component={motion.a}
              href="https://github.com"
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { background: 'rgba(79, 172, 254, 0.3)' }
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              component={motion.a}
              href="https://linkedin.com"
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { background: 'rgba(79, 172, 254, 0.3)' }
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              component={motion.a}
              href="https://twitter.com"
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={{
                color: '#fff',
                background: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { background: 'rgba(79, 172, 254, 0.3)' }
              }}
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              mb: 3,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                borderRadius: '2px',
              }
            }}
          >
            Quick Links
          </Typography>

          <Stack spacing={2}>
            <Link
              component={motion.a}
              whileHover={{ x: 5 }}
              href="#exercises"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': { color: '#4facfe' },
                transition: 'all 0.3s ease',
              }}
            >
              <DirectionsRunIcon fontSize="small" />
              Exercises
            </Link>

            <Link
              component={motion.a}
              whileHover={{ x: 5 }}
              href="#bodyParts"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': { color: '#4facfe' },
                transition: 'all 0.3s ease',
              }}
            >
              <FitnessCenterIcon fontSize="small" />
              Body Parts
            </Link>

            <Link
              component={motion.a}
              whileHover={{ x: 5 }}
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': { color: '#4facfe' },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon fontSize="small" />
              Contact Us
            </Link>
          </Stack>
        </Grid>

        {/* Contact Us Section */}
        <Grid item xs={12} sm={6} md={5}>
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              mb: 3,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: 0,
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                borderRadius: '2px',
              }
            }}
          >
            Contact Us
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              margin="normal"
              label="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4facfe',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiOutlinedInput-input': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#4facfe',
                },
              }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Your Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              variant="outlined"
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#4facfe',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                '& .MuiOutlinedInput-input': {
                  color: '#fff',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#4facfe',
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                borderRadius: '50px',
                padding: '10px 24px',
                fontFamily: 'Montserrat',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
                  boxShadow: '0 4px 15px rgba(79, 172, 254, 0.4)',
                },
              }}
            >
              Send Message
            </Button>
          </Box>

          <Stack spacing={2} sx={{ mt: 4 }}>
           

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon sx={{ color: '#4facfe' }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                aryamanshumishra@gmail.com
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon sx={{ color: '#4facfe' }} />
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                +91 9260955703
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'Inter',
            fontSize: '14px',
            mb: { xs: 1, sm: 0 }
          }}
        >
          © {new Date().getFullYear()} Power Fitness. All rights reserved.
        </Typography>

        <Typography
          component={motion.div}
          whileHover={{ scale: 1.05, color: '#4facfe' }}
          variant="body2"
          sx={{
            color: '#fff',
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          Made with <Box component="span" sx={{ color: '#F43F5E' }}>❤️</Box> by Aryamanshu
        </Typography>
      </Box>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  </Box>
);
};

export default Footer;