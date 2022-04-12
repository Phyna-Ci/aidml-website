/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import * as React from 'react';
import LandingCarousel from 'components/landing/landing-carousel';
import BackgroundVideo from 'assets/background.svg';

const LandingBanner = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <LandingCarousel />
          <Box sx={styles.illustration}>
            <Box sx={styles.buttonWrapper}>
              <Button sx={styles.buttonWrapper.primary}>Get a free quote</Button>
            </Box>
            <Box sx={styles.buttonWrapper}>
              <Button sx={styles.buttonWrapper.secondary}>Book an appointment</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingBanner;

const styles = {
  absoluteBanner: {
    width: '80%',
    marginLeft: '10%',
    position: ['relative', 'relative', 'relative', 'absolute'],
    top: [null, null, null, '82.25%', '83%', '90%'],
    zIndex: 20,
  },
  section: {
    backgroundImage: [
      // 'linear-gradient(140deg, #291EA2 0%, #AB6C84 60%)',
      `url(${BackgroundVideo})`
    ],
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  contentWrapper: {},
  heading: {
    color: '#FFFFFF',
    mb: [50],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
  },
  illustration: {
    height: '300px',
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    ':not(:first-of-type)': {
      paddingLeft: [null, null, null, '1rem'],
      paddingTop: ['1rem', '0'],
    },
    primary: {
      background: '#7B28FF',
      borderRadius: 0,
      ':hover': {
        background: 'white',
        color: '#7B28FF',
      }
    },
    secondary: {
      borderRadius: 0,
      background: 'transparent',
      color: '#FF28FF',
      border: '2px solid #FF28FF',
    }
  },
};
