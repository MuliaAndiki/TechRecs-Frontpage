import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/src/components/ui/input';
import { PromptType } from '@/src/types/form';
import DropDown from '../../components/drop-down';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Threads from '@/src/components/Threads';
import { useMemo } from 'react';
import { ChatType } from '@/src/types/components';
import Fallback from '@/src/components/ui/Fallback';

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
}) => {
  const bg = useMemo(
    () => (
      <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    ),
    []
  );
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0">
        <Box className="flex justify-center items-center flex-col w-full">
          {bg}
          <Box className="relative w-full flex justify-center items-center flex-col max-w-2/3 gap-4  rounded-lg">
            {aiResponse ? (
              <Box className="rounded-md my-2 w-full">
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
              <Box className="w-full flex justify-center items-center flex-col">
                <Label className="text-5xl font-extrabold">TechRecs</Label>
                <Label className="text-2xl font-light">Search Your Next Device With TechRecs</Label>
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
                <DropDown
                  title="Settings"
                  className="absolute -translate-x-25 "
                  subTitle="knowledge"
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
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default HomeHeroSection;
