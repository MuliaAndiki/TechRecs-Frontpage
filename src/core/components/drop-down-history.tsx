import { Button } from '@/src/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { DropdownType } from '@/src/types/components';
interface DropDownProps {
  onDelete: () => void;
}

const DropDownHistory: React.FC<DropdownType & DropDownProps> = ({
  className,
  subTitle,
  title,
  onDelete,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <button className="absolute right-2 bottom-0 -translate-y-2.5  text-muted-foreground text-sm">
          {title}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="center">
        <DropdownMenuLabel>{subTitle}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Remove
            <DropdownMenuShortcut>
              <Button variant={'destructive'} onClick={() => onDelete()}>
                chat
              </Button>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Edit
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownHistory;
