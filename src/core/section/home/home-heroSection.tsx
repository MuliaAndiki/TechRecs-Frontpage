import Box from '@/src/components/ui/Box';
import View from '@/src/components/ui/View';
import { Label } from '@radix-ui/react-dropdown-menu';
import { Input } from '@/src/components/ui/input';
import { RequestType } from '@/src/types/form';
import { useState } from 'react';
import { InteractiveGridPattern } from '@/src/components/magicui/interactive-grid-pattern';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';
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

const HomeHeroSection = () => {
  const [formRequest, setFormRequest] = useState<RequestType>({
    params: '',
  });
  return (
    <View>
      <Box className="flex min-h-screen justify-center items-center relative  ">
        <Box className="absolute z-0 inset-0">
          <InteractiveGridPattern
            className={cn(
              '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
              'absolute right-0 h-full translate-x-2/5 w-full z-[-1] '
            )}
          />
          <InteractiveGridPattern
            className={cn(
              '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
              'absolute left-0 h-full rotate-180 -translate-x-2/5 w-full z-[-1] '
            )}
          />
        </Box>
        <Box className="relative w-full flex justify-center items-center flex-col max-w-2/3 gap-4">
          <Label className="text-5xl font-extrabold">TechRecs</Label>
          <Input
            placeholder="Find Your Device"
            name={formRequest.params}
            value={formRequest.params}
            className="w-full"
            onChange={(e) =>
              setFormRequest((prev) => {
                const newObj = { ...prev, params: e.target.value };
                return newObj;
              })
            }
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="absolute right-2 bottom-0 -translate-y-2.5  text-muted-foreground text-sm">
                Settings
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
      </Box>
    </View>
  );
};

export default HomeHeroSection;
