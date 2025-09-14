import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/src/components/ui/input';
import { PromptType } from '@/src/types/form';
import DropDown from '../../components/drop-down';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import { ResponType } from '@/src/types/components';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface HeroHomeType {
  formRequest: PromptType;
  setFormRequest: React.Dispatch<React.SetStateAction<PromptType>>;
  onGenerate: () => void;
  isPending: boolean;
  name: any;
  typingText: string | null;
  isTyping: boolean;
  aiResponse: any;
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
}) => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0">
        {/* <Shape className="w-150 h-150 bg-[var(--shapeV1-parent)]/70 rounded-full blur-[600px] z-[-6] top-0 -translate-y-70 " /> */}
        <Box className="flex justify-center items-center flex-col w-full">
          <Box className="relative w-full flex justify-center items-center flex-col max-w-2/3 gap-4  rounded-lg">
            {aiResponse ? (
              <Box className="rounded-md my-2 w-full">
                <Box className="flex flex-col gap-3 px-2 py-2">
                  <Label className="text-lg font-semibold p-3 rounded-xl bg-foreground/20 text-end self-end max-w-[80%] break-words">
                    {name?.fullName}: {aiResponse?.prompt}
                  </Label>
                  <Box className="text-lg font-semibold p-3 rounded-xl bg-foreground/20 text-start self-start max-w-[80%] break-words">
                    <ReactMarkdown>
                      {isTyping ? typingText + '|' : aiResponse?.response}
                    </ReactMarkdown>
                  </Box>
                </Box>
              </Box>
            ) : (
              <>
                <Label className="text-5xl font-extrabold">TechRecs</Label>
                <Label className="text-2xl font-light">Search Your Next Device With TechRecs</Label>
              </>
            )}

            <Box className="w-full flex  sticky items-center bottom-10 p-4 z-50 flex-col">
              <Box className="flex w-full justify-center items-center gap-4 relative">
                <Input
                  placeholder="Find Your Device"
                  name={formRequest.prompt!}
                  value={formRequest.prompt!}
                  className="w-full"
                  onChange={(e) =>
                    setFormRequest((prev) => {
                      const newObj = { ...prev, prompt: e.target.value };
                      return newObj;
                    })
                  }
                />
                <DropDown
                  title="Settings"
                  className="absolute -translate-x-25 "
                  subTitle="knowledge"
                />
                <Button variant="glass" onClick={() => onGenerate()} disabled={isPending}>
                  Search
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
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default HomeHeroSection;
