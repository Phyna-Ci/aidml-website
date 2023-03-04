/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import FooterService from './footer-service';
import { FaPaperPlane, FaPhone, FaMapMarker } from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: FaPhone,
    title: 'Phone',
    moreLink: '#',
    hasBg: true,
    items: ['Dubai: +971 52 153 8975 - Phyna IT (AiDML Parent Company)', 'Nigeria: +234 705 974 8355'],
    description: 'Dubai: +971 52 153 8975',
   
  },
  {
    id: 3,
    icon: FaMapMarker,
    title: 'Location',
    moreLink: '#',
    items: ['Dubai: 202, Souk Al Bahar, Block -C, Downtown, Dubai', 'Nigeria: 39 Bourdillon Rd, Ikoyi 101233, Lagos'],
   
  },
  {
    id: 4,
    icon: FaPaperPlane,
    title: 'Email',
    moreLink: '#',
    description: 'info@aidml.com',
  },
];

const FooterStrip = () => {
  return (
    <div sx={styles.footerStrip}>
      <Box sx={styles.contentWrapper}>
        {data?.map((item, index) => (
          <FooterService key={item.id} item={item} />
        ))}
      </Box>
    </div>
  );
};

export default FooterStrip;

const styles = {
  footerStrip: {
    padding: '3rem 0'
  },
  section: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: '75%',
    zIndex: 1,
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    background: 'transparent',
    // gap: 30,
    display: 'grid',
    // boxShadow: '0px 3px 3.8px rgba(38,78,118,0.1)',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
