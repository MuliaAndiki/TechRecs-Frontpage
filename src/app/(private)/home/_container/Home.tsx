'use client';
// import { useEffect } from 'react';
// import { useAppSelector } from '@/src/hooks/dispatch/dispatch';
// import { useAppDispatch } from '@/src/hooks/dispatch/dispatch';
import { useEffect, useState } from 'react';

import Container from '@/src/components/ui/Container';
import HomeHeroSection from '@/src/core/section/home/home-heroSection';
import useGenerate from '@/src/hooks/mutation/ai/useGenerate';
import useGetAll from '@/src/hooks/mutation/ai/useGetAll';
import useGetProfile from '@/src/hooks/mutation/auth/useGetProfile';
import useLogout from '@/src/hooks/mutation/auth/useLogout';
import { useAlert } from '@/src/hooks/use-alert';
import { ChatType } from '@/src/types/components';
import { PromptType } from '@/src/types/form';
import { cleanObject } from '@/src/utils/formdata';

const HomeContainer = () => {
  // const currentData = useAppSelector((state) => state.auth.currentUser?.user.role);
  // useEffect(() => {
  //   console.log(`data ${currentData}`);
  // }, [currentData]);

  const alert = useAlert();
  const [formRequest, setFormRequest] = useState<PromptType>({
    prompt: {
      text: '',
      category: {
        deviceType: '',
        budget: {
          min: 0,
          max: 0,
        },
        brand: '',
        releaseYear: 0,
        laptop: {
          processor: {
            brand: '',
            cores: 0,
            generation: '',
          },
          battery: {
            capacityWh: 0,
            lifeHours: 0,
          },
          connectivity: [],
          display: {
            size: '',
            panelType: '',
            refreshRate: 0,
            resolution: '',
          },
          gpu: {
            brand: '',
            vram: '',
          },
          os: '',
          purpose: '',
          ram: {
            size: '',
            type: '',
            upgradable: undefined,
          },
          storage: {
            type: '',
            capacity: '',
            expandable: undefined,
          },
          weight: 0,
        },
        phone: {
          processor: {
            brand: '',
          },
          ram: '',
          storage: '',
          expandableStorage: undefined,
          camera: {
            rear: {
              count: 0,
              resolution: '',
              features: [],
            },
            front: {
              resolution: '',
              features: [],
            },
          },
          display: {
            size: '',
            resolution: '',
            refreshRate: 0,
            panelType: '',
          },
          battery: {
            capacityMah: 0,
            fastCharge: '',
            wirelessCharge: undefined,
          },
          os: '',
          connectivity: [],
          durability: {
            waterproof: undefined,
            dustproof: undefined,
            rating: '',
          },
          purpose: '',
        },
      },
    },
  });

  const [chatHistory, setChatHistory] = useState<ChatType[]>([]);
  const getProfile = useGetProfile();
  const name = getProfile.data?.data;
  const [isPopUp, setIsPopUp] = useState<'knowledge' | null>(null);

  const [typingText, setTypingText] = useState<string | null>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<PromptType | null>(null);

  const { mutate: logout, isPending } = useLogout();
  const handleLogout = () => logout({});

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
      setFormRequest({
        prompt: {
          text: '',
        },
      });
      if (aiResponse) {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'user', text: aiResponse.prompt?.text || '' },
          { sender: 'ai', text: aiResponse.response! },
        ]);
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
    const cleanBody = cleanObject(formRequest);
    generate.mutate(cleanBody);
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
        chatHistory={chatHistory}
        onLogout={handleLogout}
        isPopUp={isPopUp}
        setIsPopUp={setIsPopUp}
      />
    </Container>
  );
};

export default HomeContainer;
