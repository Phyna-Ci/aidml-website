/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image, Heading, Text } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/section-heading';
import TeamMember from 'components/cards/team-member';

import avatar1 from 'assets/images/lawrence.png';
import avatar2 from 'assets/images/lulu-briggs.png';
import avatar3 from 'assets/images/oloritun.jpg';
import avatar4 from 'assets/images/akindipo.jpg';
import avatar5 from 'assets/images/arigbabu.jpg';
import avatar6 from 'assets/images/odunlami.jpg';
import avatar7 from 'assets/images/odueke.jpg';
import avatar8 from 'assets/images/onifade.jpg';
import avatar9 from 'assets/images/jui.png';
import avatar10 from 'assets/images/tom.png';
import arrowRight from 'assets/images/icons/arrow-right.png';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Lawrence Esin',
    designation: 'Founder/CEO',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Dr. (Mrs.) Seinye O.B. Lulu-Briggs',
    designation: 'Member Advisory Team',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Rahman Oloritun',
    designation: 'Project Manager',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Ayomide Akindipo',
    designation: 'Legal',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 5,
    avatar: avatar5,
    name: 'Olasimbo Arigbabu (PhD)',
    designation: 'Data Scientist/APM',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 6,
    avatar: avatar6,
    name: 'Olusola Odunlami',
    designation: 'Finance',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
    ],
  },
  {
    id: 7,
    avatar: avatar7,
    name: 'Tolulope Odueke',
    designation: 'APM Software Engineering',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 8,
    avatar: avatar8,
    name: 'Funto Onifade',
    designation: 'Business Development/Corporate Comms',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 9,
    avatar: avatar9,
    name: 'Jui Hsiang Chung',
    designation: 'Business Development - Asia',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 10,
    avatar: avatar10,
    name: 'Thomas Chen Yun Hua',
    designation: 'Senior Technology Consultant',
    socialLinks: [
      {
        name: 'linkedin',
        link: 'http://linkedin.com',
      },
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
];

const OurTeam = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
      <Box sx={styles.headingSection}>
          <Heading as="h3">
            Our Team
          </Heading>
          <Text as="p">Meet our amazing team</Text>
        </Box>
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          watchSlidesVisibility={true}
          slidesPerView={5}
          breakpoints={breakpoints}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default OurTeam;

const styles = {
  section: {
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  headingSection: {
    textAlign: 'center',
    h3: {
      fontSize: ['25px', '35px', null, '35px', null, '35px', '35px'],
      fontWeight: 700,
      padding: '3.5rem 0 0 0',
      color: '#7B28FF',
    },
    p: {
      color: '#382933',
      fontSize: '14px',
      padding: '2.5rem 0 3.5rem 0',
    }
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
