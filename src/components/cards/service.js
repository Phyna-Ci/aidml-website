/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Text, Heading } from 'theme-ui';
import { LearnMore } from 'components/link';

const Service = ({ item }) => {
  return (
    <Box sx={{ ...styles.serviceItem, ...(item.hasBg ? styles.serviceItemWithBg : { }) }} >
      <Box as="figure" sx={styles.figure}>
        <Image src={item?.icon} alt="icon" />
      </Box>
      <Box sx={{ ...styles.content, ...(item.hasBg ? { h3: { ... styles.content.h3, color: 'white' } } : { }) }}>
        <Heading as="h3">{item?.title}</Heading>
        <Text as="p">{item?.description}</Text>
        {item?.hasBg ? <LearnMore path={item?.moreLink} /> : <LearnMore label="Coming Soon" path={item?.moreLink} />}
      </Box>
    </Box>
  );
};

export default Service;

const styles = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    ':not(:last-child)': {
      borderRight: [null, null, null, '0.1rem solid #D7D7D7'],
    },
    padding: '40px 30px',
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
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 4],
      lineHeight: [1.67],
      textAlign: 'center'
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
