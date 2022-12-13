import * as React from 'react';
import {
  Container,
} from 'theme-ui';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import content from 'utils/tandcContent';
import markdownToHtml from 'utils/markdownToHTML';

const TermsAndConditions = (props) => {
  return (
    <React.Fragment>
      <SEO
        title="Lugah Entertainment Terms and Conditions"
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <Banner pageTitle={'Terms & Conditions'} breadCrumb={'Home / Lugah Ent / T & C'}/>
      <br/>
      <br/>
      <br/>
      <Container sx={styles.container}>
        <div className="custom-html-style"><p><strong><strong></strong></strong></p>
          <hr />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </Container>
      <br/>
      <br/>
    </React.Fragment>
  );
}

export default TermsAndConditions;

const styles = {
  container: {
    marginTop: [null, '150px'],
    gap: '10px',
    color: '#382933'
  },
  grid: {
    padding: '2rem 0',
    gridTemplateColumns: [
      '1fr',
      '1fr',
      null,
      null,
      'repeat(2, 1fr)',
    ],
    headingContainer: {
      padding: ['0 5rem'],
    }
  },
  heading: {
    fontSize: '18px',
    fontWeight: 600,
    color: '#000'
  },
  text: {
    color: '#000',
    margin: '2rem 0'
  },
  listText: {
    color: '#000',
    margin: '1rem 0'
  },
  list: {
    color: '#000',
  }
}

export async function getStaticProps() {
  const tandC = await markdownToHtml(content || '');

  return {
    props: {
      content: tandC,
    }
  }
}