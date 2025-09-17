'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Container from '@/src/components/ui/Container';
import HeaderApp from '@/src/core/components/header-app';
import AppSideBar from '@/src/core/components/sidebar-app';
import { useAppSelector } from '@/src/hooks/dispatch/dispatch';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  if (!user) return null;
  return (
    <Container as="main" className="w-full">
      <HeaderApp />
      <AppSideBar />
      {children}
    </Container>
  );
}
