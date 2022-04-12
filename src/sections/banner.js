/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Box, Container, Button } from 'theme-ui';
import * as React from 'react';
import SectionHeading from 'components/section-heading';
import PageHeading from './page-heading';
import BackgroundVideo from 'assets/background.svg'

const Banner = ({ pageTitle, breadCrumb }) => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <div />
          <Box sx={styles.illustration}>
            <div />
          </Box>
        </Box>
      </Container>
      <Box as="section" id="products" sx={styles.absoluteBanner}>
        <PageHeading pageTitle={pageTitle} breadCrumb={breadCrumb} />
      </Box>
    </Box>
  );
};

export default Banner;

const styles = {
  absoluteBanner: {
    width: ['80%', null, '60%', null, '50%'],
    marginLeft: ['10%', null, '20%', null, '25%'],
    position: ['relative', 'relative', 'relative', 'absolute'],
    top: [null, null, null, '65.25%', '66%', '75%'],
    zIndex: 20,
  },
  section: {
    backgroundImage: [
      'linear-gradient(140deg, #291EA2 0%, #AB6C84 60%)',
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
    height: ['0', null, '200px'],
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['none', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
  },
};
