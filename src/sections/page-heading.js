/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import entertainmentIcon from 'assets/images/icons/entertainment.svg';

const Services = ({ pageTitle, breadCrumb }) => {
  return (
    <div>
      <Box sx={styles.contentWrapper}>
        <Heading as="h3">
          {pageTitle || 'About Us'}
        </Heading>
        <Text as="p">
          {breadCrumb || 'Home / About'}
        </Text>
      </Box>
    </div>
  );
};

export default Services;

const styles = {
  contentWrapper: {
    background: 'white',
    display: 'flex',
    boxShadow: '0px 2px 25px #7B28FF2E',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem 0',
    h3: {
      fontSize: ['28px', '35px', null, '40px', null, '50px', '50px'],
      fontWeight: 700,
      padding: '.5rem 0',
      color: '#7B28FF',
    },
    p: {
      color: '#382933',
      display: 'block',
      padding: '1rem 0',
      fontSize: '14px',
    }
  },
};
