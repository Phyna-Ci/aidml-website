import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import SubscribeUs from 'sections/subscribe-us';
import KeyFeature from '../sections/key-feature';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Phyna Computers Inc."
          description="Phyna Computers Incorporated (PCI): Technology for an Evolving World!"
        />
        <Banner />
        <KeyFeature />
        <br />
        <br />
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
