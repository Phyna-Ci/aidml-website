
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
import Lottie from 'lottie-react';
import FeatureCardColumn from 'components/feature-card-column.js';
import droneAnimation from 'assets/animations/50842-drone.json';
import hologramAnimation from 'assets/animations/50845-hologram.json';
import headphoneAnimation from 'assets/animations/50843-headphone.json';
import ccTV from 'assets/animations/50721-cctv.json';
import digitalMarketing from 'assets/animations/50834-dashboard.json';
import digtalMarketingAnimation from 'assets/animations/50851-printer.json';

export default function KeyFeature() {
  const data = [
    {
      id: 1,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={droneAnimation} />,
      altText: 'AI Data Solutions',
      title: 'AI Data Solutions',
      text:
        'We deploy AI solutions that solve critical problems for businesses. From customer experience platforms to digitizing manual processes, our solutions enable business growth and boost productivity',
    },
    {
      id: 2,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={hologramAnimation} />,
      altText: 'Digital Experience',
      title: 'Digital Experience',
      text:
        'We help legacy businesses transition from manual people-led processes to digital, AI-led processes. We have helped businesses transition from handling requests through in-person client visits or call centres to using AI tools for internal communication, resource management, and external communication with customers.',
    },
    {
      id: 3,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={headphoneAnimation} />,
      altText: 'Customer Experience',
      title: 'Customer Experience',
      text:
        'Our AI Solutions transform how businesses interact with their customers. These solutions handle customer requests, direct customers to resources, and escalate requests to customer support teams. Businesses who use them experience increased brand loyalty because of faster response times and increased quality of engagement.',
    },
    {
      id: 4,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={digitalMarketing} />,
      altText: 'Advisory Services',
      title: 'Advisory Services',
      text:
        'We help businesses assess their processes and then provide expert advice on the appropriate AI solution that meets their needs. Our advisory services cover digital strategy, process audits, sales enablement, digital & process transformation, and customer experience consulting.',
    },
    {
      id: 3,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={ccTV} />,
      altText: 'Trust, Safety & Security',
      title: 'Trust, Safety & Security',
      text:
        'We provide security advisory for all our AI solutions to ensure that there is 100% data safety with no data breach or data loss',
    },
    {
      id: 1,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={digtalMarketingAnimation} />,
      altText: 'Back Office',
      title: 'Back Office',
      text:
        'We automate routine tasks like record management, data management, accounting, and IT services freeing up your employees’ time to focus on core deliverables that drive business growth.',
    },
  ];
  return (
    <section id="services">
      <Container>
      <br sx={styles.br} />
      <br sx={styles.br} />
      <br />
        <Grid sx={styles.bottomGrid}>
          {data.slice(0, 3).map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Box sx={styles.bottomGrid}>
        {data.slice(3, 6).map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  br: {
   display: ['none', 'block'],
  },
  bottomGrid: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: ['center', null],
    width: '100%',
    gap: '40px',
    marginTop: ['0', null, '75px'],
    flexWrap: ['wrap', null, 'nowrap'],
  },
  heading: {
    paddingTop: '10rem',
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
};
