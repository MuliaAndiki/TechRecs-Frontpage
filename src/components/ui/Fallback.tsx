import { Label } from '@radix-ui/react-dropdown-menu';
import { Loader2Icon } from 'lucide-react';

import { FallbackProps } from '@/src/types/ui';

import Box from './Box';
export default function Fallback({ title, className, ...props }: FallbackProps) {
  return (
    <Box className="flex justify-center items-center gap-1">
      <Loader2Icon className="animate-spin" />
      <Label className={`${className}`}>{title}</Label>
    </Box>
  );
}
