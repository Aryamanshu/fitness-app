import React from 'react';
import { Box, Stack, Typography, Container, IconButton, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/images/fitness-logo.svg';

const Footer = () => (
  <Box
    component={motion.footer}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    sx={{
      mt: '80px',
      background: 'linear-gradient(to top, #2b5876, rgba(43, 88, 118, 0.8))',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      py: 6,
    }}
  >
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <Box
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              height: '50px',
              filter: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(79, 172, 254, 0.5))'
            }}
          />
        </Box>

        <Stack direction="row" spacing={2}>
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
      </Stack>

      <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      <Typography
        variant="body2"
        align="center"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Inter',
          fontSize: '14px',
        }}
      >
        © {new Date().getFullYear()} Power Fitness. All rights reserved.
      </Typography>

      <Typography
        component={motion.div}
        whileHover={{ scale: 1.05, color: '#4facfe' }}
        variant="body1"
        align="center"
        sx={{
          mt: 2,
          color: '#fff',
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '16px',
        }}
      >
        Made with <Box component="span" sx={{ color: '#F43F5E' }}>❤️</Box> by Aryamanshu
      </Typography>
    </Container>
  </Box>
);

export default Footer;