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
import { IconHistoryToggle } from '@tabler/icons-react';
import useGetByUser from '@/src/hooks/mutation/ai/useGetByUser';
import Fallback from '@/src/components/ui/Fallback';

export default function AppSideBar() {
  const { mutate: logout, isPending } = useLogout();
  const getProfile = useGetProfile();
  const data = getProfile.data?.data;
  const handleLogout = () => logout({});
  const getAll = useGetByUser(data?._id);
  const dataAll = getAll.data?.data || [];

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
              {dataAll.length === 0 ? (
                <Box className="w-full min-h-screen flex justify-center items-center flex-col">
                  <IconHistoryToggle size={130} />
                  <Label className="text-lg font-semibold">Riwayat Not Fount</Label>
                </Box>
              ) : (
                <SidebarMenuItem className="flex flex-col gap-4 ">
                  {dataAll
                    .slice()
                    .reverse()
                    .map((items: any, key: number) => (
                      <SidebarMenuButton className="h-auto" key={key}>
                        {key + 1}. {items.prompt?.text}
                      </SidebarMenuButton>
                    ))}
                </SidebarMenuItem>
              )}
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
          <DropdownMenuItem onClick={() => handleLogout()} disabled={isPending}>
            {isPending ? <Fallback title="Wait" /> : 'Logout'}
          </DropdownMenuItem>
          <DropdownMenuItem>Pengaturan</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Sidebar>
  );
}
