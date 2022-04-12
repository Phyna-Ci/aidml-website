import * as React from 'react';
import SEO from 'components/seo';
import LandingBanner from 'components/landing/landing-banner';

export default function IndexPage() {
  return (
    <React.Fragment>
      <SEO
        title="AI Data Management Limited"
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <LandingBanner />
    </React.Fragment>
  );
}
