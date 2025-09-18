'use client';
import { Label } from '@radix-ui/react-dropdown-menu';

import CardAi from '@/src/components/card-ai';
import CardSosmed from '@/src/components/card-sosmed';
import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';

const TransformSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative z-0 overflow-x-hidden">
        <Box className="flex justify-center items-center flex-col">
          <Label className="text-4xl lg:text-6xl w-full max-w-270 text-center font-light">
            Transform Ideas into Reality with Cutting-Edge AI Solutions
          </Label>
          <Box className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-6 mt-10  w-full max-20 ">
            <Box className="w-full flex justify-center items-center flex-col">
              <CardAi />
            </Box>
            <Box className="w-full flex justify-center items-center h-auto">
              <CardSosmed />
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default TransformSection;
