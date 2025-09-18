import Container from '@/src/components/ui/Container';
import TermOfUseHeroSection from '@/src/core/section/terms-of-use/terms-of-use-hero-section';

const TermsOfUseContainer = () => {
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <TermOfUseHeroSection />
    </Container>
  );
};

export default TermsOfUseContainer;
