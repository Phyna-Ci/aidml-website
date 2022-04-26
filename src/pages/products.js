import { jsx } from 'theme-ui';
import * as React from 'react';
import { Container, Box, Text, Heading, Button } from 'theme-ui';
import Lottie from 'lottie-react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import phoneChatAnimation from 'assets/animations/phone-conversation.json';

const Products = () => (
  <React.Fragment>
    <SEO
      title="AIDML Products"
      description="AI Data Management Limited: Technology for an Evolving World!"
    />
    <Banner pageTitle={'Products'} breadCrumb={'Home / Products'} />
    <br />
    <br />
    <br />
    <Box sx={styles.productsSection}>
      <Container sx={styles.productsContainer}>
        <Box sx={styles.product}>
          <Box sx={styles.textSection}>
            <Heading as="h4">
              Lugah Enterprise
            </Heading>
            <Text as="p">
              Lugah Enterprise is a 24/7 customer service platform that provides intelligent, multilingual, and real-time interaction with customers.
            </Text>
            <Text as="p">
              Every customer enquiry is responded to in seconds by a Conversational AI bot that is friendly, knowledgeable, and efficient. Companies that use Lugah Enterprise accelerate customer acquisition, optimize revenue and reduce their overhead cost.
            </Text>
            <Box sx={styles.buttonWrapper}>
              <Button sx={styles.buttonWrapper.primary}>Consultation</Button>
            </Box>
          </Box>
          <Box sx={styles.illustrationSection}>
            <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={phoneChatAnimation} />
          </Box>
        </Box>
      </Container>
    </Box>
  </React.Fragment>
);

export default Products;

const styles = {
  productsSection: {
    height: 'auto',
    background: '#FFFFFF',
    padding: '4rem'
  },
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '4rem 0'
  },
  product: {
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
      fontSize: '38px',
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
    height: '600px',
    padding: '1rem',
    display: ['none', null, 'block']
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