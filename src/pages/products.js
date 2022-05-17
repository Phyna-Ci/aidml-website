import {jsx} from 'theme-ui';
import * as React from 'react';
import {Container, Box, Text, Heading, Button} from 'theme-ui';
import Lottie from 'lottie-react';
import useModal from '../hooks/useModal';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import phoneChatAnimation from 'assets/animations/phone-conversation.json';
import chatBubbleAnimation from 'assets/animations/chatbot-bubble.json';
import chatBotAnimation from 'assets/animations/chatbot-animation.json';
import comingSoonAnimation from 'assets/animations/coming-soon.json';

const Products = () => {
  const modal = useModal();
  const handleClick = () => modal.dispatch({
    type: 'TOGGLE',
  })
  return (
    <React.Fragment>
      <SEO
        title="AIDML Products"
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <Banner pageTitle={'Products'} breadCrumb={'Home / Products'}/>
      <br/>
      <br/>
      <br/>
      <Box sx={styles.productsSection}>
        <Container sx={styles.productsContainer}>
          <Box sx={styles.product}>
            <Box sx={styles.textSection}>
              <Heading as="h4">
                Lugah Enterprise
              </Heading>
              <Text as="p">
                Lugah Enterprise is a 24/7 customer service platform that provides intelligent, multilingual, and
                real-time interaction with customers.
              </Text>
              <Text as="p">
                Every customer enquiry is responded to in seconds by a Conversational AI bot that is friendly,
                knowledgeable, and efficient. Companies that use Lugah Enterprise accelerate customer acquisition,
                optimize revenue and reduce their overhead cost.
              </Text>
              <Box sx={styles.buttonWrapper}>
                <Button as="a" href="https://lugahfront.aidml.com" target="_blank" sx={styles.buttonWrapper.primary}>Consultation</Button>
              </Box>
            </Box>
            <Box sx={styles.illustrationSection}>
              <Lottie style={{height: '600px'}} sx={styles.animation} loop={true} autoPlay={true}
                      animationData={phoneChatAnimation}/>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.comparisons}>
        <Container sx={styles.productsContainer}>
          <Heading sx={styles.chatbotsHeading} as="h4">
            Chatbots
          </Heading>
          <Heading sx={styles.vs} as="h4">
            vs
          </Heading>
          <Heading sx={styles.conversationalBots} as="h4">
            Conversational Bots
          </Heading>
          <Box sx={styles.comparisonSection}>
            <Box sx={{width: ['100%', '35%'], display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Lottie style={styles.animation} loop={true} autoPlay={true} animationData={chatBotAnimation}/>
              <Heading as="h5">
                Chatbot
              </Heading>
              <Text as="p">
                chatbots commonly operate based on pre-written questions and answers. they are not capable of providing
                information outside of the answers and questions they are programmed with. they simply introduce
                themselves, ask you questions, receive your answers, and provide you with a solution that matches your
                question. if your question does not match any of the information that they have been programmed with,
                they
                cannot provide further help.
              </Text>
            </Box>
            <Box sx={{width: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#FFFFFF'}}>

            </Box>
            <Box sx={{width: ['100%', '35%'], display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Lottie style={styles.animation} loop={true} autoPlay={true} animationData={chatBubbleAnimation}/>
              <Heading as="h5">
                Conversational AI
              </Heading>
              <Text as="p">
                our conversational ai bot offers wider capabilities because while it provides answers, it also learns
                from
                every interaction with a customer powered by machine learning. it can understand context, detect slang,
                abbreviations, and mispronunciations using natural language processing. this allows it to answer
                questions
                it was not programmed with. with conversational ai bots your responses are faster and more helpful to
                your
                customer.
              </Text>
              <Text as="p">
                most chatbots are now being powered by ai equipping them with the ability to learn and intelligently
                update themselves as they go along.
              </Text>
            </Box>
          </Box>
          <Box sx={{...styles.buttonWrapper, justifyContent: 'center'}}>
            <Button onClick={handleClick} sx={styles.buttonWrapper.primary}>Get Started</Button>
          </Box>
        </Container>
      </Box>
      <Box sx={styles.productsSection}>
        <Container sx={styles.productsContainer}>
          <Heading sx={styles.inDevelopment} as="h4">
            In Development
          </Heading>
          <Text sx={styles.otherProducts} as="p">
            Other products
          </Text>
        </Container>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}>
        <Box sx={{
          height: '600px',
          background: '#CD71F62F',
          width: '50%',
          display: ['none', 'flex'],
        }}>
          <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={comingSoonAnimation}/>
        </Box>
        <Box sx={{
          height: ['auto', '450px'],
          background: '#FFFFFF',
          width: ['100%', '50%'],
          padding: '2.95rem',
        }}>
          <Heading sx={styles.inDevelopment} as="h5">
            Lugah Legacy
          </Heading>
          <Text sx={{width: ['100%', '70%'], fontSize: '14px', color: '#382933', padding: '1rem 0', lineHeight: 1.75}}
                as="p">
            Lugah Legacy is an AI app that builds memories forever by saving a person&apos;s personality in a knowledge
            base capable of human interaction. With enough data collected, the app is capable of real-time replies and
            interaction with users who can ask questions, crack jokes, and have full-length discussions with loved ones
            who have passed on.
          </Text>
          <Box sx={{...styles.buttonWrapper}}>
            <Button onClick={handleClick} sx={styles.buttonWrapper.primary}>I want to know when it is launched</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}>
        <Box sx={{
          height: ['auto', '450px'],
          background: '#FFFFFF',
          width: ['100%', '50%'],
          padding: '2.95rem',
        }}>
          <Heading sx={styles.inDevelopment} as="h5">
            Lugah Delivery
          </Heading>
          <Text sx={{width: ['100%', '70%'], fontSize: '14px', color: '#382933', padding: '1rem 0', lineHeight: 1.75}}
                as="p">
            Lugah Delivery is an AI app that automates the ordering and fulfillment process for e-commerce and logistics
            companies. Customers can track products after their orders are processed, get replies to enquiries and
            receive
            notifications.
          </Text>
          <Box sx={{...styles.buttonWrapper}}>
            <Button onClick={handleClick} sx={styles.buttonWrapper.primary}>I want to know when it is launched</Button>
          </Box>
        </Box>
        <Box sx={{
          height: '600px',
          background: '#7B28FF1C',
          width: '50%',
          marginTop: '-50px',
          display: ['none', 'flex'],
        }}>
          <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={comingSoonAnimation}/>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: ['column', 'row'],
      }}>
        <Box sx={{
          height: '600px',
          background: '#CD71F62F',
          width: '50%',
          marginTop: '-50px',
          display: ['none', 'flex'],
        }}>
          <Lottie sx={styles.animation} loop={true} autoPlay={true} animationData={comingSoonAnimation}/>

        </Box>
        <Box sx={{
          height: ['auto', '450px'],
          background: '#FFFFFF',
          width: ['100%', '50%'],
          padding: '2.95rem',
        }}>
          <Heading sx={styles.inDevelopment} as="h5">
            Lugah Enterprise
          </Heading>
          <Text sx={{width: ['100%', '70%'], fontSize: '14px', color: '#382933', padding: '1rem 0', lineHeight: 1.75}}
                as="p">
            Lugah Entertainment is an AI app that brings celebrities closer to their fanbase creating opportunities for
            direct engagement and audience monetization. Lugah Entertainment recreates a celebrity’s personality and
            voice
            into a realistic avatar capable of intelligent, real-time interaction with fans.
          </Text>
          <Box sx={{...styles.buttonWrapper}}>
            <Button onClick={handleClick} sx={styles.buttonWrapper.primary}>I want to know when it is launched</Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
};

export default Products;

const styles = {
  productsSection: {
    height: 'auto',
    background: '#FFFFFF',
    padding: ['0 2rem', null, null, '0 4rem']
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
  },
  textSection: {
    width: ['100%', null, null, '50%'],
    padding: ['0 1rem', null, null, 0],
    alignSelf: 'center',
    h4: {
      color: '#7B28FF',
      fontWeight: 600,
      fontSize: '38px',
      textAlign: 'left',
    },
    p: {
      fontSize: '14px',
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
      fontWeight: 500,
      ':hover': {
        background: 'white',
        color: '#FF28FF',
      }
    },
  },
  comparisons: {
    minHeight: '100vh',
    background: 'transparent linear-gradient(342deg, #141C5C 0%, #7B28FF 100%) 0% 0% no-repeat padding-box',
    padding: ['0 2rem', null, null, '0 4rem'],
  },
  chatbotsHeading: {
    fontSize: '40px',
    color: '#FFFFFF',
    fontWeight: 700,
    paddingTop: '1rem',
  },
  vs: {
    fontSize: '35px',
    color: '#FFFFFF',
    fontWeight: 500,
  },
  conversationalBots: {
    fontSize: '40px',
    color: '#FF28FF',
    fontWeight: 700,
  },
  comparisonSection: {
    padding: '2rem 0',
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    h5: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#FFFFFF'
    },
    p: {
      color: '#FFFFFF',
      fontSize: '14px',
      padding: '2rem',
      lineHeight: 1.9,
    }
  },
  animation: {
    width: '135px',
    height: '122px',
  },
  inDevelopment: {
    fontWeight: 700,
    fontSize: '40px',
    color: '#7B28FF',
    padding: '1.5rem 0',
  },
  otherProducts: {
    color: '#382933',
    fontSize: '20px'
  }
}
