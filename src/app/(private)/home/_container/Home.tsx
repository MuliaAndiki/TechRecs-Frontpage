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
import useGetAll from '@/src/hooks/mutation/ai/useGetAll';
import useGetProfile from '@/src/hooks/mutation/auth/useGetProfile';

const HomeContainer = () => {
  // const currentData = useAppSelector((state) => state.auth.currentUser?.user.role);
  // useEffect(() => {
  //   console.log(`data ${currentData}`);
  // }, [currentData]);

  const alert = useAlert();
  const [formRequest, setFormRequest] = useState<PromptType>({
    prompt: '',
  });

  const getAll = useGetAll();
  const getProfile = useGetProfile();
  const name = getProfile.data?.data;
  const data = getAll.data?.data;
  const [typingText, setTypingText] = useState<string | null>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<PromptType | null>(null);

  const simulateTyping = (fullText: string) => {
    setTypingText('');
    setIsTyping(true);
    let index = 0;

    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText[index]);
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
  };

  const generate = useGenerate({
    onAfterSuccess: (aiResponse?: PromptType) => {
      setFormRequest({ prompt: '' });
      if (aiResponse) {
        setAiResponse(aiResponse);
        simulateTyping(aiResponse.response || '');
      }
    },
  });

  const handleGenerate = () => {
    if (!formRequest?.prompt) {
      alert.toast({
        title: 'Warning',
        message: 'Promt is not empty',
        icon: 'warning',
      });
      return;
    }
    generate.mutate(formRequest);
  };

  return (
    <Container className="w-full min-h-screen flex flex-col">
      <HomeHeroSection
        formRequest={formRequest || { prompt: '' }}
        setFormRequest={setFormRequest}
        isPending={generate.isPending}
        onGenerate={() => handleGenerate()}
        name={name}
        aiResponse={aiResponse}
        isTyping={isTyping}
        typingText={typingText}
      />
    </Container>
  );
};

export default HomeContainer;
