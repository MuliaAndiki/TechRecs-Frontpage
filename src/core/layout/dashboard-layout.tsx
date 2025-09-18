import Container from '@/src/components/ui/container';

import FooterApp from '../components/footer-app';
import HeaderApp from '../components/header-app';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex flex-col w-full">
      <HeaderApp />
      {children}
      <FooterApp />
    </Container>
  );
}
