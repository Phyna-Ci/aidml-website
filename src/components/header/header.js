/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import { useRouter } from 'next/router';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink, Link } from 'components/link';
import { Tab } from '@headlessui/react'
import { DrawerProvider } from 'contexts/drawer/drawer-provider';
import NavbarDrawer from './navbar-drawer';
import menuItems from './header.data';

export default function Header() {
  const router = useRouter();
  const [stat, setStat] = React.useState(0);
  return (
    <DrawerProvider>
      <Box sx={styles.headerWrapper}>
        <Sticky onStateChange={(status) => {
          setStat(status.status)
        }} enabled={true} top={0} activeClass="is-sticky" innerZ={100}>
          <Box as="header" sx={styles.header}>
            <Container>
              <Box sx={styles.headerInner}>
                <Logo isSticky={stat} sx={styles.logo} />
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <div />
                </Box>
                <Button variant="text" sx={styles.getStartedMobile}>
                  <NavLink path="contact-us" label="Contact Us" />
                </Button>
                <NavbarDrawer isSticky={stat} />
              </Box>
            </Container>
            <Container>
              <Box sx={styles.headerInner}>
                <div />
                <Box as="nav" sx={styles.navbar} className="navbar">
                  <Tab.Group>
                    <Tab.List as="ul" sx={styles.navList}>
                      {menuItems.map(({ path, label, external }, i) => (
                        <Tab as={React.Fragment} key={`${path}${i}`}>
                          <li>
                            <Link
                              className={`nav-item ${router.pathname === path ? 'active': ''}`}
                              path={path}
                              label={label}
                              external={external}
                            />
                          </li>
                        </Tab>
                      ))}
                    </Tab.List>
                  </Tab.Group>
                  <div />
                </Box>
                <Button sx={styles.getStartedDesktop}>
                  <NavLink path="contact-us" label="Contact Us" />
                </Button>
                
              </Box>
            </Container>
          </Box>
        </Sticky>
      </Box>
    </DrawerProvider>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    '.is-sticky': {
      header: {
        backgroundColor: 'white',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        paddingTop: '15px',
        paddingBottom: '15px',
        'a': {
          color: 'primary'
        }
      },
    },
  },
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    background: 'transparent',
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-mobile-menu': {
      backgroundColor: 'white',
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, 12],
  },
  navbar: {
    display: ['none', null, null, null, 'flex'],
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    flexGrow: 1,
    p: 0,
    'li:last-child': {
      // ml: ['auto'],
    },
    '.nav-item': {
      color: '#FFFFFF',
      cursor: 'pointer',
      fontWeight: 400,
      padding: '.5rem 0',
      margin: [0, 0, 0, 0, '0 20px'],
    },
    '.active': {
      borderBottom: '3px solid #FFCC29',
    },
  },
  getStartedDesktop: {
    color: '#FFFFFF',
    background: 'transparent',
    display: ['none', 'none', 'none', 'none', 'flex'],
  },
  getStartedMobile: {
    color: '#FFFFFF',
    fontSize: [1],
    minHeight: 30,
    m: ['0 15px 0 auto'],
    padding: '0 11px',
    display: ['flex', null, null, null, 'none'],
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    path: {
      stroke: 'text',
    },
  },
};
