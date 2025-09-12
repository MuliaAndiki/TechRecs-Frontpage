'use client';
import Container from '@/src/components/ui/Container';
import HomeHeroSection from '@/src/core/section/home/home-heroSection';
import { PromptType } from '@/src/types/form';
// import { useEffect } from 'react';
// import { useAppSelector } from '@/src/hooks/dispatch/dispatch';
// import { useAppDispatch } from '@/src/hooks/dispatch/dispatch';
import { useState } from 'react';
import useGenerate from '@/src/hooks/mutation/ai/useGenerate';
import { useAlert } from '@/src/hooks/use-alert';

const HomeContainer = () => {
  // const currentData = useAppSelector((state) => state.auth.currentUser?.user.role);
  // useEffect(() => {
  //   console.log(`data ${currentData}`);
  // }, [currentData]);
  const alert = useAlert();
  const [formRequest, setFormRequest] = useState<PromptType>({
    prompt: '',
  });

  const generate = useGenerate({
    onAfterSuccess: () => {},
  });

  const handleGenerate = () => {
    if (!formRequest.prompt) {
      alert.toast({
        title: 'Warning',
        message: 'Promt is not empty',
        icon: 'warning',
      });
      return;
    }
    return generate.mutate(formRequest);
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <HomeHeroSection
        formRequest={formRequest}
        setFormRequest={setFormRequest}
        isPending={generate.isPending}
        onGenerate={() => handleGenerate()}
      />
    </Container>
  );
};

export default HomeContainer;
