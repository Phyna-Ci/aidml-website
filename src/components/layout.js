/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Flex} from 'theme-ui';
import React from 'react';
import {keyframes} from '@emotion/react'
import {useRouter} from 'next/router';
import Header from './header/header';
import Footer from './footer/footer';
import CustomModal from './modal';
import useModal from '../hooks/useModal';
import BackgroundVideo from 'assets/background.svg';

const fadeIn = keyframes({from: {opacity: 0}, to: {opacity: 1}})

export default function Layout({children}) {
  const router = useRouter();
  const modal = useModal();

  return (
    <Flex
      sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ...(router.pathname === '/' ? {
          backgroundImage: [
            // 'linear-gradient(140deg, #291EA2 0%, #AB6C84 60%)',
            `url(${BackgroundVideo})`
          ],
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        } : {}),
      }}
    >
      <Header/>
      <main
        sx={{
          variant: 'layout.main',
          animation: `${fadeIn} 1s backwards`,
        }}
      >
        {children}
      </main>
      <Footer/>
      <CustomModal
        modalIsOpen={modal.state.isOpen}
        closeModal={() => modal.dispatch({
          type: 'TOGGLE',
        })}
        afterOpenModal={() => console.log('modal open!')}
        subtitle={'Get in touch with us'}
      />
    </Flex>
  );
}
