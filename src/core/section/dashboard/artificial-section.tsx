import { Label } from '@radix-ui/react-dropdown-menu';

import { InteractiveGridPattern } from '@/src/components/magicui/interactive-grid-pattern';
import Icon from '@/src/components/svg/icon';
import Iphone15 from '@/src/components/svg/iphone15';
import Square from '@/src/components/svg/square';
import Box from '@/src/components/ui/Box';
import Shape from '@/src/components/ui/Shape';
import View from '@/src/components/ui/View';
import { useIsMobile } from '@/src/hooks/use-mobile';
import { cn } from '@/src/lib/utils';

const ArtificialSection = () => {
  const mobile = useIsMobile();
  return (
    <View>
      <Box className="flex min-h-screen  justify-center items-center relative z-0 ">
        <Shape className="w-85 h-85 bg-[var(--shapeV1-parent)] rounded-full blur-3xl z-[-5] left-1/7 top-0 -translate-x-10 translate-y-40" />
        <Shape className="w-85 h-85 bg-[var(--shapeV1-child)] rounded-full blur-3xl z-[-5] left-1/7 lg:bottom-0 -translate-x-10  -translate-y-20 " />
        {!mobile && (
          <Shape className="p-4 rounded-lg border bg-foreground/10  translate-x-40 bottom-15 ">
            <Box className="flex justify-center items-center ">
              <Box className="size-30">
                <Icon />
              </Box>
              <Box className="flex justify-start items-center flex-col gap-2">
                <Label className="text-lg font-light">
                  Innovate Faster with Our AI Generator Platform
                </Label>
                <Label className="text-lg font-light w-full max-w-88">
                  From generating complex algorithms to simple AI-driven tools, we offer
                  cutting-edge
                </Label>
              </Box>
              <Box className="flex justify-start items-center flex-col">
                <Label className="text-5xl pl-8 font-light">12+</Label>
                <Label className="text-2xl pl-8 font-light">Digital Experience</Label>
              </Box>
            </Box>
          </Shape>
        )}
        <Box className="w-full absolute ">
          <InteractiveGridPattern
            className={cn(
              '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
              'relative  lg:right-0 h-full translate-y-[680px] lg:translate-x-[900px] lg:translate-y-[250px] w-full z-0  '
            )}
          />
        </Box>

        <Box className="flex justify-center items-center flex-col">
          <Box className="grid lg:grid-cols-2 grid-rows-1 w-full">
            <Box className="flex justify-center items-center flex-col">
              <Label className="text-3xl lg:text-6xl font-light text-center lg:text-start w-full max-w-135">
                Discover the Future of AI Innovation
              </Label>
            </Box>

            <Box className="flex justify-center items-center">
              <Label className="lg:text-lg font-light text-center lg:text-justify w-full max-w-100 lg:max-w-130">
                From generating complex algorithms to simple AI-driven tools, we offer cutting-edge
                solutions that cater to every need. Whether you’re a developer, entrepreneur
              </Label>
            </Box>
          </Box>
          <Box className="grid lg:grid-cols-3 grid-rows-1 gap-4 p-2 w-full">
            <Box className="mt-6">
              <Iphone15 />
            </Box>
            <Box className="flex flex-wrap justify-between h-full max-h-110 items-center flex-col  py-15">
              <Box className="flex gap-4 flex-col ">
                <Box className="flex gap-2">
                  <Label className="p-2 bg-[var(--shapeV1-child)] rounded-lg">
                    Simplifying AI for Everyone
                  </Label>
                  <Label className="p-2 bg-[var(--shapeV1-parent)] rounded-lg">
                    AI Generator Platform
                  </Label>
                </Box>
                <Label className="text-2xl text-center lg:text-start lg:text-4xl w-full max-w-100">
                  Empower Your Vision with AI Technology
                </Label>
              </Box>

              <Label className="text-lg text-foreground/80 w-full max-w-100 text-center lg:text-justify">
                From generating complex algorithms to simple AI-driven tools, we offer cutting-edge
                solutions that cater to every need.
              </Label>
            </Box>
            <Box className="flex justify-center items-start py-15 z-0  ">
              <Square />
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default ArtificialSection;
