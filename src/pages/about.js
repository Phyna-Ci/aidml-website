import * as React from 'react';
import {
  Box, Container, Grid,
  Heading, Text,
} from 'theme-ui';
import Lottie from 'lottie-react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import piggyBankAnimationData from 'assets/animations/piggy-bank.json';

const About = () => (
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
            AI Data Management was born out of a need to make Africa and African enterprises an important part of the global AI value chain. Leveraging our expertise in artificial intelligence, we are creating awareness and building AI tools that drive growth, increase efficiency and reinforce brand loyalty for Africa’s biggest businesses.
          </Text>
          <br />
          <Text sx={styles.text}>
            Our first step on this important journey is the launch of Lugah Enterprise, our conversational AI Bot that redefines the customer support experience. Lugah Enterprise helps businesses move from customer support dominated by 24/7 call centres to interactive and intelligent AI bots that offer faster response time and a larger handling capacity. Lugah Enterprise complements your customer service team by filtering and handling routine or repeat queries, linking customers with self-service options and only escalating high-value requests that require a human agent.
          </Text>
          <br />
          <Text sx={styles.text}>
            With every business we onboard, design specialized tools for or simply educate on the possibilities of AI, we are unlocking the AI value chain in Africa!
          </Text>
        </Box>
      </Grid>
    </Container>
    <br />
    <br />
  </React.Fragment>
);

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
  }
}
