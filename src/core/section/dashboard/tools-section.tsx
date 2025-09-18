import { Label } from '@radix-ui/react-dropdown-menu';

import CardBoard from '@/src/components/card-board';
import Box from '@/src/components/ui/Box';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel';
import View from '@/src/components/ui/View';
import { CardBoardApp } from '@/src/config/components.config';

const ToolsSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative z-0 overflow-x-hidden">
        <Box className="w-full justify-center items-center flex-col">
          <Label className="text-center text-4xl lg:text-7xl font-light">
            AI-Powered Tools to Guide Your Choice
          </Label>
          <Box className="relative flex justify-center items-center my-20 gap-8 p-6 ">
            <Carousel
              opts={{
                align: 'start',
              }}
              orientation="vertical"
              className="w-full  max-w-full"
            >
              <CarouselContent className="-mt-1 h-[500px] lg:h-[760px]">
                {CardBoardApp.map((items, index) => (
                  <CarouselItem key={index} className="py-1 md:basis-1/2">
                    <CardBoard data={items} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default ToolsSection;
