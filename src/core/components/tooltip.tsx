import { Label } from '@radix-ui/react-dropdown-menu';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/src/components/ui/tooltip';
import { ToolTipProps } from '@/src/types/ui';

export default function UseTooltip({ children, content, ...props }: ToolTipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <Label>{content}</Label>
      </TooltipContent>
    </Tooltip>
  );
}
