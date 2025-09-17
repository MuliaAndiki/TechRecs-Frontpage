import { Label } from '@radix-ui/react-dropdown-menu';
import { IconX } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

import Threads from '@/src/components/Threads';
import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import Fallback from '@/src/components/ui/Fallback';
import { Input } from '@/src/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import View from '@/src/components/ui/View';
import { SosmedApp } from '@/src/config/app.config';
import { ChatType } from '@/src/types/components';
import { PromptType } from '@/src/types/form';

import DropDownSettings from '../../components/drop-down-settings';
import PopUp from '../../components/pop-up';
import UseTooltip from '../../components/tooltip';
import { BrandDevice, DeviceType } from '../../const';
interface HeroHomeType {
  formRequest: PromptType;
  setFormRequest: React.Dispatch<React.SetStateAction<PromptType>>;
  onGenerate: () => void;
  isPending: boolean;
  name: any;
  typingText: string | null;
  isTyping: boolean;
  aiResponse: any;
  chatHistory: ChatType[];
  onLogout: () => void;
  isPopUp: 'knowledge' | null;
  setIsPopUp: React.Dispatch<React.SetStateAction<'knowledge' | null>>;
  isState: 'laptop' | 'tablet' | 'phone' | null | string;
  setIsState: React.Dispatch<React.SetStateAction<'laptop' | 'tablet' | 'phone' | null | string>>;
  onChangeDevice: (value: string) => void;
  onChangeBrand: (value: string) => void;
}

const HomeHeroSection: React.FC<HeroHomeType> = ({
  formRequest,
  onGenerate,
  setFormRequest,
  isPending,
  aiResponse,
  name,
  isTyping,
  typingText,
  chatHistory,
  onLogout,
  isPopUp,
  setIsPopUp,
  isState,
  setIsState,
  onChangeDevice,
  onChangeBrand,
}) => {
  const bg = useMemo(
    () => (
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    ),
    []
  );

  const renderSetup = () => {
    switch (isState) {
      case 'laptop':
        return (
          <View className="w-full h-full">
            <Box className="flex justify-center items-center">
              <Label>Setup Laptop</Label>
            </Box>
          </View>
        );

      case 'phone':
        return (
          <View className="w-full h-full">
            <Box className="flex justify-center items-center">
              <Label>Setup Phone</Label>
            </Box>
          </View>
        );

      case 'tablet':
        return (
          <View className="w-full h-full">
            <Box className="flex justify-center items-center">
              <Label>Setup Tablet</Label>
            </Box>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0">
        <Box className="flex justify-center items-center flex-col w-full">
          {bg}
          <Box className="relative w-full flex justify-center items-center flex-col max-w-2/3 gap-4   rounded-lg">
            {aiResponse ? (
              <Box className="rounded-md my-2 w-full">
                <Box className="w-full flex justify-center items-center">
                  <Label className="text-4xl font-extrabold text-[var(--shapeV1-parent)]">
                    TechRecs
                  </Label>
                </Box>
                <Box className="flex flex-col gap-3 px-2 py-2">
                  {chatHistory.map((items, key) => {
                    const lastChat = key === chatHistory.length - 1;
                    return (
                      <Box
                        key={key}
                        className={`flex ${
                          items.sender === 'user' ? 'justify-end' : 'justify-start'
                        } mb-2`}
                      >
                        {items.sender === 'user' && (
                          <Label
                            key={key}
                            className=" text-lg font-semibold p-3 rounded-xl bg-foreground/20 text-end  max-w-[80%] break-words "
                          >
                            {name?.fullName}: {items.text}
                          </Label>
                        )}
                        {items.sender === 'ai' && (
                          <Box className=" text-lg font-semibold p-3 rounded-xl bg-foreground/20  self-start max-w-[80%] break-words">
                            <ReactMarkdown>
                              {lastChat && isTyping ? typingText + '|' : items.text}
                            </ReactMarkdown>
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            ) : (
              <Box className="w-full flex justify-center items-center flex-col h-full ">
                <Label className="text-5xl font-extrabold">TechRecs</Label>
                <Label className="text-2xl font-light">Search Your Next Device With TechRecs</Label>
                <Box className="absolute bottom-0 translate-y-50 right-0 translate-x-50">
                  <Box className="flex  items-center gap-4">
                    {SosmedApp.map((items, key) => (
                      <Link href={items.params} key={key}>
                        <UseTooltip content={items.name}>
                          <Button variant="ghost">
                            <items.icon className="size-5" />
                          </Button>
                        </UseTooltip>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}

            <Box className="w-full flex  sticky items-center bottom-10 p-4 z-50 flex-col">
              <Box className="flex w-full justify-center items-center gap-4 relative">
                <Input
                  placeholder="Find Your Device"
                  name={formRequest.prompt.text!}
                  value={formRequest.prompt.text!}
                  className="w-full"
                  onChange={(e) =>
                    setFormRequest((prev) => ({
                      ...prev,
                      prompt: {
                        ...prev.prompt,
                        text: e.target.value,
                      },
                    }))
                  }
                />

                <DropDownSettings
                  title="Settings"
                  className="absolute -translate-x-25 "
                  subTitle="Knowledge"
                  isPending={isPending}
                  onLogout={() => onLogout()}
                  isPopUp={isPopUp}
                  setIsPopUp={setIsPopUp}
                />
                <Button variant="glass" onClick={() => onGenerate()} disabled={isPending}>
                  {isPending ? <Fallback title="Wait" /> : 'Search'}
                </Button>
              </Box>

              <Box className="mt-2 z-0 flex gap-2">
                <Button variant="glass" className="">
                  <Box className="flex justify-center items-center gap-2">
                    <Image alt="AI" src="/asset/GeminiV1.svg" width={30} height={30} />
                    <Label className="font-extrabold">Gemini</Label>
                  </Box>
                </Button>
                <Button className="" variant="glass">
                  <Box className="flex justify-center items-center gap-2">
                    <Image alt="AI" src="/asset/deepseekV1.svg" width={30} height={30} />
                    <Label className="font-extrabold">Deepseek</Label>
                  </Box>
                </Button>
              </Box>
            </Box>
            <PopUp isOpen={isPopUp === 'knowledge'} onClose={() => setIsPopUp!(null)}>
              <View className="w-full h-auto">
                <Box className="flex justify-between items-center my-2">
                  <Label className="text-lg font-bold">Settings Knowledge</Label>
                  <Button variant={'glass'} onClick={() => setIsPopUp!(null)}>
                    <IconX />
                  </Button>
                </Box>
                <Box className="flex justify-center items-center flex-col ">
                  <Box className="flex justify-between items-center gap-2 w-full">
                    <Select
                      onValueChange={onChangeDevice}
                      value={String(formRequest.prompt.category?.deviceType)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Device Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {DeviceType.map((items, key) => (
                          <SelectItem key={key} value={`${items}`}>
                            {items}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Box className="w-full">
                      <Select
                        onValueChange={onChangeBrand}
                        value={String(formRequest.prompt.category?.brand)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Brands Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {BrandDevice.map((items, key) => (
                            <SelectItem key={key} value={`${items}`}>
                              {items}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Box>
                  </Box>

                  <Box className="flex flex-col gap-3 w-full my-2">
                    <Label className="px-1 text-center">Budget :</Label>
                    <Box className="flex justify-between items-center gap-2">
                      <Input type="number" placeholder="min" />
                      <Input type="number" placeholder="max" />
                    </Box>
                  </Box>

                  {renderSetup()}
                </Box>
              </View>
            </PopUp>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default HomeHeroSection;
