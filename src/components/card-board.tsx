import { Label } from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

import { CardBoardProps } from '../types/props';
import Box from './ui/Box';
import Shape from './ui/Shape';
import View from './ui/View';

const CardBoard: React.FC<CardBoardProps> = ({ data }) => {
  return (
    <View>
      <Box className="relative w-full h-[500px] lg:h-[760px]  z-0">
        <Shape className="flex justify-between top-0 w-full  p-8 z-1 ">
          <Box className=" w-full lg:max-w-100 ">
            <Label className=" lg:text-3xl font-light">{data.top.title}</Label>
          </Box>
          <Box className="flex justify-center items-center gap-4">
            <Label className="text-xs lg:text-sm p-2 bg-foreground/20 rounded-lg">
              {data.top.subTitle}
            </Label>
            <Label className="text-xs lg:text-sm p-2 bg-foreground/20 rounded-lg">
              {data.top.subTitleV1}
            </Label>
          </Box>
        </Shape>
        <Shape className="flex justify-between bottom-0 w-full  p-8 z-1">
          <Box className=" max-w-100">
            <Label className="text- lg:text-lg font-light">{data.bot.desc}</Label>
          </Box>
          <Box className="flex justify-center items-center gap-4">
            <Label className="text-lg lg:text-2xl">{data.bot.count}</Label>
            <Label className="lg:text-lg font-light">{data.bot.subDesc}</Label>
          </Box>
        </Shape>
        <Image alt="image" src={data.image} fill className="rounded-4xl object-cover border " />
      </Box>
    </View>
  );
};

export default CardBoard;
