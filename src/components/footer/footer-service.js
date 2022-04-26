/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Text, Heading } from 'theme-ui';
import { FaPhone } from 'react-icons/fa';

const FooterService = ({ item }) => {
  return (
    <Box sx={{ ...styles.serviceItem }} >
      <Box as="figure" sx={styles.figure}>
        <item.icon sx={styles.icon} />
      </Box>
      <Box sx={{ ...styles.content }}>
        <Heading as="h3">{item?.title}</Heading>
        {item.items ? item.items.map((it) => (
          <Text key={it} as="p">{it}</Text>
        )) : (
          <Text as="p">{item?.description}</Text>
        )}
      </Box>
    </Box>
  );
};

export default FooterService;

const styles = {
  icon: {
    color: '#FFF',
    height: '50px',
    width: '50px',
  },
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    background: 'rgba(255, 255, 255, 0.2)',
    ':not(:first-of-type):not(:last-child)': {
      background: 'rgba(255, 255, 255, 0.5)',
      padding: '25px 30px',
    },
    padding: '25px 30px',
  },
  serviceItemWithBg: {
    background: 'linear-gradient(140deg, #0F10AA 0%, #CC4F4F 90%)',
    color: '#FFFFFF'
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    mr: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%'],
    },
  },
  content: {
    h3: {
      color: '#F0F0F0',
      fontWeight: 500,
      fontFamily: 'body',
      fontSize: ['14px'],
      lineHeight: [1.67],
    },
    p: {
      fontSize: ['16px'],
      lineHeight: [1.88],
      fontWeight: 600,
      color: '#FFFFFF',
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
