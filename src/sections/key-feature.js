
import { jsx } from 'theme-ui';
import { Container, Grid, Box } from 'theme-ui';
// import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Creativity from 'assets/key-feature/creativity.svg';
import Transparency from 'assets/key-feature/transparency.svg';
import Accessibility from 'assets/key-feature/accessibility.svg';
import UserFocused from 'assets/key-feature/focused.svg';
import Integrity from 'assets/key-feature/integrity.svg';
import SectionHeading from '../components/section-heading';

const data = [
  {
    id: 1,
    imgSrc: Creativity,
    altText: 'Creativity',
    title: 'Creativity',
    text:
      'We believe that staying creative is the key to further innovative development in our ever-changing world',
  },
  {
    id: 2,
    imgSrc: Transparency,
    altText: 'Transparency',
    title: 'Transparency',
    text:
      'We are open about what we do and how we do it. We want people to feel secured and safe using our products.',
  },
  {
    id: 3,
    imgSrc: Accessibility,
    altText: 'Accessibility',
    title: 'Accessibility',
    text:
      'We simplify technology and create experiences our users will love',
  },
  {
    id: 4,
    imgSrc: UserFocused,
    altText: 'User-focused',
    title: 'User-focused',
    text:
      'Our goal is to provide easy access to technology for life comfort, whenever and wherever our users are.',
  },
  {
    id: 3,
    imgSrc: Integrity,
    altText: 'Integrity',
    title: 'Integrity',
    text:
      'We aim to be responsible and accountable and thrive to support these characteristics',
  },
];

export default function KeyFeature() {
  return (
    <section id="services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Interactive Artificial Intelligence"
          description="(AI) systems that integrate sophisticated but intuitive machine learning techniques for personalised user experience anywhere in the world."
        />

        <Grid sx={styles.bottomGrid}>
          {data.slice(0, 3).map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Box sx={styles.bottomGrid}>
          <FeatureCardColumn
            key={data[3].id}
            src={data[3].imgSrc}
            alt={data[3].title}
            title={data[3].title}
            text={data[3].text}
          />
          {/*<div />*/}
          <FeatureCardColumn
            key={data[4].id}
            src={data[4].imgSrc}
            alt={data[4].title}
            title={data[4].title}
            text={data[4].text}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  // grid: {
  //   // pt: [0, null, null, null, null, null, null, 3],
  //   gridGap: ['35px 35px', '40px 40px', '40px 40px'],
  //   gridTemplateColumns: [
  //     '1fr',
  //     '1fr',
  //     'repeat(1,1fr)',
  //     'repeat(1,1fr)',
  //     'repeat(3,1fr)',
  //   ],
  //   width: '100%',
  //   // marginLeft: ['0%', '10%', '0%'],
  // },
  bottomGrid: {
    display: 'flex',
    flexDirection: ['column', 'row'],
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '40px',
    // marginLeft: ['5%', '0'],
    marginTop: '65px',
    flexWrap: ['wrap', 'wrap', 'wrap', 'wrap', 'nowrap'],
  },
  heading: {
    paddingTop: '10rem',
    // mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
};
