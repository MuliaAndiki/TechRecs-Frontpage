import Image from 'next/image';

import { MarqueType } from '../types/components';
import Box from './ui/Box';

const CardMarque: React.FC<MarqueType> = ({ image, ...props }) => {
  return (
    <Box className=" p-4 w-full flex gap-4 justify-center items-center z-[-5]">
      <Image alt="Marque" src={image!} width={100} height={100} className="border-x-1 px-2" />
    </Box>
  );
};

export default CardMarque;
