/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import Slider from 'react-slick';
import { jsx, Button, Heading, Text, Box } from 'theme-ui';
import LandingAnimation from './landing-animation';

function CustomNextArrow({ className, style, onClick, currentSlide }) {
  return (
    <ul className={className}>
      <li sx={styles.listItem}>
        <Button onClick={onClick} style={styles.button}>
          <div
            style={currentSlide === 0 ? styles.controlBtn : styles.controlBtnInactive} />
        </Button>
      </li>
      <li sx={styles.listItem}>
        <Button onClick={onClick} style={styles.button}>
          <div
            style={currentSlide === 1 ? styles.controlBtn : styles.controlBtnInactive} />
        </Button>
      </li>
    </ul>
  )
}

const LandingCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    nextArrow: <CustomNextArrow
      currentSlide={currentSlide}
      className={'slick-dots'}
      onClick={() => {
        console.log({ currentSlide })
      }}
    />,
    prevArrow: null,
  };

  return (
    <div style={{ maxWidth: '89vw' }}>
      <Slider
        sx={styles.carousel} {...settings} autoplay={true}>
        <Box sx={styles.heading}>
          <Box className="carousel-text-area" as="span">
            <Heading as="h3">
              AI Solutions For Africa
            </Heading>
            <Text sx={styles.defaultDescription} as="p">
              At AI Data Management, we are building a suite of AI solutions for African Enterprises. Our goal is simple. We want to help businesses grow by deploying AI solutions that meet customer needs, reduce overhead and drive growth.
            </Text>
          </Box>
          <Box sx={{
            height: 'auto',
            alignSelf: 'center',
          }} as="span">
            <LandingAnimation />
          </Box>
        </Box>
        <Box sx={styles.heading}>
          <Box className="carousel-text-area" as="span">
            <Heading as="h3">
              Redefine Customer Experiences For Your Business
            </Heading>
            <Text sx={styles.defaultDescription} as="p">
              Increase your response time and improve customer satisfaction with our Conversational AI bots that offer engaging conversations, complaint resolution, and customer support interaction.
            </Text>
          </Box>
          <Box sx={{
            height: 'auto',
            alignSelf: 'center',
          }} as="span">
            <LandingAnimation />
          </Box>
        </Box>
      </Slider>
    </div>
  );
}

export default LandingCarousel;

const styles = {
  heading: {
    minHeight: '400px',
    display: 'flex !important',
    flexDirection: 'row',
    justifyContent: 'space-between',
    'span.carousel-text-area': {
      backround: 'red',
      width: [null, null, null, null, '80%'],
      h3: {
        marginTop: '120px',
        lineHeight: 1.18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',
        fontSize: ['28px', '35px', null, '40px', null, '40px', '40px'],
        maxWidth: ['500px', null, null, null, null, null, '100%'],
      },
      p: {
        width: '70%'
      }
    },
  },
  defaultDescription: {
    color: '#FFFFFF',
    marginTop: ['10px', null, null, '10px'],
    fontSize: ['14px', '16px'],
    br: {
      display: ['none', null, null, null, null, 'block'],
    },
  },
  listItem: {
    padding: '.5rem 0'
  },
  button: {
    background: 'transparent',
    padding: 0,
    height: 'auto',
    minHeight: 'auto'
  },
  controlBtn: {
    width: '12px',
    height: '12px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '100%'
  },
  controlBtnInactive: {
    width: '12px',
    height: '12px',
    background: 'transparent',
    borderRadius: '100%',
    border: '2px solid #FFFFFF',
  },
  carousel: {
    '.slick-next:before': {
      display: 'none'
    },
    '.slick-prev:before': {
      display: 'none'
    }
  },
}
