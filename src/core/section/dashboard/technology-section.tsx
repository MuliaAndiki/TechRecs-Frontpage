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
import TechnologyShape from '@/src/components/shape/dashboard/technology-shape';
const TechnologySection = () => {
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0 ">
        <TechnologyShape />
        <Box className="w-full flex justify-center items-center flex-col p-8">
          <Box className="grid lg:grid-cols-[2fr_1.3fr] grid-rows-1 w-full">
            <View className=" flex justify-between items-center  flex-col  ">
              <Label className="text-4xl lg:text-8xl font-light ">
                The AI-Powered Technology Behind TechRecs!
              </Label>
              <Box className="my-10 ">
                <Label className="text-xl lg:text-3xl font-light ">
                  TechRecs leverages AI to deliver smarter, faster, and more personalized gadget
                  recommendations.
                </Label>
              </Box>
              <Box className="w-full  grid  grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-2 items-center">
                <Label className="text-xl lg:text-2xl w-full max-w-50 ">
                  Workflow With LLM AI Tools
                </Label>
                <Box className="flex justify-center lg:items-center gap-2 flex-col ">
                  <AvatarCircles numPeople={99} avatarUrls={Avatars} />
                  <Box className="flex lg:justify-center items-start  gap-2 ">
                    <Label className="font-bold text-lg">578M+</Label>
                    <Label>User Active</Label>
                  </Box>
                </Box>
              </Box>
              <Box className=" grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-2 items-center w-full">
                <Box className="flex lg:justify-center items-center gap-4">
                  <Button variant={'V1'}>
                    Read More <IconArrowNarrowRight />
                  </Button>
                  <Button variant={'V2'}>
                    Learn More <IconArrowNarrowRight />
                  </Button>
                </Box>
                <Box className="flex lg:justify-center items-center gap-4">
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
            <View className="w-full flex justify-start lg:justify-end items-start lg:items-end ">
              <Iphone13 />
            </View>
          </Box>
          <View className="w-full flex justify-between flex-wrap lg:flex-nowrap items-center mt-4">
            <Box className="flex justify-center lg:justify-start items-center lg:items-start  w-full lg:w-auto flex-col ">
              <Label className="text-5xl lg:text-7xl font-light">12+</Label>
              <Label className="text-xl lg:text-2xl font-light">Digital Experience</Label>
            </Box>
            <Box className=" rounded-4xl lg:p-2 flex justify-center items-center w-full lg:w-auto my-2 border border-[var(--shapeV1-child)] bg-clip-padding">
              <Box className="rounded-4xl  flex flex-col lg:flex-row items-center justify-center lg:items-center  lg:p-2 w-full bg-foreground/5  ">
                <Image alt="Ring" src="/asset/Ring.svg" width={170} height={170} />
                <Box className="flex justify-center items-center flex-col w-full max-w-50">
                  <Label className="text-lg lg:text-lg font-light text-center">
                    SEO Goal Setting
                  </Label>
                  <Label className="text-lg lg:text-lg font-light text-justify">
                    Helps you set and achieve SEO goals with guided assistance.
                  </Label>
                </Box>
              </Box>
            </Box>
            <Label className="text-lg text-center w-full lg:w-auto">
              Power of AI at Your Fingertips
            </Label>
            <Box className="flex justify-center items-center lg:w-auto w-full text-end flex-col">
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
