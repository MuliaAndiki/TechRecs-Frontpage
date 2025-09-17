import { Label } from '@radix-ui/react-dropdown-menu';

import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';

const TermOfUseHeroSection = () => {
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative z-0">
        <Label className="font-bold text-3xl">TechRecs - Terms of Use</Label>
      </Box>
    </View>
  );
};

export default TermOfUseHeroSection;
