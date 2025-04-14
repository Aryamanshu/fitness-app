import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

import Logo from '../assets/images/fitness-logo.svg';

const Navbar = () => (
  <AppBar
    position="fixed"
    elevation={0}
    component={motion.div}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    sx={{
      background: 'rgba(43, 88, 118, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}
  >
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Box
            component={motion.div}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                width: '60px',
                height: '60px',
                filter: 'drop-shadow(0 0 8px rgba(79, 172, 254, 0.5))'
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component={motion.div}
            sx={{
              ml: 2,
              fontFamily: 'Montserrat',
              fontWeight: 700,
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            POWER FITNESS
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              color: '#fff',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: 0,
                left: 0,
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              Home
            </Link>
          </Button>

          <Button
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              fontFamily: 'Montserrat',
              fontWeight: 600,
              color: '#fff',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '2px',
                bottom: 0,
                left: 0,
                background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right',
                transition: 'transform 0.3s',
              },
              '&:hover::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
            }}
          >
            <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>
              Exercises
            </a>
          </Button>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Navbar;