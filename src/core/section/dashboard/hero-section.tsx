import { Label } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

import Ball from '@/src/components/shape/dashboard/ball';
import Roboto from '@/src/components/shape/dashboard/Roboto';
import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import View from '@/src/components/ui/View';

const DashboardHeroSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative z-0 overflow-x-hidden ">
        <Ball />
        <Box className="flex justify-center -translate-y-[50px] items-center flex-col  gap-4 w-full max-w-[1000px] text-center">
          <Label className="text-3xl lg:text-6xl font-bold bg-gradient-to-r from-[#C30EFF] via-[#E8BAC0] to-[#471EFF] bg-clip-text text-transparent">
            Find the Perfect Laptop & Phone with TechRecs
          </Label>
          <Label className="text-2xl lg:text-5xl font-bold">AI Scalable</Label>
          <Label className="text-sm lg:text-lg w-full max-w-[800px] text-center">
            TechRecs helps you find the perfect laptop or smartphone quickly and easily. Get
            personalized recommendations based on your budget, needs, and preferences, so you can
            make confident choices without endless browsing.
          </Label>
          <Box className="flex justify-center items-center gap-4 ">
            <Link href="/login">
              <Button variant="linear" className="h-auto">
                Get started
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="linear" className="h-auto">
                TechRecs
              </Button>
            </Link>
          </Box>
        </Box>
        <Roboto />
      </Box>
    </View>
  );
};

export default DashboardHeroSection;
