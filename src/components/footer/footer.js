/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx, Box, Text,
  Container, Heading, Input,
  Button,
} from 'theme-ui';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from 'components/logo';
import { Element } from 'react-scroll';
import Widget from './widget';
import { menuItems } from './footer.data';
import { rgba } from 'polished';
import { toast } from 'react-toastify';
import FooterStrip from './footer-strip';
import BackgroundVideo from 'assets/background.svg';
import useModal from '../../hooks/useModal';

const subscriptionURL = `${process.env.NEXT_PUBLIC_LUGAH_SCHEDULE_BASE_URL}/newsletter/subscribe`;

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();
  const modal = useModal();

  const subscribeToNewsLetter = async () => {
    setLoading(true);
    const id = toast.loading('Please wait...')
    const subscriptionRequest = {
      email,
      subscriptionActive: true,
    };
    const res = await fetch(subscriptionURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscriptionRequest),
    }).catch((e) => {
      toast.update(id, {
        render: e.message,
        type: 'error',
        isLoading: false,
        autoClose: 8000
      });
      setLoading(false);
    });
    if (res) {
      const data = await res.json();
      if (data.success) {
        toast.update(id, {
          render: `Success - ${data.message}`,
          type: 'success',
          isLoading: false,
          autoClose: 8000
        })
        setLoading(false);
      } else {
        toast.update(id, {
          render: `Error - ${data.message}`,
          type: 'error',
          isLoading: false,
          autoClose: 8000
        })
        setLoading(false);
      }
    }
  }
  return (
    <Box as="footer" sx={{
      ...styles.footer,
      ...(router.pathname !== '/' ? {
        backgroundImage: [
          // 'linear-gradient(140deg, #291EA2 0%, #AB6C84 60%)',
          `url(${BackgroundVideo})`
        ],
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      } : {

      }),
    }}>
      <Container>
        <Element name="contact-us">
          <Box sx={styles.footerTopInner}>
            <Box sx={styles.about}>
              <Box sx={styles.logo}>
                <Logo footer={true} />
              </Box>
              <Text as="p" sx={styles.copyright}>
                At AIDML, we design interactive Artificial Intelligence (AI) systems through our subsidiary company Ai-Data Management Ltd, that integrates sophisticated but intuitive machine learning techniques for Enterprise, Government and personalized user experience anywhere in the world.
              </Text>
            </Box>
            <Box sx={styles.links}>
              {menuItems.map(({ id, title, items }) => (
                <Widget key={id} title={title} items={items} />
              ))}
            </Box>
            <Box sx={styles.subscribe}>
              <Heading as="h4">Subscribe</Heading>
              <Text as="p" style={{ textAlign: 'left' }} sx={styles.copyright}>
                Subscribe to get more updates on AIDML and It products
              </Text>
              <Box sx={styles.inputBox}>
                <Input onChange={(event) => {
                  setEmail(event.target.value);
                }} style={{ color: '#FFF' }} />
                <Button disabled={loading} onClick={() => {
                 subscribeToNewsLetter()
                }}>
                 send
                </Button>
              </Box>
            </Box>
          </Box>
          <FooterStrip />
        </Element>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    pt: [8],
    pb: [8],
  },
  footerTopInner: {
    gap: [30, null, 50, '20px', 17, 50],
    justifyItems: 'center',
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: ['205px 1fr 1fr', null, '1fr 1fr', null, '205px 1fr 1fr'],
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2',
  },
  links: {
    display: ['flex'],
    width: '100%',
    // gridColumn: ['1/2', null, null, null, null, null],
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: [
      'flex-start',
      null,
      'flex-start',
      'flex-start',
      null,
      'center',
    ],
    mt: [4, null, null, 0, 0],
    a: {
      color: 'heading',
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#FFFFFF', 0.9),
    fontSize: ['14px'],
    mt: [3, null, null, null, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'left', 'left'],
  },
  subscribe: {
    marginTop: '.9rem',
    h4: {
      color: '#FFFFFF',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading',
    },
  },
  inputBox: {
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    'input': {
      borderRadius: 0,
      ':focus': {
        'button': {
        }
      }
    },
    'button': {
      borderRadius: 0,
      minHeight: '60px',
      background: '#00008E',
    }
  }
};
