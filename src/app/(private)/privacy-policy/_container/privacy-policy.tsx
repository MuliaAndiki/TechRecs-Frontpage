import Container from '@/src/components/ui/container';
import PrivacyPolicyHeroSection from '@/src/core/section/privacy-policy/privacy-policy-hero-section';

const PrivacyPolicyContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <PrivacyPolicyHeroSection />
    </Container>
  );
};

export default PrivacyPolicyContainer;
