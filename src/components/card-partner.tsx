import { Label } from '@radix-ui/react-dropdown-menu';

import Box from './ui/Box';
import Shape from './ui/shape';

const CardPartner = () => {
  return (
    <>
      <Shape className="border p-4 rounded-lg bg-foreground/10 top-1/4  ">
        <Box className="flex justify-center items-center gap-4">
          <Box className="w-5 h-5 rounded-full bg-[var(--shapeV1-parent)]" />
          <Label className="text-lg">Vision AI Technology</Label>
        </Box>
        <Label className="text-sm font-light max-w-50 text-center">
          Our Technology AI Generator website empowers individuals
        </Label>
      </Shape>
    </>
  );
};

export default CardPartner;
