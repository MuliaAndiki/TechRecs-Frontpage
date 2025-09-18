import Link from 'next/link';

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
import { SosmedApp } from '@/src/config/app.config';
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
          <DropdownMenuItem onClick={() => setIsPopUp!('knowledge')}>Super Promt</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Contact</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {SosmedApp.map((items, key) => (
                  <Link href={items.params} key={key}>
                    <DropdownMenuItem>{items.name}</DropdownMenuItem>
                  </Link>
                ))}
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
