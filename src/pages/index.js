import * as React from 'react';
import {jsx, Box, Container, Heading, Text } from 'theme-ui';
import SEO from 'components/seo';
import LandingBanner from 'components/landing/landing-banner';
import LoadableMedia from 'components/common/LoadableMedia';

export default function IndexPage() {
  const [isPlay, setIsPlay] = React.useState(false);

 const renderMainVideo = () => {
    const video = {
      title: 'Lugah Enterprise',
      thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80',
    };
    return (
      <div
        className="group bg-neutral-800 overflow-hidden border-4 border-white dark:border-neutral-900"
        title={video.title}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '15px',
          position: 'relative',
        }}
      >
        {isPlay ? (
          <iframe
            src={process.env.NEXT_PUBLIC_LUGAH_VIDEO_URL}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              height: '100%',
              width: '100%',
            }}
          ></iframe>
        ) : (
          <>
            <div
              onClick={() => setIsPlay(true)}
              className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            >
              <svg width="49" height="60" viewBox="0 0 49 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.1902 25.1554L8.61862 0.76965C5.56593 -1.21074 0.890839 0.711059 0.890839 5.6093V54.369C0.890839 58.7634 5.23505 61.4117 8.61862 59.2087L46.1902 34.8347C49.5417 32.6668 49.5524 27.3233 46.1902 25.1554V25.1554Z" fill="white"/>
              </svg>
            </div>
            <LoadableMedia
              style={{ borderRadius: '15px' }}
              containerClassName=""
              className="transform transition-transform group-hover:scale-105 duration-300 nc-will-change-transform"
              src={video.thumbnail}
              title={video.title}
              alt={video.title}
            />
          </>
        )}
      </div>
    );
  };

  return (
    <React.Fragment>
      <SEO
        title="AI Data Management Limited"
        description="AI Data Management Limited: Technology for an Evolving World!"
      />
      <LandingBanner />
      <Box as="section" id="index" sx={styles.section}>
        <Box sx={styles.section.contentWrapper}>
          <Heading as="h3">
            More than just a solution.
          </Heading>
          <span>
            An Industry 
          </span>
          <Box as="span" sx={styles.highlight}>Game Changer.</Box>
        </Box>
        <Box as="div" sx={styles.videoPillContainer}>
          <Box as="div" sx={styles.videoPillContent}>
            <Box as="div" sx={styles.left}>
              <Heading as="h4">
                Revolutionizing industries with the power of AI
              </Heading>
              <Text as="p">
                “Africa is losing ground in the AI race expected to add trillions of dollars to the global economy over the next decade”
              </Text>
              <Box as="div" sx={styles.left.illustration}>
                <svg width="78" height="26" viewBox="0 0 78 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.6758 15.3242C13.5117 15.6445 13.3203 15.9492 13.1016 16.2383C12.8906 16.5195 12.668 16.7812 12.4336 17.0234C12.1992 17.2578 11.9648 17.4766 11.7305 17.6797C11.4961 17.875 11.2812 18.0469 11.0859 18.1953V19.543C11.0859 20.5664 11.0039 21.4766 10.8398 22.2734C10.6836 23.0703 10.4531 23.7461 10.1484 24.3008C9.85156 24.8555 9.49219 25.2773 9.07031 25.5664C8.65625 25.8555 8.19141 26 7.67578 26C7.39453 26 7.13672 25.9414 6.90234 25.8242C6.66797 25.7148 6.46484 25.5625 6.29297 25.3672C6.12891 25.1719 6 24.9414 5.90625 24.6758C5.8125 24.418 5.76562 24.1406 5.76562 23.8438C5.76562 23.2734 5.85938 22.7461 6.04688 22.2617C6.24219 21.7852 6.50391 21.332 6.83203 20.9023C7.16016 20.4805 7.53906 20.0781 7.96875 19.6953C8.39844 19.3047 8.85547 18.918 9.33984 18.5352C9.34766 18.1055 9.35938 17.6797 9.375 17.2578C9.39844 16.8359 9.41797 16.4375 9.43359 16.0625C9.45703 15.6875 9.47656 15.3477 9.49219 15.043C9.51562 14.7383 9.53516 14.4883 9.55078 14.293C9.28516 14.832 8.98438 15.3633 8.64844 15.8867C8.32031 16.4023 7.96875 16.8945 7.59375 17.3633C7.21875 17.832 6.82422 18.2656 6.41016 18.6641C6.00391 19.0547 5.59375 19.3945 5.17969 19.6836C4.76562 19.9727 4.35156 20.1953 3.9375 20.3516C3.53125 20.5156 3.14062 20.5977 2.76562 20.5977C2.34375 20.5977 1.94141 20.5117 1.55859 20.3398C1.18359 20.1758 0.851562 19.9141 0.5625 19.5547C0.28125 19.1953 0.0585938 18.7344 -0.105469 18.1719C-0.277344 17.6094 -0.363281 16.9375 -0.363281 16.1562C-0.363281 15.2812 -0.265625 14.3828 -0.0703125 13.4609C0.125 12.5391 0.394531 11.625 0.738281 10.7188C1.08203 9.8125 1.49219 8.92578 1.96875 8.05859C2.44531 7.19141 2.96484 6.375 3.52734 5.60938C4.08984 4.83594 4.6875 4.12891 5.32031 3.48828C5.95312 2.83984 6.59766 2.28125 7.25391 1.8125C7.91016 1.34375 8.56641 0.980469 9.22266 0.722656C9.88672 0.457031 10.5312 0.324219 11.1562 0.324219C11.8125 0.324219 12.3359 0.492187 12.7266 0.828125C13.125 1.15625 13.3242 1.625 13.3242 2.23438C13.3242 2.5625 13.2539 2.88281 13.1133 3.19531C12.9805 3.5 12.7969 3.79688 12.5625 4.08594C12.3359 4.36719 12.0781 4.63672 11.7891 4.89453C11.5 5.14453 11.2031 5.375 10.8984 5.58594C10.6016 5.79688 10.3047 5.98438 10.0078 6.14844C9.71875 6.3125 9.46094 6.44922 9.23438 6.55859L8.88281 6.07812C9.17969 5.92969 9.50391 5.71875 9.85547 5.44531C10.207 5.17188 10.5352 4.86328 10.8398 4.51953C11.1445 4.17578 11.3984 3.80469 11.6016 3.40625C11.8047 3.00781 11.9062 2.60938 11.9062 2.21094C11.9062 1.875 11.8164 1.59766 11.6367 1.37891C11.4648 1.15234 11.1875 1.03906 10.8047 1.03906C10.2109 1.03906 9.57422 1.22266 8.89453 1.58984C8.22266 1.95703 7.55078 2.46875 6.87891 3.125C6.21484 3.78125 5.57812 4.56641 4.96875 5.48047C4.35938 6.38672 3.82031 7.38281 3.35156 8.46875C2.88281 9.55469 2.50781 10.707 2.22656 11.9258C1.94531 13.1445 1.80469 14.3945 1.80469 15.6758C1.80469 16.2383 1.84375 16.7422 1.92188 17.1875C2.00781 17.6328 2.125 18.0117 2.27344 18.3242C2.42969 18.6289 2.61719 18.8672 2.83594 19.0391C3.0625 19.2031 3.31641 19.2852 3.59766 19.2852C3.94141 19.2852 4.31641 19.1797 4.72266 18.9688C5.12891 18.7578 5.53516 18.4727 5.94141 18.1133C6.35547 17.7539 6.76172 17.3398 7.16016 16.8711C7.55859 16.3945 7.92578 15.8945 8.26172 15.3711C8.59766 14.8477 8.89062 14.3164 9.14062 13.7773C9.39062 13.2383 9.57422 12.7266 9.69141 12.2422C9.73828 11.6719 9.78516 11.1523 9.83203 10.6836C9.87891 10.207 9.92188 9.78906 9.96094 9.42969C10.0078 9.07031 10.0508 8.78125 10.0898 8.5625C10.1289 8.33594 10.1641 8.1875 10.1953 8.11719C10.2578 8 10.3477 7.88281 10.4648 7.76562C10.582 7.64844 10.707 7.54688 10.8398 7.46094C10.9805 7.36719 11.1172 7.29297 11.25 7.23828C11.3828 7.18359 11.4961 7.15625 11.5898 7.15625C11.7148 7.15625 11.7969 7.20703 11.8359 7.30859C11.8828 7.41016 11.9062 7.51953 11.9062 7.63672C11.9062 7.98047 11.8477 8.4375 11.7305 9.00781C11.6133 9.57812 11.4648 10.2422 11.2852 11C11.207 11.3281 11.1484 11.7617 11.1094 12.3008C11.0781 12.832 11.0547 13.4023 11.0391 14.0117C11.0312 14.6133 11.0273 15.2227 11.0273 15.8398C11.0273 16.4492 11.0234 16.9961 11.0156 17.4805C11.5938 17.0586 12.0547 16.625 12.3984 16.1797C12.75 15.7266 13.0156 15.3203 13.1953 14.9609L13.3242 14.7148L13.8047 15.0781L13.6758 15.3242ZM9.31641 19.4023C8.94922 19.6914 8.61328 19.9961 8.30859 20.3164C8.00391 20.6367 7.74219 20.9805 7.52344 21.3477C7.3125 21.7148 7.14453 22.1133 7.01953 22.543C6.90234 22.9805 6.84375 23.4531 6.84375 23.9609C6.84375 24.4453 6.92188 24.8047 7.07812 25.0391C7.23438 25.2812 7.43359 25.4023 7.67578 25.4023C7.91797 25.4023 8.13672 25.2969 8.33203 25.0859C8.53516 24.8828 8.70703 24.543 8.84766 24.0664C8.99609 23.5977 9.10938 22.9805 9.1875 22.2148C9.27344 21.4492 9.31641 20.5117 9.31641 19.4023ZM18.1406 17.457C18.1016 17.5195 18.043 17.6289 17.9648 17.7852C17.8945 17.9336 17.8008 18.1016 17.6836 18.2891C17.5742 18.4766 17.4414 18.6719 17.2852 18.875C17.1367 19.0781 16.9648 19.2617 16.7695 19.4258C16.5742 19.5898 16.3555 19.7266 16.1133 19.8359C15.8789 19.9453 15.6172 20 15.3281 20C15.1016 20 14.8672 19.9531 14.625 19.8594C14.3828 19.7656 14.1562 19.5938 13.9453 19.3438C13.7422 19.0938 13.5742 18.7539 13.4414 18.3242C13.3086 17.8867 13.2422 17.3242 13.2422 16.6367C13.2422 15.9805 13.2656 15.3242 13.3125 14.668C13.3594 14.0039 13.4141 13.3984 13.4766 12.8516C13.5469 12.3047 13.6133 11.8477 13.6758 11.4805C13.7383 11.1133 13.7852 10.8906 13.8164 10.8125C13.8477 10.7422 13.9102 10.6797 14.0039 10.625C14.0977 10.5703 14.2031 10.5273 14.3203 10.4961C14.4453 10.4648 14.5703 10.4414 14.6953 10.4258C14.8281 10.4102 14.9414 10.4023 15.0352 10.4023C15.1602 10.4023 15.2578 10.4336 15.3281 10.4961C15.4062 10.5586 15.4453 10.6641 15.4453 10.8125C15.4453 10.8828 15.4297 11.0234 15.3984 11.2344C15.375 11.4375 15.3438 11.6875 15.3047 11.9844C15.2656 12.2812 15.2227 12.6094 15.1758 12.9688C15.1367 13.3281 15.0977 13.6953 15.0586 14.0703C15.0195 14.4375 14.9844 14.8047 14.9531 15.1719C14.9297 15.5312 14.918 15.8594 14.918 16.1562C14.918 17.0078 15.0078 17.6406 15.1875 18.0547C15.375 18.4688 15.6797 18.6758 16.1016 18.6758C16.4609 18.6758 16.8242 18.4141 17.1914 17.8906C17.5664 17.3672 17.8906 16.6055 18.1641 15.6055C18.2031 15.1836 18.2383 14.7344 18.2695 14.2578C18.3086 13.7734 18.3438 13.3164 18.375 12.8867C18.4062 12.4492 18.4336 12.0586 18.457 11.7148C18.4883 11.3711 18.5156 11.125 18.5391 10.9766C18.5625 10.8672 18.625 10.7773 18.7266 10.707C18.8281 10.6289 18.9414 10.5703 19.0664 10.5312C19.1992 10.4844 19.3242 10.4531 19.4414 10.4375C19.5664 10.4141 19.6602 10.4023 19.7227 10.4023C19.8555 10.4023 19.9453 10.4336 19.9922 10.4961C20.0469 10.5508 20.0742 10.6406 20.0742 10.7656C20.0742 10.875 20.0625 11.0859 20.0391 11.3984C20.0234 11.7031 20 12.0625 19.9688 12.4766C19.9453 12.8828 19.918 13.3203 19.8867 13.7891C19.8555 14.2578 19.8242 14.7109 19.793 15.1484C19.7695 15.5781 19.7461 15.9688 19.7227 16.3203C19.707 16.6719 19.6992 16.9375 19.6992 17.1172C19.6992 17.6484 19.7266 18.0664 19.7812 18.3711C19.8438 18.6758 19.9766 18.8281 20.1797 18.8281C20.3281 18.8281 20.4883 18.7344 20.6602 18.5469C20.8398 18.3516 21.0312 18.082 21.2344 17.7383C21.4453 17.3945 21.6719 16.9883 21.9141 16.5195C22.1562 16.043 22.418 15.5234 22.6992 14.9609L22.8164 14.7148L23.2969 15.0781L23.1797 15.3242C22.8047 16.0664 22.4727 16.7305 22.1836 17.3164C21.9023 17.8945 21.6328 18.3828 21.375 18.7812C21.1172 19.1797 20.8555 19.4844 20.5898 19.6953C20.3242 19.8984 20.0273 20 19.6992 20C19.3945 20 19.1406 19.9414 18.9375 19.8242C18.7422 19.707 18.5859 19.5391 18.4688 19.3203C18.3516 19.1016 18.2656 18.8359 18.2109 18.5234C18.1641 18.2109 18.1406 17.8555 18.1406 17.457ZM29.9297 17.0938C29.9297 17.5391 29.9688 17.9141 30.0469 18.2188C30.125 18.5234 30.2617 18.6758 30.457 18.6758C30.5742 18.6758 30.6992 18.6211 30.832 18.5117C30.9727 18.3945 31.1328 18.207 31.3125 17.9492C31.4922 17.6914 31.6953 17.3594 31.9219 16.9531C32.1562 16.5391 32.4219 16.0352 32.7188 15.4414L33.0703 14.7148L33.5508 15.0781L33.1992 15.8047C32.8711 16.4609 32.5625 17.0508 32.2734 17.5742C31.9922 18.0898 31.7227 18.5273 31.4648 18.8867C31.207 19.2461 30.9531 19.5234 30.7031 19.7188C30.4609 19.9062 30.2188 20 29.9766 20C29.7188 20 29.5 19.9297 29.3203 19.7891C29.1484 19.6484 29.0039 19.457 28.8867 19.2148C28.7695 18.9648 28.6797 18.6797 28.6172 18.3594C28.5547 18.0312 28.5117 17.6836 28.4883 17.3164C28.3008 17.6914 28.0938 18.043 27.8672 18.3711C27.6406 18.6914 27.4023 18.9727 27.1523 19.2148C26.9102 19.457 26.6562 19.6484 26.3906 19.7891C26.125 19.9297 25.8594 20 25.5938 20C25.2031 20 24.8242 19.918 24.457 19.7539C24.0898 19.5898 23.7617 19.3398 23.4727 19.0039C23.1914 18.668 22.9648 18.2461 22.793 17.7383C22.6211 17.2227 22.5352 16.6172 22.5352 15.9219C22.5352 15.1094 22.6406 14.3672 22.8516 13.6953C23.0625 13.0156 23.3477 12.4336 23.707 11.9492C24.0664 11.457 24.4805 11.0781 24.9492 10.8125C25.418 10.5391 25.9102 10.4023 26.4258 10.4023C26.7383 10.4023 27.0273 10.4727 27.293 10.6133C27.5586 10.7539 27.7891 10.9258 27.9844 11.1289C28.1875 11.3242 28.3555 11.5352 28.4883 11.7617C28.6211 11.9805 28.7109 12.168 28.7578 12.3242L28.8984 11.1875C28.9141 11.0391 28.9844 10.9141 29.1094 10.8125C29.2422 10.7109 29.3867 10.6328 29.543 10.5781C29.6992 10.5156 29.8516 10.4727 30 10.4492C30.1484 10.418 30.2539 10.4023 30.3164 10.4023C30.4102 10.4023 30.4727 10.418 30.5039 10.4492C30.5352 10.4805 30.5508 10.543 30.5508 10.6367C30.5508 10.7539 30.5156 10.9922 30.4453 11.3516C30.3828 11.7031 30.3125 12.1562 30.2344 12.7109C30.1641 13.2578 30.0938 13.9023 30.0234 14.6445C29.9609 15.3867 29.9297 16.2031 29.9297 17.0938ZM28.6406 14C28.6406 13.6406 28.5859 13.2891 28.4766 12.9453C28.3672 12.5938 28.2188 12.2852 28.0312 12.0195C27.8438 11.7461 27.625 11.5273 27.375 11.3633C27.1328 11.1992 26.875 11.1172 26.6016 11.1172C26.2656 11.1172 25.9492 11.2148 25.6523 11.4102C25.3633 11.5977 25.1094 11.8672 24.8906 12.2188C24.6797 12.5625 24.5117 12.9805 24.3867 13.4727C24.2617 13.957 24.1992 14.4922 24.1992 15.0781C24.1992 16.25 24.3828 17.1445 24.75 17.7617C25.1172 18.3711 25.6055 18.6758 26.2148 18.6758C26.4805 18.6758 26.7539 18.5703 27.0352 18.3594C27.3242 18.1406 27.5859 17.832 27.8203 17.4336C28.0625 17.0273 28.2578 16.5352 28.4062 15.957C28.5625 15.3789 28.6406 14.7266 28.6406 14ZM32.9531 14.9609L33.0703 14.7148C33.1875 14.4805 33.293 14.2383 33.3867 13.9883C33.4883 13.7383 33.5742 13.5039 33.6445 13.2852C33.7148 13.0586 33.7695 12.8594 33.8086 12.6875C33.8477 12.5078 33.875 12.3711 33.8906 12.2773C33.6875 12.2539 33.4922 12.2031 33.3047 12.125C33.1172 12.0469 32.9531 11.9414 32.8125 11.8086C32.6719 11.6758 32.5625 11.5195 32.4844 11.3398C32.3984 11.1602 32.3555 10.957 32.3555 10.7305C32.3555 10.5508 32.3867 10.3906 32.4492 10.25C32.5117 10.1094 32.5977 9.99219 32.707 9.89844C32.8086 9.80469 32.9258 9.73438 33.0586 9.6875C33.1836 9.63281 33.3164 9.60547 33.457 9.60547C33.6445 9.60547 33.8086 9.64453 33.9492 9.72266C34.0898 9.80078 34.207 9.90625 34.3008 10.0391C34.3945 10.1641 34.4648 10.3125 34.5117 10.4844C34.5586 10.6484 34.582 10.8203 34.582 11C34.8008 11 35.0352 10.9688 35.2852 10.9062C35.543 10.8438 35.8008 10.7773 36.0586 10.707C36.3164 10.6289 36.5703 10.5586 36.8203 10.4961C37.0703 10.4336 37.3008 10.4023 37.5117 10.4023C37.6914 10.4023 37.8359 10.4414 37.9453 10.5195C38.0547 10.5898 38.1094 10.7109 38.1094 10.8828C38.1094 11.0078 38.0703 11.2148 37.9922 11.5039C37.9219 11.793 37.832 12.1289 37.7227 12.5117C37.6133 12.8945 37.4922 13.3125 37.3594 13.7656C37.2344 14.2109 37.1172 14.6641 37.0078 15.125C36.8984 15.5781 36.8047 16.0195 36.7266 16.4492C36.6562 16.8789 36.6211 17.2617 36.6211 17.5977C36.6211 18.0195 36.668 18.3047 36.7617 18.4531C36.8555 18.6016 37.0234 18.6758 37.2656 18.6758C37.3672 18.6758 37.4922 18.6328 37.6406 18.5469C37.7969 18.4531 37.9844 18.2773 38.2031 18.0195C38.4219 17.7539 38.6797 17.3789 38.9766 16.8945C39.2812 16.4023 39.6328 15.7578 40.0312 14.9609L40.1484 14.7148L40.6289 15.0781L40.5117 15.3242C40.043 16.2617 39.625 17.0312 39.2578 17.6328C38.8906 18.2344 38.5508 18.7109 38.2383 19.0625C37.9336 19.4141 37.6445 19.6602 37.3711 19.8008C37.0977 19.9336 36.8242 20 36.5508 20C36.0898 20 35.7148 19.8242 35.4258 19.4727C35.1367 19.1211 34.9922 18.5781 34.9922 17.8438C34.9922 17.4453 35.0469 17.0312 35.1562 16.6016C35.2656 16.1719 35.4023 15.7461 35.5664 15.3242C35.7305 14.8945 35.9141 14.4727 36.1172 14.0586C36.3203 13.6445 36.5117 13.2539 36.6914 12.8867C36.8789 12.5117 37.0469 12.1641 37.1953 11.8438C37.3438 11.5234 37.4492 11.2422 37.5117 11L37.4414 10.9297C37.3164 10.9297 37.1484 10.9961 36.9375 11.1289C36.7266 11.2617 36.4883 11.4141 36.2227 11.5859C35.9648 11.75 35.6875 11.9062 35.3906 12.0547C35.0938 12.2031 34.793 12.293 34.4883 12.3242C34.4727 12.4336 34.4375 12.5938 34.3828 12.8047C34.3359 13.0156 34.2695 13.25 34.1836 13.5078C34.0977 13.7656 34 14.0312 33.8906 14.3047C33.7812 14.5781 33.668 14.8359 33.5508 15.0781L33.4336 15.3242L32.9531 14.9609ZM33.5273 10.2617C33.457 10.2617 33.3984 10.2852 33.3516 10.332C33.3047 10.3789 33.2812 10.4336 33.2812 10.4961C33.2812 10.5898 33.3047 10.6719 33.3516 10.7422C33.3984 10.8047 33.457 10.8594 33.5273 10.9062C33.5977 10.9453 33.668 10.9766 33.7383 11C33.8164 11.0156 33.8828 11.0234 33.9375 11.0234C33.9375 10.8047 33.9023 10.625 33.832 10.4844C33.7617 10.3359 33.6602 10.2617 33.5273 10.2617ZM42.5273 20C42.0508 20 41.6367 19.8984 41.2852 19.6953C40.9414 19.4922 40.6562 19.2188 40.4297 18.875C40.2031 18.5234 40.0352 18.1211 39.9258 17.668C39.8164 17.2148 39.7617 16.7344 39.7617 16.2266C39.7617 15.7812 39.8047 15.3281 39.8906 14.8672C39.9766 14.4062 40.0977 13.9609 40.2539 13.5312C40.418 13.0938 40.6211 12.6875 40.8633 12.3125C41.1055 11.9297 41.3828 11.5977 41.6953 11.3164C42.0078 11.0352 42.3555 10.8125 42.7383 10.6484C43.1289 10.4844 43.5469 10.4023 43.9922 10.4023C44.5 10.4023 44.9297 10.5156 45.2812 10.7422C45.6406 10.9688 45.9297 11.2461 46.1484 11.5742C46.1562 10.0977 46.2305 8.79297 46.3711 7.66016C46.5117 6.52734 46.707 5.57812 46.957 4.8125C47.2148 4.04688 47.5195 3.46875 47.8711 3.07812C48.2227 2.67969 48.6094 2.48047 49.0312 2.48047C49.1797 2.48047 49.3125 2.5 49.4297 2.53906C49.5547 2.57031 49.6562 2.63281 49.7344 2.72656C49.8203 2.82031 49.8828 2.94922 49.9219 3.11328C49.9688 3.26953 49.9922 3.47266 49.9922 3.72266C49.9922 4.23828 49.9414 4.83203 49.8398 5.50391C49.7383 6.16797 49.5938 6.89453 49.4062 7.68359C49.2188 8.46484 48.9883 9.30078 48.7148 10.1914C48.4492 11.0742 48.1523 11.9922 47.8242 12.9453C47.832 13.7812 47.8438 14.5039 47.8594 15.1133C47.875 15.7227 47.8945 16.2383 47.918 16.6602C47.9492 17.082 47.9844 17.4258 48.0234 17.6914C48.0703 17.957 48.1211 18.1641 48.1758 18.3125C48.2383 18.4531 48.3086 18.5508 48.3867 18.6055C48.4727 18.6523 48.5664 18.6758 48.668 18.6758C48.8477 18.6758 49.0273 18.5977 49.207 18.4414C49.3945 18.2773 49.5938 18.0391 49.8047 17.7266C50.0156 17.4062 50.2422 17.0156 50.4844 16.5547C50.7344 16.0938 51.0078 15.5625 51.3047 14.9609L51.4336 14.7148L51.9141 15.0781L51.7852 15.3242C51.332 16.2383 50.9336 16.9961 50.5898 17.5977C50.2461 18.1914 49.9297 18.668 49.6406 19.0273C49.3594 19.3867 49.0898 19.6406 48.832 19.7891C48.5742 19.9297 48.3047 20 48.0234 20C47.75 20 47.5117 19.9336 47.3086 19.8008C47.1133 19.6602 46.9453 19.4453 46.8047 19.1562C46.6641 18.8594 46.5508 18.4844 46.4648 18.0312C46.3789 17.5703 46.3125 17.0195 46.2656 16.3789C45.9922 16.9258 45.7109 17.4219 45.4219 17.8672C45.1328 18.3125 44.832 18.6953 44.5195 19.0156C44.2148 19.3281 43.8945 19.5703 43.5586 19.7422C43.2227 19.9141 42.8789 20 42.5273 20ZM44.2266 11C43.7969 11 43.4219 11.1328 43.1016 11.3984C42.7812 11.6562 42.5156 11.9961 42.3047 12.418C42.0938 12.832 41.9375 13.3008 41.8359 13.8242C41.7344 14.3477 41.6836 14.8711 41.6836 15.3945C41.6836 15.8242 41.7148 16.2383 41.7773 16.6367C41.8477 17.0273 41.9492 17.375 42.082 17.6797C42.2227 17.9844 42.3906 18.2266 42.5859 18.4062C42.7812 18.5859 43.0078 18.6758 43.2656 18.6758C43.5156 18.6758 43.7578 18.6133 43.9922 18.4883C44.2344 18.3633 44.4727 18.1641 44.707 17.8906C44.9414 17.6094 45.1797 17.25 45.4219 16.8125C45.6641 16.3672 45.9219 15.8281 46.1953 15.1953C46.1797 14.8203 46.168 14.4219 46.1602 14C46.1523 13.5703 46.1484 13.1133 46.1484 12.6289C45.9766 12.1211 45.7148 11.7227 45.3633 11.4336C45.0195 11.1445 44.6406 11 44.2266 11ZM49.1484 4.15625C49.1484 3.79688 49.1055 3.54688 49.0195 3.40625C48.9414 3.26562 48.8477 3.19531 48.7383 3.19531C48.5508 3.19531 48.3984 3.37891 48.2812 3.74609C48.1641 4.10547 48.0703 4.59375 48 5.21094C47.9375 5.82812 47.8906 6.54297 47.8594 7.35547C47.8359 8.16797 47.8242 9.02344 47.8242 9.92188V11.2109C48.0664 10.4219 48.2734 9.71094 48.4453 9.07812C48.6172 8.44531 48.7539 7.85547 48.8555 7.30859C48.957 6.76172 49.0312 6.23438 49.0781 5.72656C49.125 5.21875 49.1484 4.69531 49.1484 4.15625ZM52.043 14.8438L51.9258 15.0781L51.8086 15.3242L51.3281 14.9609L51.4453 14.7148C51.6406 14.3164 51.8008 13.918 51.9258 13.5195C52.0586 13.1133 52.1641 12.7344 52.2422 12.3828C52.3281 12.0312 52.3984 11.7227 52.4531 11.457C52.5078 11.1914 52.5625 11 52.6172 10.8828C52.6641 10.7891 52.7305 10.7148 52.8164 10.6602C52.9102 10.5977 53.0039 10.5469 53.0977 10.5078C53.1992 10.4688 53.293 10.4414 53.3789 10.4258C53.4727 10.4102 53.5391 10.4023 53.5781 10.4023C53.75 10.4023 53.8633 10.4375 53.918 10.5078C53.9805 10.5781 54.0117 10.7031 54.0117 10.8828C54.0117 10.9688 53.9922 11.1836 53.9531 11.5273C53.9219 11.8633 53.8828 12.2891 53.8359 12.8047C53.7969 13.3125 53.7578 13.8867 53.7188 14.5273C53.6875 15.1602 53.6719 15.8164 53.6719 16.4961C53.6719 16.9883 53.6953 17.3789 53.7422 17.668C53.7891 17.9492 53.8477 18.1602 53.918 18.3008C53.9961 18.4414 54.0781 18.5312 54.1641 18.5703C54.2578 18.6094 54.3516 18.6289 54.4453 18.6289C54.5703 18.6289 54.7109 18.5742 54.8672 18.4648C55.0234 18.3555 55.207 18.1641 55.418 17.8906C55.6289 17.6094 55.8711 17.2344 56.1445 16.7656C56.418 16.2891 56.7383 15.6875 57.1055 14.9609L57.2344 14.7148L57.7148 15.0781L57.5859 15.3242C57.2891 15.9023 56.9922 16.4727 56.6953 17.0352C56.4062 17.5977 56.1094 18.0977 55.8047 18.5352C55.5078 18.9727 55.207 19.3281 54.9023 19.6016C54.5977 19.8672 54.293 20 53.9883 20C53.668 20 53.3906 19.9375 53.1562 19.8125C52.9297 19.6797 52.7383 19.4648 52.582 19.168C52.4336 18.8711 52.3203 18.4805 52.2422 17.9961C52.1719 17.5039 52.1367 16.8984 52.1367 16.1797C52.1367 15.9766 52.1367 15.7656 52.1367 15.5469C52.1367 15.3203 52.1445 15.0859 52.1602 14.8438H52.043ZM54.4453 8C54.4453 8.27344 54.3516 8.50391 54.1641 8.69141C53.9844 8.87109 53.7578 8.96094 53.4844 8.96094C53.2188 8.96094 52.9922 8.87109 52.8047 8.69141C52.6172 8.50391 52.5234 8.27344 52.5234 8C52.5234 7.73438 52.6172 7.50781 52.8047 7.32031C52.9922 7.13281 53.2188 7.03906 53.4844 7.03906C53.7578 7.03906 53.9844 7.13281 54.1641 7.32031C54.3516 7.50781 54.4453 7.73438 54.4453 8ZM64.3359 17.0938C64.3359 17.5391 64.375 17.9141 64.4531 18.2188C64.5312 18.5234 64.668 18.6758 64.8633 18.6758C64.9805 18.6758 65.1055 18.6211 65.2383 18.5117C65.3789 18.3945 65.5391 18.207 65.7188 17.9492C65.8984 17.6914 66.1016 17.3594 66.3281 16.9531C66.5625 16.5391 66.8281 16.0352 67.125 15.4414L67.4766 14.7148L67.957 15.0781L67.6055 15.8047C67.2773 16.4609 66.9688 17.0508 66.6797 17.5742C66.3984 18.0898 66.1289 18.5273 65.8711 18.8867C65.6133 19.2461 65.3594 19.5234 65.1094 19.7188C64.8672 19.9062 64.625 20 64.3828 20C64.125 20 63.9062 19.9297 63.7266 19.7891C63.5547 19.6484 63.4102 19.457 63.293 19.2148C63.1758 18.9648 63.0859 18.6797 63.0234 18.3594C62.9609 18.0312 62.918 17.6836 62.8945 17.3164C62.707 17.6914 62.5 18.043 62.2734 18.3711C62.0469 18.6914 61.8086 18.9727 61.5586 19.2148C61.3164 19.457 61.0625 19.6484 60.7969 19.7891C60.5312 19.9297 60.2656 20 60 20C59.6094 20 59.2305 19.918 58.8633 19.7539C58.4961 19.5898 58.168 19.3398 57.8789 19.0039C57.5977 18.668 57.3711 18.2461 57.1992 17.7383C57.0273 17.2227 56.9414 16.6172 56.9414 15.9219C56.9414 15.1094 57.0469 14.3672 57.2578 13.6953C57.4688 13.0156 57.7539 12.4336 58.1133 11.9492C58.4727 11.457 58.8867 11.0781 59.3555 10.8125C59.8242 10.5391 60.3164 10.4023 60.832 10.4023C61.1445 10.4023 61.4336 10.4727 61.6992 10.6133C61.9648 10.7539 62.1953 10.9258 62.3906 11.1289C62.5938 11.3242 62.7617 11.5352 62.8945 11.7617C63.0273 11.9805 63.1172 12.168 63.1641 12.3242L63.3047 11.1875C63.3203 11.0391 63.3906 10.9141 63.5156 10.8125C63.6484 10.7109 63.793 10.6328 63.9492 10.5781C64.1055 10.5156 64.2578 10.4727 64.4062 10.4492C64.5547 10.418 64.6602 10.4023 64.7227 10.4023C64.8164 10.4023 64.8789 10.418 64.9102 10.4492C64.9414 10.4805 64.957 10.543 64.957 10.6367C64.957 10.7539 64.9219 10.9922 64.8516 11.3516C64.7891 11.7031 64.7188 12.1562 64.6406 12.7109C64.5703 13.2578 64.5 13.9023 64.4297 14.6445C64.3672 15.3867 64.3359 16.2031 64.3359 17.0938ZM63.0469 14C63.0469 13.6406 62.9922 13.2891 62.8828 12.9453C62.7734 12.5938 62.625 12.2852 62.4375 12.0195C62.25 11.7461 62.0312 11.5273 61.7812 11.3633C61.5391 11.1992 61.2812 11.1172 61.0078 11.1172C60.6719 11.1172 60.3555 11.2148 60.0586 11.4102C59.7695 11.5977 59.5156 11.8672 59.2969 12.2188C59.0859 12.5625 58.918 12.9805 58.793 13.4727C58.668 13.957 58.6055 14.4922 58.6055 15.0781C58.6055 16.25 58.7891 17.1445 59.1562 17.7617C59.5234 18.3711 60.0117 18.6758 60.6211 18.6758C60.8867 18.6758 61.1602 18.5703 61.4414 18.3594C61.7305 18.1406 61.9922 17.832 62.2266 17.4336C62.4688 17.0273 62.6641 16.5352 62.8125 15.957C62.9688 15.3789 63.0469 14.7266 63.0469 14ZM71.9883 11.2109C71.7695 11.2109 71.5234 11.3086 71.25 11.5039C70.9844 11.6992 70.7148 11.9531 70.4414 12.2656C70.168 12.5703 69.9023 12.9141 69.6445 13.2969C69.3945 13.6797 69.1758 14.0586 68.9883 14.4336C68.9648 15.1211 68.9414 15.8711 68.918 16.6836C68.9023 17.4961 68.8945 18.3633 68.8945 19.2852C68.8945 19.4023 68.8398 19.5078 68.7305 19.6016C68.6289 19.6875 68.5078 19.7617 68.3672 19.8242C68.2266 19.8789 68.082 19.9219 67.9336 19.9531C67.7852 19.9844 67.6641 20 67.5703 20C67.4531 20 67.3438 19.9648 67.2422 19.8945C67.1406 19.8242 67.0898 19.668 67.0898 19.4258C67.0898 19.3086 67.1016 19.1641 67.125 18.9922C67.1484 18.8125 67.1797 18.6211 67.2188 18.418C67.25 18.2148 67.2891 18.0078 67.3359 17.7969C67.375 17.5781 67.4141 17.375 67.4531 17.1875V11.457C67.4531 11.3008 67.457 11.1797 67.4648 11.0938C67.4648 11 67.4766 10.9297 67.5 10.8828C67.5469 10.7734 67.6289 10.6875 67.7461 10.625C67.8633 10.5625 67.9883 10.5156 68.1211 10.4844C68.2539 10.4453 68.3828 10.4219 68.5078 10.4141C68.6328 10.4062 68.7305 10.4023 68.8008 10.4023C68.9336 10.4023 69.0234 10.4375 69.0703 10.5078C69.125 10.5781 69.1523 10.7031 69.1523 10.8828C69.1523 10.8594 69.1328 11.0508 69.0938 11.457C69.0625 11.8633 69.0352 12.4453 69.0117 13.2031C69.2461 12.8359 69.5 12.4844 69.7734 12.1484C70.0469 11.8125 70.332 11.5156 70.6289 11.2578C70.9258 11 71.2305 10.793 71.543 10.6367C71.8633 10.4805 72.1875 10.4023 72.5156 10.4023C73.1016 10.4023 73.5312 10.5898 73.8047 10.9648C74.0781 11.332 74.2148 11.832 74.2148 12.4648C74.2148 12.8633 74.1875 13.3086 74.1328 13.8008C74.0859 14.2852 74.0273 14.7812 73.957 15.2891C73.8945 15.7891 73.8359 16.2812 73.7812 16.7656C73.7344 17.2422 73.7109 17.6797 73.7109 18.0781C73.7109 18.5938 73.8711 18.8516 74.1914 18.8516C74.293 18.8516 74.4102 18.8008 74.543 18.6992C74.6836 18.5898 74.8555 18.3906 75.0586 18.1016C75.2695 17.8125 75.5195 17.418 75.8086 16.918C76.0977 16.4102 76.4414 15.7578 76.8398 14.9609L76.957 14.7148L77.4375 15.0781L77.3203 15.3242C76.8516 16.2617 76.4336 17.0312 76.0664 17.6328C75.707 18.2344 75.3789 18.7109 75.082 19.0625C74.7852 19.4141 74.5078 19.6602 74.25 19.8008C73.9922 19.9336 73.7344 20 73.4766 20C73.3125 20 73.1484 19.9766 72.9844 19.9297C72.8203 19.8828 72.6758 19.8008 72.5508 19.6836C72.4258 19.5664 72.3242 19.4102 72.2461 19.2148C72.168 19.0117 72.1289 18.7539 72.1289 18.4414C72.1289 17.9727 72.1602 17.4453 72.2227 16.8594C72.2852 16.2734 72.3555 15.6875 72.4336 15.1016C72.5117 14.5156 72.582 13.9648 72.6445 13.4492C72.707 12.9258 72.7383 12.5 72.7383 12.1719C72.7383 11.8828 72.6758 11.6523 72.5508 11.4805C72.4258 11.3008 72.2383 11.2109 71.9883 11.2109Z" fill="white"/>
                </svg>
              </Box>
            </Box>
            <Box as="div" sx={styles.right}>
              {renderMainVideo()}
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

const styles = {
  section: {
    background: '#FFFFFF',
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 100],
    pb: [8, null, null, 0],
    zIndex: 0,
    width: '100%',
    contentWrapper: {
      background: '#FFF',
      textAlign: 'center',
      padding: '2rem 0',
      h3: {
        fontSize: ['28px', '35px', null, '50px', null, '50px', '50px'],
        fontWeight: 700,
        padding: '.5rem 0',
        color: '#000000',
        textAlign: 'center',
      },
      span: {
        fontSize: ['28px', '35px', null, '50px', null, '50px', '50px'],
        fontWeight: 700,
        padding: '.5rem',
        color: '#000000',
        textAlign: 'center',
      }
    },
  },
  highlight: {
    background: '#FFCC28'
  },
  videoPillContainer: {
    margin: '3rem auto',
    padding: '1rem 0 6rem 0',
    minHeight: '448px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#FFF'
  },
  videoPillContent: {
    margin: '2rem 0',
    background: '#111827',
    padding: '2rem',
    display: 'flex',
    flexDirection: ['column', null, null, null, 'row'],
    width: ['90%', null, null, null, '75%'],
    borderRadius: '15px',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    width: ['100%', null, null, null, '50%'],
    margin: '1rem 0',
    h4: {
      fontSize: '28px',
      fontWeight: 700,
      padding: '1rem 0',
    },
    p: {
      padding: '1rem 0',
      textAlign: 'left'
    },
    illustration: {
      padding: '1.5rem 0',
      width: '100%',
    }
  },
  right: {
    width: ['100%', null, null, null, '50%'],
    height: '100%',
  },
};