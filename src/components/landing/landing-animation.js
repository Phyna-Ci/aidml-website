import Lottie from 'lottie-react';
import landingSpinnerAnimation from 'assets/animations/landing-spinner.json';

const LandingAnimation = () => (
  <Lottie loop={true} autoPlay={true} animationData={landingSpinnerAnimation} />
);

export default LandingAnimation;