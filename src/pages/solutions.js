import * as React from 'react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import SubscribeUs from 'sections/subscribe-us';
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
    <SubscribeUs />
  </React.Fragment>
);

export default Solutions;