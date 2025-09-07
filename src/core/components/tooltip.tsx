import { ToolTipProps } from '@/src/types/ui';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/src/components/ui/tooltip';
import { Label } from '@radix-ui/react-dropdown-menu';

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
