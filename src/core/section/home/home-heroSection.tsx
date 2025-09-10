import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/src/components/ui/input';
import { RequestType } from '@/src/types/form';
import { useState } from 'react';
import { InteractiveGridPattern } from '@/src/components/magicui/interactive-grid-pattern';
import { cn } from '@/src/lib/utils';
import DropDown from '../../components/drop-down';
import { Button } from '@/src/components/ui/button';
import Image from 'next/image';
import Shape from '@/src/components/ui/Shape';

const HomeHeroSection = () => {
  const [formRequest, setFormRequest] = useState<RequestType>({
    params: '',
  });
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0">
        <Shape className="w-150 h-150 bg-[var(--shapeV1-parent)]/70 rounded-full blur-[600px] z-[-6] top-0 -translate-y-70 " />
        <Box className="flex justify-center items-center flex-col w-full">
          <Box className="absolute z-0 inset-0">
            <InteractiveGridPattern
              className={cn(
                '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
                'absolute right-0 h-full translate-x-2/5 w-full z-[-1] '
              )}
            />
            <InteractiveGridPattern
              className={cn(
                '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
                'absolute left-0 h-full rotate-180 -translate-x-2/5 w-full z-[-1] '
              )}
            />
          </Box>
          <Box className="relative w-full flex justify-center items-center flex-col max-w-2/3 gap-4">
            <Label className="text-5xl font-extrabold">TechRecs</Label>
            <Label className="text-2xl font-light">Search Your Next Device With TechRecs </Label>
            <Input
              placeholder="Find Your Device"
              name={formRequest.params}
              value={formRequest.params}
              className="w-full"
              onChange={(e) =>
                setFormRequest((prev) => {
                  const newObj = { ...prev, params: e.target.value };
                  return newObj;
                })
              }
            />
            <DropDown title="Settings" className="absolute" subTitle="knowledge" />
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
    </View>
  );
};

export default HomeHeroSection;
