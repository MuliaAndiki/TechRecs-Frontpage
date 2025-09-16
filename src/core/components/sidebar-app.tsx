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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
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
import { useState } from 'react';
import PopUp from './pop-up';
import View from '@/src/components/ui/View';
import { IconX } from '@tabler/icons-react';
import { Button } from '@/src/components/ui/button';
import { IconSettings, IconUser, IconDatabase, IconNotes } from '@tabler/icons-react';
import ToggleTheme from './toggle-theme';
import { getDate } from '@/src/utils/string.format';
import useDeleteAkun from '@/src/hooks/mutation/auth/useDeleteAkun';
import { useAlert } from '@/src/hooks/use-alert';
import { useRouter } from 'next/navigation';

type SettingsType = 'general' | 'profile' | 'data' | 'about';

export default function AppSideBar() {
  const { mutate: logout, isPending } = useLogout();
  const alert = useAlert();
  const Delete = useDeleteAkun();
  const getProfile = useGetProfile();
  const data = getProfile.data?.data;
  const handleLogout = () => logout({});
  const getAll = useGetByUser(data?._id);
  const dataAll = getAll.data?.data || [];
  const [isPopUp, setIsPopUp] = useState<'settings' | null>(null);
  const [settings, setSettings] = useState<SettingsType>('general');
  const router = useRouter();

  const handleDelete = () => {
    return Delete.mutate({});
  };
  const labelSettings: { icon: React.ElementType; label: string; state: SettingsType }[] = [
    { icon: IconSettings, label: 'General', state: 'general' },
    { icon: IconUser, label: 'Profile', state: 'profile' },
    { icon: IconDatabase, label: 'Data', state: 'data' },
    { icon: IconNotes, label: 'About', state: 'about' },
  ];

  const dataProfile =
    data &&
    ([
      { label: 'Name', data: data.fullName },
      { label: 'Email', data: data.email },
      { label: 'Role', data: data.role },
      { label: 'CreateAt', data: getDate(data.createdAt).toLowerCase() },
      { label: 'UpdateAt', data: getDate(data.updatedAt).toLowerCase() },
    ] as { label: string; data: string }[]);

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
        <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width] ">
          <DropdownMenuItem onClick={() => handleLogout()} disabled={isPending}>
            {isPending ? <Fallback title="Wait" /> : 'Logout'}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsPopUp('settings')}>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <PopUp isOpen={isPopUp === 'settings'} onClose={() => setIsPopUp(null)}>
        <View className="w-full h-auto">
          <Box className="flex justify-center items-center flex-col ">
            <Box className="flex justify-between items-center w-full">
              <Label className="text-lg font-light">Settings</Label>
              <Button variant="glass" onClick={() => setIsPopUp(null)}>
                <IconX />
              </Button>
            </Box>
            <Box className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-4  w-full">
              <Box className="flex justify-center items-start flex-col mt-10 border-r ">
                {labelSettings.map((items, key) => (
                  <div
                    key={key}
                    className="flex gap-2 cursor-pointer justify-start items-center  w-full"
                    onClick={() => setSettings(items.state)}
                  >
                    <items.icon />
                    <Label className="my-4">{items.label}</Label>
                  </div>
                ))}
              </Box>
              <Box className="flex justify-center items-center flex-col">
                {settings === 'general' && (
                  <Box className="w-full h-full ">
                    <Label className="text-2xl font-bold">General :</Label>
                    <Box className="flex justify-between items-center w-full ">
                      <Box className="flex justify-center items-center flex-col">
                        <Label className="text-lg font-light">Theme</Label>
                        <ToggleTheme />
                      </Box>
                      <Box className="flex justify-center items-center flex-col w-full max-w-85 gap-2">
                        <Label className="text-lg font-light">Language</Label>
                        <Select
                        // onValueChange={handleChangeGender}
                        // value={String(formEditProfile.gender)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="true">Indonesia</SelectItem>
                          </SelectContent>
                        </Select>
                      </Box>
                    </Box>
                  </Box>
                )}
                {settings === 'profile' && (
                  <Box className="w-full h-full ">
                    <Label className="text-2xl font-bold">Profile :</Label>
                    {dataProfile.map((items: any, key: number) => (
                      <Box key={key} className="flex justify-between items-center my-1">
                        <Label className="text-lg font-light">{items.label} :</Label>
                        <Label className="text-lg font-light">{items.data}</Label>
                      </Box>
                    ))}
                    <Box className="w-full">
                      <Box className="flex justify-between items-center">
                        <Label className="text-lg font-light">Delete account :</Label>
                        <Button
                          variant={'destructive'}
                          disabled={isPending}
                          onClick={() => handleDelete()}
                        >
                          {isPending ? <Fallback title="Wait" /> : 'Delete'}
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )}
                {settings === 'data' && (
                  <Box className="flex justify-center items-center">
                    <Label>setUp Data</Label>
                  </Box>
                )}
                {settings === 'about' && (
                  <Box className="flex justify-center items-center">
                    <Label>setUp About</Label>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </View>
      </PopUp>
    </Sidebar>
  );
}
