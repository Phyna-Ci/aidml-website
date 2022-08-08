import * as React from 'react';
import {
  Box, Container, Grid,
  Heading, Text, Button,
} from 'theme-ui';
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import piggyBankAnimationData from 'assets/animations/piggy-bank.json';
import OurTeam from 'sections/our-team';

const About = () => {
  const m = {name: 'Lawrence Esin', avatar: 'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png', about: 'He is the ceo of this company and you can read his bio', designation: 'ceo', socialLinks: [{
    link: 'https://google.com',
    name: 'twitter',
  }]}
  const router = useRouter()
  return (
    <React.Fragment>
      <SEO
        title="About AIDML."
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <Banner pageTitle={'About Us'} breadCrumb={'Home / About'} />
      <br />
      <br />
      <br />
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.grid.headingContainer}>
            <Heading sx={styles.heading}>
              “Africa is losing ground in the AI race expected to add <span>trillions of dollars to the global economy over the next decade”</span>
            </Heading>
            <Lottie loop={true} autoPlay={true} animationData={piggyBankAnimationData} />
          </Box>
          <Box>
            <Text sx={styles.text}>
            At AI Data Management, our mission is to solve everyday problems using Artificial Intelligence.
            </Text>
            <br />
            <Text sx={styles.text}>
            Leveraging our expertise in artificial intelligence, we are building AI tools that drive growth, create experiences and improve efficiency for people and businesses everywhere.
            </Text>
            <br />
            <Text sx={styles.text}>
            Our goal is to create a world where beautiful shared experiences are amplified with artificial intelligence and critical problems become a thing of the past with the application of artificial intelligence.
            </Text>
            <br />
            <br />
            <Box sx={styles.buttonWrapper}>
              <Button onClick={() => {
                router.push("/products")
              }} sx={styles.buttonWrapper.primary}>Discover our products</Button>
            </Box>
          </Box>
        </Grid>
        <OurTeam />
      </Container>
      <br />
      <br />
    </React.Fragment>
  )
};

export default About;

const styles = {
  container: {
    marginTop: [null, '150px'],
    gap: '10px',
  },
  grid: {
    padding: '2rem 0',
    gridTemplateColumns: [
      '1fr',
      '1fr',
      null,
      null,
      'repeat(2, 1fr)',
    ],
    headingContainer: {
      padding: ['0, 2rem', null, '0 5rem'],
    }
  },
  heading: {
    color: '#141C5C',
    span: {
      color: '#FF28FF',
    }
  },
  text: {
    color: '#141C5C',
  },
  buttonWrapper: {
    padding: '1.5rem 0',
    width: '100%',
    display: 'flex',
    button: {
      minHeight: '45px',
    },
    primary: {
      background: '#FF28FF',
      height: '45px !important',
      borderRadius: 0,
      fontSize: '12px',
      fontWeight: 300,
      ':hover': {
        background: 'white',
        color: '#FF28FF',
      }
    },
  },
}
