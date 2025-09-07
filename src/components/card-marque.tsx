import Box from './ui/Box';
import { MarqueType } from '../types/components';
import Image from 'next/image';

const CardMarque: React.FC<MarqueType> = ({ image, ...props }) => {
  return (
    <Box className=" p-4 w-full flex gap-4 justify-center items-center">
      <Image alt="Marque" src={image!} width={100} height={100} className="border-x-1 px-2" />
    </Box>
  );
};

export default CardMarque;
