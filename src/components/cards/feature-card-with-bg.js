import { Box, Heading, jsx } from 'theme-ui';
import Lottie from 'lottie-react';

export default function FeatureCardWithBg({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.imgCircle}>
        <Lottie style={{
          height: '80px',
        }} loop={true} autoPlay={true} animationData={src} />
      </Box>

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    boxShadow: '0 10px 20px 3px #00008E27, 0 6px 6px 3px #00008E27',
    height: ['200px', '200px'],
    width: ['300px', null, null, null, '300px', '290px', '300px'],
    padding: '25px 15px',
    background: '#FFFFFF',
    margin: '.5rem'
  },
  imgCircle: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: '80px',
    height: '80px',
    background: 'linear-gradient(145deg, rgba(123,40,255,0.9794292717086834) 0%, rgba(205,113,246,1) 47%, rgba(255,40,255,0.8477766106442577) 100%)',
    borderRadius: '100%',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [2, null, null, null, null, 2],
      color: '#19456B',
      lineHeight: 1.4,
      fontWeight: 500,
      mb: [2, null, null, null, null, 3],
    },
    subTitle: {
      fontSize: '12px',
      fontWeight: 400,
      color: '#382933'
    },
  },
};
