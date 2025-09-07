'use client';

import DashboardLayout from '@/src/core/layout/dashboard-layout';
import DashboardHeroSection from '@/src/core/section/dashboard/hero-section';
import Container from '@/src/components/ui/Container';
import TechnologySection from '@/src/core/section/dashboard/technology-section';
import ToolsSection from '@/src/core/section/dashboard/tools-section';
import PartnerSection from '@/src/core/section/dashboard/partner-section';
import ArtificialSection from '@/src/core/section/dashboard/artificial-section';
import TransformSection from '@/src/core/section/dashboard/transform-section';
const DashboardContainer = () => {
  return (
    <DashboardLayout>
      <Container className="w-full min-h-screen flex flex-col">
        <DashboardHeroSection />
        <TechnologySection />
        <ToolsSection />
        <PartnerSection />
        <ArtificialSection />
        <TransformSection />
      </Container>
    </DashboardLayout>
  );
};

export default DashboardContainer;
