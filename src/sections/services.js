/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import {borderRadius, rgba} from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import enterpriseIcon from 'assets/images/icons/enterprise.svg';
import legacyIcon from 'assets/images/icons/legacy.svg';
import entertainmentIcon from 'assets/images/icons/entertainment.svg';

const data = [
  {
    id: 1,
    icon: enterpriseIcon,
    title: 'Lugah Enterprise',
    moreLink: '/luga',
    hasBg: true,
    // description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: legacyIcon,
    title: 'Lugah Legacy',
    moreLink: '/luga',
    // description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: entertainmentIcon,
    title: 'Lugah Entertainment',
    moreLink: '/luga',
    // description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

const Services = () => {
  return (
    // <Box as="section" id="services" sx={styles.section}>
      <div>
        <Box sx={styles.contentWrapper}>
          {data?.map((item, index) => (
            <Service style={ index !== 0 && { borderRight: '1px solid #000000' }} key={item.id} item={item} />
          ))}
        </Box>
      </div>
    // </Box>
  );
};

export default Services;

const styles = {
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
    background: 'white',
    gap: 30,
    display: 'grid',
    boxShadow: '0px 3px 3.8px rgba(38,78,118,0.1)',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
