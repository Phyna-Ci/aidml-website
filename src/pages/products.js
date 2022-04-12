import * as React from 'react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import SubscribeUs from 'sections/subscribe-us';
import KeyFeature from '../sections/key-feature';

const Products = () => (
  <React.Fragment>
    <SEO
      title="AIDML Products"
      description="AI Data Management Limited: Technology for an Evolving World!"
    />
    <Banner pageTitle={'Products'} breadCrumb={'Home / Products'} />
    <KeyFeature />
    <br />
    <br />
    <SubscribeUs />
  </React.Fragment>
);

export default Products;