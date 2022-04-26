import * as React from 'react';
import { Box, Heading, Text, Button } from 'theme-ui';
import { truncateText } from 'utils/truncateText';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
  readMore = true,
  customTitleStyle,
  customSubTitleStyle
}) {
  const [isShowingMore, setIsShowingMore] = React.useState(false);
  return (
    <Box sx={styles.card}>
      <div style={{ height: '250px', padding: '2rem' }}>
        {src}
      </div>
      <Box sx={{
        ...styles.wrapper,
        ...(readMore && !isShowingMore ? {} : { height: '280px' }),
      }}>
        <Heading sx={{ ...styles.wrapper.title, ...customTitleStyle }}>{title}</Heading>
        <Text sx={{ ...styles.wrapper.subTitle, ...customSubTitleStyle }}>{
          readMore && !isShowingMore ? truncateText(text, 100, '...') : text
        }</Text>
      </Box>
      {readMore && (
        <Box>
          <Button onClick={() => setIsShowingMore(!isShowingMore)} as="a" sx={styles.readMore}>
           {readMore && !isShowingMore ? `READ MORE ${"   "} →` : 'SHOW LESS ←'}
          </Button>
        </Box>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    textAlign: 'center',
    flexDirection: 'column',
    alignSelf: 'self-start',
    // height: ['320px', '320px'],
    width: '300px',
    padding: '25px 15px',
    borderRadius: '6px',
  },
  animationHolder: {
    padding: '5rem',
  },
  readMore: {
    fontSize: '10px',
    color: '#FF28FF',
    fontWeight: 600,
    border: 'none',
    background: 'transparent',
    padding: '0 !important',
    ':hover': {
      background: 'transparent',
      textDecoration: 'underline'
    }
  },
  img: {
    mx: 'auto',
    mb: [3, null, 4, null, null, 5],
    width: ['80px', '90px', null, null, null, '100px', 'auto'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: [2, null, null, null, null, 2],
      color: '#7B28FF',
      textAlign: 'left',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, null, 3],
    },

    subTitle: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      textAlign: 'left',
      color: '#7D7D7D'
    },
  },
};
