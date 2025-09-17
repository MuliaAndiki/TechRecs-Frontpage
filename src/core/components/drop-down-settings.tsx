import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import Fallback from '@/src/components/ui/Fallback';
import { DropdownType } from '@/src/types/components';
interface DropDownProps {
  isPopUp?: 'knowledge' | null;
  setIsPopUp?: React.Dispatch<React.SetStateAction<'knowledge' | null>>;
  onLogout?: () => void;
  isPending?: boolean;
}

const DropDownSettings: React.FC<DropdownType & DropDownProps> = ({
  title,
  subTitle,
  className,
  isPopUp,
  setIsPopUp,
  onLogout,
  isPending,
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
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setIsPopUp!('knowledge')}>
            Settings knowledge
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Contact</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Discord</DropdownMenuItem>

                <DropdownMenuItem>Github</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuItem onClick={() => onLogout!()} disabled={isPending}>
          {isPending ? <Fallback title="Wait" /> : 'Log out'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownSettings;
