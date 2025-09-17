import { Label } from '@radix-ui/react-dropdown-menu';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Image from 'next/image';

import Laptop from '@/src/components/svg/laptop';
import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import Shape from '@/src/components/ui/Shape';
import View from '@/src/components/ui/View';

const PartnerSection: React.FC = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative z-0 overflow-x-hidden ">
        <Shape className="w-90 h-90 rounded-full bg-[var(--shapeV1-parent)] z-[-5] blur-3xl right-0 -translate-x-1/2" />
        <Shape className="w-90 h-90 rounded-full bg-[var(--shapeV1-child)] z-[-5] blur-3xl right-0 -translate-x-1/2 translate-y-30" />
        <Shape className="border p-4 rounded-lg bg-foreground/10 top-1/5 left-1/2 -translate-y-10 ">
          <Box className="flex justify-center items-center gap-4">
            <Box className="w-5 h-5 rounded-full bg-[var(--shapeV1-child)]" />
            <Label className="text-lg">Vision AI Technology</Label>
          </Box>
          <Label className="text-sm font-light max-w-50 text-center">
            Our Technology AI Generator website empowers individuals
          </Label>
        </Shape>
        <Shape className="border p-4 rounded-lg bg-foreground/10 bottom-1/5 left-1/2 translate-y-10  ">
          <Box className="flex justify-center items-center gap-4">
            <Box className="w-5 h-5 rounded-full bg-[var(--shapeV1-parent)]" />
            <Label className="text-lg">Vision AI Technology</Label>
          </Box>
          <Label className="text-sm font-light max-w-50 text-center">
            Our Technology AI Generator website empowers individuals
          </Label>
        </Shape>
        <Shape className="border p-4 rounded-lg bg-foreground/10 -translate-x-20   ">
          <Box className="flex justify-center items-center gap-4">
            <Box className="w-5 h-5 rounded-full bg-foreground" />
            <Label className="text-lg">Vision AI Technology</Label>
          </Box>
          <Label className="text-sm font-light max-w-50 text-center">
            Our Technology AI Generator website empowers individuals
          </Label>
        </Shape>
        <Box className="grid grid-cols-2 grid-rows-1 gap-2 w-full">
          <Box className="  flex justify-between items-center flex-col">
            <Label className="text-xl font-light w-full max-w-120 text-start">
              Workflow with Custom AI Tools
            </Label>
            <Label className="text-xl font-light w-full max-w-120 text-start">
              Our Technology AI Generator website empowers individuals and businesses
            </Label>
            <Box className="p-4 rounded-lg border border-[var(--shapeV1-parent)] bg-foreground/5 flex justify-center items-center flex-col">
              <Image
                alt="visual"
                src="/asset/Visual.svg"
                width={150}
                height={150}
                className="mb-5"
              />
              <Label className="text-center text-lg font-light">Propmt Keyword Generator</Label>
              <Label className=" text-lg font-light text-justify w-full max-w-50">
                Automatic suggestions and the best keywords to target.
              </Label>
            </Box>
          </Box>
          <Box className="flex justify-center items-center flex-col p-4 ">
            <Label className="text-6xl font-light max-w-180 text-end ">
              Your AI Partner for Smarter Faster Solutions
            </Label>
            <Box className="mt-10 w-full h-auto">
              <Laptop />
            </Box>
          </Box>
          <Box className="grid grid-cols-2 grid-rows-1 w-full ">
            <Box className="flex justify-center items-center flex-col">
              <Label className="text-2xl font-light">123.4+</Label>
              <Label className="text-2xl font-light">DEVICE</Label>
            </Box>

            <Box className="flex justify-center items-center">
              <Label className="text-3xl font-light">Discover the Future of AI Innovation</Label>
            </Box>
            <Box className="flex justify-center items-center my-4">
              <Button variant={'V1'}>
                Read More <IconArrowNarrowRight />
              </Button>
            </Box>
            <Box className="flex justify-center items-center my-4">
              <Button variant={'V2'}>
                Learn More <IconArrowNarrowRight />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default PartnerSection;
