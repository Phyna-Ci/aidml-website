import { jsx } from 'theme-ui';
import * as React from 'react';
import { Container, Box, Text, Heading, Button } from 'theme-ui';
import Lottie from 'lottie-react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import KeyFeature from '../sections/key-feature';
import FeatureCardWithBg from 'components/cards/feature-card-with-bg';
import FeatureCardColumn from 'components/feature-card-column';
import video360Animation from 'assets/animations/92010-video-360.json';
import designAnimation from 'assets/animations/91881-design.json';
import digitalMarketingAnimation from 'assets/animations/91898-digital-marketing.json';
import creditCardAnimation from 'assets/animations/credit-card.json';
import verificationAnimation from 'assets/animations/license-verification.json';
import eCommerceBoxAnimation from 'assets/animations/commerce-box.json';
import paperPlanesAnimation from 'assets/animations/paper-planes.json';
import bookAnimation from 'assets/animations/book.json';
import appMessagingAnimation from 'assets/animations/app-messaging.json';
import webMessagingAnimation from 'assets/animations/web-messaging.json';
import Creativity from 'assets/key-feature/creativity.svg';

const Solutions = () => {
  const data = [
    {
      id: 1,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={video360Animation} />,
      altText: 'Research',
      title: 'Research',
      text:
        'we dedicate time to understanding the problems affecting the growth of the businesses we serve. from onsite assessments, system audits, and stakeholder engagement, we gather unique insights about the most important issues for our clients.',
    },
    {
      id: 2,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={designAnimation} />,
      altText: 'Design',
      title: 'Design',
      text:
        'Driven by data and working closely with businesses, we design AI solutions that cater to the problems we have discovered. Our solutions help businesses manage internal communication effectively, scale customer experiences and connect resources to customers and employees who need them.',
    },
    {
      id: 3,
      imgSrc: <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={digitalMarketingAnimation} />,
      altText: 'Deploy',
      title: 'Deploy',
      text:
        'We provide constant support for our clients to ensure that the deployed solutions result in productivity and growth.',
    },
  ]
  return (
    <React.Fragment>
      <SEO
        title="AIDML Solutions"
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <Banner pageTitle={'Solutions'} breadCrumb={'Home / Solutions'} />
      <KeyFeature />
      <br />
      <br />
      <br />
      <Box sx={styles.ourProcess}>
        <Container sx={styles.ourProcessInner}>
          <Box sx={styles.headingSection}>
            <Heading as="h3">
              Industries
            </Heading>
            <Text as="p">Our Processes</Text>
          </Box>
          <Box sx={styles.bottomGrid}>
            {data.map((item) => (
              <Box key={item.id} sx={item.id === 2 && styles.featureCardContainerElevated}>
                <FeatureCardColumn
                  customSubTitleStyle={{ ...styles.featureCard, color: '#382933' }}
                  customTitleStyle={styles.featureCard}
                  readMore={false}
                  src={item.imgSrc}
                  alt={item.title}
                  title={item.title}
                  text={item.text}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <Box sx={styles.solutionsSection}>
        <Container sx={styles.solutionsContainer}>
          <Box sx={styles.solution}>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Financial solutions
              </Heading>
              <Text as="p">
                In a crowded financial services sector, the quality of customer experience is often a major -businesses eager to retain their customer base while reaching new audiences.
              </Text>
              <Text as="p">
                By deploying Conversational AI bots across various channels (apps and web) we help companies in the financial sector improve their reputation and enhance customer satisfaction
              </Text>
              <Box sx={styles.bulletPointsContainer}>
                {[
                  'Close Leads',
                  'Offer Personalized Banking',
                  'Increase Customer Engagement and Retention',
                  'Offer 24/7 Customer Support'
                ].map((item) => (
                  <Box sx={styles.bulletPoints} key={item} as="span">
                    → {item}
                  </Box>
                ))}
              </Box>
              <Box sx={styles.buttonWrapper}>
                <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
            <Box sx={styles.illustrationSection}>
              <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={creditCardAnimation} />
            </Box>
          </Box>
          <Box sx={styles.solution}>
            <Box sx={styles.illustrationSection}>
              <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={verificationAnimation} />
            </Box>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Automotive solutions
              </Heading>
              <Text as="p">
                We guide the decision-making of potential customers by providing product specifications like car models, features, and pricing information in seconds. Automotive companies that deploy conversational AI have the opportunity to impact buying decisions in an engaging manner.
              </Text>
              <Box sx={styles.bulletPointsContainer}>
                {[
                  'Provide Product Information On-demand',
                  'Convert Leads',
                  'Schedule Service Appointments',
                  'Offer 24/7 Customer Support'
                ].map((item) => (
                  <Box sx={styles.bulletPoints} key={item} as="span">
                    → {item}
                  </Box>
                ))}
              </Box>
              <Box sx={{ ...styles.buttonWrapper, justifyContent: 'end' }}>
                <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.solution}>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Ecommerce
              </Heading>
              <Text as="p">
                Our AI solutions are present through the customer’s entire purchase journey helping them compare products and prices and answering questions around delivery, discounts, and other policies. These solutions are critical for companies in e-commerce where trust and customer experience are directly tied to growth.
              </Text>
              <Box sx={styles.bulletPointsContainer}>
                {[
                  'Personalize Shopping Experiences',
                  'Automate Seller Onboarding & Inventory Management',
                  'Provide Instant Product Recommendations',
                  'Get Customer Insights & Analytics', 'Offer 24/7 Customer Support'
                ].map((item) => (
                  <Box sx={styles.bulletPoints} key={item} as="span">
                    → {item}
                  </Box>
                ))}
              </Box>
              <Box sx={styles.buttonWrapper}>
                <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
            <Box sx={styles.illustrationSection}>
              <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={eCommerceBoxAnimation} />
            </Box>
          </Box>
          <Box sx={styles.solution}>
            <Box sx={styles.illustrationSection}>
              <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={paperPlanesAnimation} />
            </Box>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Aviation
              </Heading>
              <Text as="p">
                Our AI solutions provide answers to frequent customer queries such as flight rescheduling, flight booking, compensation, and cancellation. The personalized experience our AI solutions provide powers great travel and hospitality experiences.
              </Text>
              <Box sx={styles.bulletPointsContainer}>
                {[
                  'Manage  Bookings',
                  'Collect Feedback',
                  'Convert Leads',
                  'Offer 24/7 Customer Support',
                  'Boost sales & Drive Retention'
                ].map((item) => (
                  <Box sx={styles.bulletPoints} key={item} as="span">
                    → {item}
                  </Box>
                ))}
              </Box>
              <Box sx={{ ...styles.buttonWrapper, justifyContent: 'end' }}>
                <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.solution}>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Education
              </Heading>
              <Text as="p">
                Our AI solutions help students, visitors and faculty find resources faster on websites and other platforms run by educational institutions
              </Text>
              <Box sx={styles.bulletPointsContainer}>
                {[
                  'Provide Information On-demand',
                  'Improve Learning Experience',
                  'Offer 24/7 Customer Support',
                  'Provide Personalized Assistance',
                  'Create Seamless Application Processes'].map((item) => (
                    <Box sx={styles.bulletPoints} key={item} as="span">
                      → {item}
                    </Box>
                  ))}
              </Box>
              <Box sx={styles.buttonWrapper}>
                <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
            <Box sx={styles.illustrationSection}>
              <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={bookAnimation} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.ourProcess}>
        <Container sx={styles.ourProcessInner}>
          <Box sx={styles.headingSection}>
            <Heading as="h3">
              Platforms
            </Heading>
            <Text as="p">Omnichannel Deploy</Text>
            <Text as="p">24/7 AI Solutions across text and voice channels</Text>
          </Box>
          <Box sx={styles.shadowFeatureCards}>
            <FeatureCardWithBg title={'App messaging'} altText="App messaging" src={appMessagingAnimation} />
            <FeatureCardWithBg title={'Web messaging'} altText="Web messaging" src={webMessagingAnimation} />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
};

export default Solutions;

const styles = {
  ourProcess: {
    background: '#7B28FF15',
    height: 'auto',
    textAlign: 'center'
  },
  ourProcessInner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4rem 0'
  },
  headingSection: {
    h3: {
      fontSize: ['25px', '35px', null, '35px', null, '35px', '35px'],
      fontWeight: 700,
      padding: '.5rem 0',
      color: '#7B28FF',
    },
    p: {
      color: '#382933',
      fontSize: '14px'
    }
  },
  featureCardContainerElevated: {
    marginBottom: [null, null, '-10rem'],
  },
  featureCard: {
    textAlign: 'center'
  },
  bottomGrid: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '40px',
    marginTop: '75px',
    flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
  },
  solutionsSection: {
    height: 'auto',
    background: '#FFFFFF'
  },
  solutionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4rem 0'
  },
  solution: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem 0'
  },
  textSection: {
    width: ['100%', null, null, '50%'],
    padding: ['0 2rem', null, null, 0],
    h4: {
      color: '#7B28FF',
      fontWeight: 600,
      fontSize: '25px',
      textAlign: 'left',
    },
    p: {
      fontSize: '12px',
      textAlign: 'left',
      marginTop: '2rem',
      color: '#382933'
    }
  },
  illustrationSection: {
    width: '50%',
    padding: '1rem',
    display: ['none', null, 'block']
  },
  bulletPointsContainer: {
    padding: '2rem 0'
  },
  bulletPoints: {
    display: 'block',
    textAlign: 'left',
    margin: '.75rem 0',
    fontSize: '12px',
    color: '#382933'
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
  shadowFeatureCards: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '2rem 0'
  }
}