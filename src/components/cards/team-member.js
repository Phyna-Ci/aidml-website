/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Image, Text, Heading, Link } from 'theme-ui';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image
          sx={styles.images}
          src={member?.avatar}
          alt={member?.name}
        />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'linkedin' && (
                <FaLinkedinIn
                  size="18px"
                  color="#0072b1"
                />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
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
    },
    cursor: 'pointer',
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    // height: '300px',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '15px',
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
      fontSize: '14px'
    },
    // height: '120px',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'end',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
  images: {
    width: '160px',
    height: '172px',
    objectFit: 'cover',
  },
};
