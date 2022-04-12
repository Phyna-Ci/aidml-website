import * as React from 'react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import KeyFeature from '../sections/key-feature';

const Solutions = () => (
  <React.Fragment>
    <SEO
      title="AIDML Solutions"
      description="AI Data Management Limited: Technology for an Evolving World!"
    />
    <Banner pageTitle={'Solutions'} breadCrumb={'Home / Solutions'} />
    <KeyFeature />
    <br />
    <br />
  </React.Fragment>
);

export default Solutions;