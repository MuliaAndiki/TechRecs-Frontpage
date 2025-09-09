'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/src/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/src/components/ui/dropdown-menu';
import { ChevronUp, User2 } from 'lucide-react';
import Box from '@/src/components/ui/Box';
import { Label } from '@radix-ui/react-dropdown-menu';
import useLogout from '@/src/hooks/mutation/auth/useLogout';
import useGetProfile from '@/src/hooks/mutation/auth/useGetProfile';

export default function AppSideBar() {
  const { mutate: logout, isPending } = useLogout();
  const getProfile = useGetProfile();
  const data = getProfile.data?.data;
  const handleLogout = () => logout({});

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Box className="flex w-full  justify-between items-center">
              <Label>TechRecs</Label>
              <SidebarTrigger />
            </Box>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Menu Item 1</SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>Menu Item 2</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User2 />
            {data?.fullName}
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
          <DropdownMenuItem onClick={() => handleLogout()}>Keluar</DropdownMenuItem>
          <DropdownMenuItem>Pengaturan</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Sidebar>
  );
}
