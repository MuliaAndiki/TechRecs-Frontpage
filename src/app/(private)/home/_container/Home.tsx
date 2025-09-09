'use client';
import Container from '@/src/components/ui/Container';
import HomeHeroSection from '@/src/core/section/home/home-heroSection';
// import { useEffect } from 'react';
// import { useAppSelector } from '@/src/hooks/dispatch/dispatch';
// import { useAppDispatch } from '@/src/hooks/dispatch/dispatch';

const HomeContainer = () => {
  // const currentData = useAppSelector((state) => state.auth.currentUser?.user.role);

  // useEffect(() => {
  //   console.log(`data ${currentData}`);
  // }, [currentData]);
  return (
    <Container className="w-full min-h-screen flex flex-col">
      <HomeHeroSection />
    </Container>
  );
};

export default HomeContainer;
