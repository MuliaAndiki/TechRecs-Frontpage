import Robot from '@/src/components/svg/robot';
import Shape from '../../ui/Shape';
import Box from '../../ui/Box';
import { cn } from '@/src/lib/utils';
import { Marquee } from '@/src/components/magicui/marquee';
import CardMarque from '../../card-marque';
import View from '../../ui/View';
import { MarqueApp } from '@/src/config/components.config';
const Roboto = () => {
  return (
    <View className="absolute z-[-5] bottom-0 lg:w-full flex justify-center items-center flex-col">
      <Box className="  w-[70%]  overflow-hidden ">
        <Shape className="w-30 h-30 lg:w-70 lg:h-70 rounded-full bg-[var(--shapeV1-parent)]/40  lg:right-0 translate-x-80 translate-y-5  lg:-translate-x-75 lg:translate-y-17 blur-xl lg:blur-3xl z-[-5]" />
        <Shape className="w-30 h-30 lg:w-70 lg:h-70 rounded-full bg-[var(--shapeV1-child)]/40 z-[-5] translate-x-18 lg:translate-x-35 blur-xl lg:blur-3xl translate-y-5 lg:translate-y-20" />
        <Shape className="w-30 h-30 lg:w-70 lg:h-70 rounded-full bg-[#E8BAC0]/40 left-1/2 lg:left-1/2 -translate-x-17  lg:-translate-x-40 translate-y-3 lg:translate-y-20 z-[-5] blur-xl lg:blur-3xl " />
        <Robot />
      </Box>

      <Box className="flex w-full">
        <Marquee pauseOnHover className="[--duration:10s]">
          {MarqueApp.map((items, key) => (
            <CardMarque image={items.image} key={key} />
          ))}
        </Marquee>
      </Box>
    </View>
  );
};

export default Roboto;
