import Iphone13 from '@/src/components/svg/iphone13';
import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';
import Shape from '@/src/components/ui/Shape';
import { Label } from '@radix-ui/react-dropdown-menu';
import { AvatarCircles } from '@/src/components/magicui/avatar-circles';
import { Avatars } from '@/src/config/app.config';
import { Button } from '@/src/components/ui/button';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';
const TechnologySection = () => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0 ">
        <Shape className="w-130 h-130 bg-[var(--shapeV1-parent)]/80 rounded-full blur-[500px] z-[-5] right-0 -translate-y-40" />
        <Shape className="w-130 h-130 bg-[var(--shapeV1-child)]/80 rounded-full blur-[500px] z-[-5] right-0 translate-y-30" />
        <Shape className="w-120 h-120 bg-[var(--shapeV1-parent)] rounded-full blur-[500px] z-[-5] left-0 -translate-x-80 translate-y-40" />
        <Shape className="w-120 h-120 bg-[var(--shapeV1-child)] rounded-full blur-[500px] z-[-5] left-0 -translate-x-80 -translate-y-40" />
        <Box className="w-full flex justify-center items-center flex-col p-8">
          <Box className="grid grid-cols-[2fr_1.3fr] grid-rows-1 w-full">
            <View className=" flex justify-between items-center  flex-col  ">
              <Label className="text-8xl font-light ">
                The AI-Powered Technology Behind TechRecs!
              </Label>
              <Box className="my-10 ">
                <Label className="text-3xl font-light ">
                  TechRecs leverages AI to deliver smarter, faster, and more personalized gadget
                  recommendations.
                </Label>
              </Box>
              <Box className="w-full flex justify-between items-center">
                <Label className="text-2xl w-full max-w-50">Workflow With GEMINI AI Tools</Label>
                <Box className="flex justify-center items-center gap-2 flex-col">
                  <AvatarCircles numPeople={99} avatarUrls={Avatars} />
                  <Box className="flex justify-center items-start  gap-2 ">
                    <Label className="font-bold text-lg">578M+</Label>
                    <Label>User Active</Label>
                  </Box>
                </Box>
              </Box>
              <Box className="flex justify-between items-center w-full">
                <Box className="flex justify-center items-center gap-4">
                  <Button variant={'V1'}>
                    Read More <IconArrowNarrowRight />
                  </Button>
                  <Button variant={'V2'}>
                    Learn More <IconArrowNarrowRight />
                  </Button>
                </Box>
                <Box className="flex justify-center items-center gap-4">
                  <Box className="flex justify-start items-start flex-col">
                    <Label className="text-2xl font-bold">123.5+</Label>
                    <Label className="text-lg font-light">Device</Label>
                  </Box>
                  <Box className="w-full max-w-40">
                    <Label>Discover the Future of AI Innovation</Label>
                  </Box>
                </Box>
              </Box>
            </View>
            <View className="w-full flex justify-end items-end">
              <Iphone13 />
            </View>
          </Box>
          <View className="w-full flex justify-between items-center mt-4">
            <Box className="flex justify-start items-start flex-col ">
              <Label className="text-7xl font-light">12+</Label>
              <Label className="text-2xl font-light">Digital Experience</Label>
            </Box>
            <Box className=" rounded-4xl p-[2px] border border-[var(--shapeV1-child)] bg-clip-padding">
              <Box className="rounded-4xl  flex items-center p-2 bg-foreground/5">
                <Image alt="Ring" src="/asset/Ring.svg" width={170} height={170} />
                <Box className="flex justify-center items-center flex-col w-full max-w-50">
                  <Label className="text-lg font-light text-center">SEO Goal Setting</Label>
                  <Label className="text-lg font-light text-justify">
                    Helps you set and achieve SEO goals with guided assistance.
                  </Label>
                </Box>
              </Box>
            </Box>
            <Label className="text-lg ">Power of AI at Your Fingertips</Label>
            <Box className="flex justify-center items-center  text-end flex-col">
              <Label className="text-lg font-light">Transform Ideas into Reality</Label>
              <Label className="text-lg font-light">AI Partner for Smarter</Label>
            </Box>
          </View>
        </Box>
      </Box>
    </View>
  );
};

export default TechnologySection;
