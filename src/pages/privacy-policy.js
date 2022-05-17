import * as React from 'react';
import {
  Box, Container, Grid,
  Heading, Text,
} from 'theme-ui';
import Lottie from 'lottie-react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import piggyBankAnimationData from 'assets/animations/piggy-bank.json';

const About = () => (
  <React.Fragment>
    <SEO
      title="AIDML. Privacy Policy"
      description="AI Data Management Limited: Technology for an Evolving World!"
    />
    <Banner pageTitle={'Privacy Policy'} breadCrumb={'Home / Privacy Policy'} />
    <br />
    <br />
    <br />
    <Container sx={styles.container}>
      <Text sx={styles.text}>
        This privacy policy (this "Privacy Policy") explains how Phyna Nigeria Limited, ("Lugah," "we," "us," and "our) collects, uses, stores and disclose your personal information. We respect your privacy and as such we will take reasonable steps to protect your information.
      </Text>
      <Text sx={styles.text}>
        The provisions contained in this Privacy Policy supersede all previous notices and statements regarding our privacy practices with respect to our services.
      </Text>

      <Heading sx={styles.heading}>
        Application of this Privacy Policy
      </Heading>
      <Text sx={styles.text}>
        This Privacy Policy applies generally to the business of Phyna and serves to set out our approach to personal data, inclusive of personal data of our consumer users ("Users"). This Privacy Policy applies to systems, operations and processes of Lugah that involve the collection, use, storage, and disclosure etc. of personal information.
      </Text>
      <Text sx={styles.text}>
        This Privacy Policy applies to use of our websites, applications, other online services and/or any related services, sales, marketing, promotional or events, and social media activities (collectively, our "Services"). For our Users, this Privacy Policy is part of our (Hyperlink Terms and condition)
      </Text>
      <Text sx={styles.text}>
        This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device"). This Privacy Policy also applies to offline interactions with Lugah.
      </Text>
      <Text sx={styles.text}>
        By accessing or using our Services, you agree to this Privacy Policy. If you do not agree to this Policy, you are prohibited from accessing or using our services or giving us any of your personal information
      </Text>
      <ol sx={styles.list}>
        <li sx={styles.list}>
          <b style={styles.listText}>Information we collect and how we Collect it</b>
          <br />
          <br />
          <b style={styles.listText}>Information You Provide Us</b>
          <Text sx={styles.listText}>
            In general, you can visit <a href='https://aidml.com' target='_blank'>https://aidml.com</a> without telling us who you are or revealing any information about yourself.
            When you submit an inquiry to us via any means, register for a Lugah account, register to attend an (name event) event, interact with us on social media, partake in competitions and promotional activities, and volunteer information to us; we may collect personal information from you, which may include your name, email address, mobile phone number, banking information, image and other information that identifies you (collectively, "Personal Information"). By providing your Personal Information to us, you expressly agree to our collection, use, storage, and disclosure of such information as described in this Privacy Policy.
          </Text>
          <Text sx={styles.listText}>
            As a User, we will also ask you to create login information for your Lugah account, such as a username and password. When you provide your mobile phone number, we may ask for your consent to receive text messages relating to our Services on that number.
          </Text>
          <Text sx={styles.listText}>
            In general, we collect Personal Information you give us by filling in forms or by corresponding with us by phone, email, social media posts & messages, or otherwise.
          </Text>
          <b style={styles.listText}>Information About Your Transactions</b>
          <Text sx={styles.listText}>
            We collect Personal Information about your transactions with us and others.
          </Text>
          <b style={styles.listText}>Information from Third Parties</b>
          <Text sx={styles.listText}>
            We also collect Personal Information about you from other companies. For instance, we may receive Personal Information about you from a consumer reporting agency or we may collect Personal Information from your employer where your employer is providing a service to Lugah.
            <br />
            We may collect your Personal Information from a User where your Personal Information is filled in a Next-of-Kin form.
          </Text>
          <b style={styles.listText}>Information Automatically Collected</b>
          <Text sx={styles.listText}>
            We (or our service providers acting on our behalf) may collect information about your use of our Services. This information may include Personal Information as well as statistical information that does not identify you ("Analytics"). Some Analytics may be correlated with Personal Information. When Analytics are, directly or indirectly, associated or combined with Personal Information, such Analytics will be considered Personal Information for purposes of this Privacy Policy.
            <br />
            Information that we automatically collect in connection with your access or use of our Services may include:
          </Text>
          <Text sx={styles.listText}>
            Device Information: We may collect Device-specific information (such as hardware model, operating system version, unique Device identifiers, and mobile network Information, including your mobile phone number). We may associate your Device identifiers or mobile phone number with your Lugah account
          </Text>
          <Text sx={styles.listText}>
            Log Information: We may record or log information from your Devices, their software, and your activity accessing or using our Services. This information may include:
          </Text>
          <ul sx={styles.list}>
            <li style={styles.list}>The Device's Internet Protocol ("IP") address</li>
            <li style={styles.list}>Identification numbers associated with your Devices</li>
            <li style={styles.list}>Device event information, such as crashes, system activity, and hardware settings</li>
            <li style={styles.list}>Location preferences</li>
            <li style={styles.list}>Date and time stamps of transactions</li>
            <li style={styles.list}>System configuration information</li>
            <li style={styles.list}>Other interactions with our Services</li>
          </ul>
          <br />
          <b style={styles.listText}>Information Collected Through Cookies and Similar Technologies</b>
          <Text sx={styles.listText}>
            We use cookies to personalize our Services for you and to collect aggregate information about usage of our Services. A cookie is a text file or other local storage identifier provided by your browser or associated applications. We use cookies for record-keeping purposes and to enhance the quality of your use of our Services. The cookies assign random, unique numbers to your Devices to enable our systems to recognize your Devices and to allow us to see how you use our Services.
            <br />
            The cookies we use in connection with our Services include:
          </Text>
        </li>
      </ol>
    </Container>
    <br />
    <br />
  </React.Fragment>
);

export default About;

const styles = {
  container: {
    marginTop: [null, '150px'],
    gap: '10px',
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
    color: '#141C5C',
    margin: '2rem 0'
  },
  listText: {
    color: '#141C5C',
    margin: '1rem 0'
  },
  list: {
    color: '#141C5C',
  }
}