'use client';

import { Label } from '@radix-ui/react-dropdown-menu';
import { IconX } from '@tabler/icons-react';
import { IconDatabase, IconDots, IconNotes, IconSettings, IconUser } from '@tabler/icons-react';
import { IconHistoryToggle } from '@tabler/icons-react';
import { ChevronUp, User2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import Fallback from '@/src/components/ui/fallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/src/components/ui/sidebar';
import { useSidebar } from '@/src/components/ui/sidebar';
import View from '@/src/components/ui/View';
import useDeleteChatById from '@/src/hooks/mutation/ai/useDeleteChatById';
import useDeleteChatUser from '@/src/hooks/mutation/ai/useDeleteChatUser';
import useGetByUser from '@/src/hooks/mutation/ai/useGetByUser';
import useDeleteAkun from '@/src/hooks/mutation/auth/useDeleteAkun';
import useGetProfile from '@/src/hooks/mutation/auth/useGetProfile';
import useLogout from '@/src/hooks/mutation/auth/useLogout';
import { useAlert } from '@/src/hooks/use-alert';
import { getDate } from '@/src/utils/string.format';

import DropDownHistory from './drop-down-history';
import PopUp from './pop-up';
import ToggleTheme from './toggle-theme';

type SettingsType = 'general' | 'profile' | 'data' | 'about';

export default function AppSideBar() {
  const [selectIdChat, setSelectIdChat] = useState<string | null>(null);
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
  const [popUp, setPopUp] = useState<'deleteAllChat' | null>(null);
  const router = useRouter();
  const { setOpen } = useSidebar();
  const deleteChatById = useDeleteChatById();
  const deleteChatUser = useDeleteChatUser();

  const handleDeleteChat = () => {
    if (!data._id || !selectIdChat) {
      console.log('params failed', data?._id, selectIdChat);
      return;
    }
    deleteChatById.mutate({
      userId: data._id,
      chatId: selectIdChat,
    });
  };

  const handleDelete = () => {
    return Delete.mutate({});
  };

  const handleDeleteChatUser = () => deleteChatUser.mutate({});

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

  const aboutData: { label: string; button: string }[] = [
    { label: 'Terms of Use', button: 'View' },
    { label: 'Privacy Policy', button: 'View' },
  ];

  const handleRedirect = (params: string) => {
    if (params === 'Terms of Use') {
      setOpen(false);
      setIsPopUp(null);
      router.push('/terms-of-use');
    } else if (params === 'Privacy Policy') {
      router.push('/privacy-policy');

      setIsPopUp(null);
      setOpen(false);
    } else {
      return null;
    }
  };

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
                      <SidebarMenuButton
                        onClick={() => setSelectIdChat(items._id)}
                        className="h-auto flex justify-between items-center"
                        key={key}
                      >
                        {key + 1}. {items.prompt?.text}
                        <DropDownHistory
                          title={<IconDots />}
                          subTitle="History"
                          onDelete={() => handleDeleteChat()}
                        />
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
            <Box className="flex justify-between items-center w-full ">
              <Label className="text-lg font-light">Settings</Label>
              <Button variant="glass" onClick={() => setIsPopUp(null)}>
                <IconX />
              </Button>
            </Box>
            <Box className="grid lg:grid-cols-[1fr_2fr] grid-rows-1 gap-4  w-full">
              <Box className="flex justify-center items-start flex-col mt-10 lg:border-r ">
                {labelSettings.map((items, key) => (
                  <div
                    key={key}
                    className="flex gap-2 cursor-pointer lg:justify-start justify-center items-center  w-full"
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
                  <Box className="w-full h-full">
                    <Label className="text-2xl font-bold">Data :</Label>
                    <Box className="flex justify-between items-center">
                      <Label>Delete All Data Chat :</Label>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          alert.modal({
                            title: 'Delete',
                            deskripsi: 'Are you sure you want to delete all chat history?',
                            icon: 'warning',
                            onConfirm: () => handleDeleteChatUser(),
                            onClose: () => null,
                          })
                        }
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                )}
                {settings === 'about' && (
                  <Box className="w-full h-full">
                    <Label className="text-2xl font-bold">About :</Label>
                    <Box className="flex justify-center items-center flex-col ">
                      {aboutData.map((items, key) => (
                        <Box key={key} className="flex w-full justify-between items-center  my-4">
                          <Label>{items.label}</Label>
                          <Button variant={'glass'} onClick={() => handleRedirect(items.label)}>
                            {items.button}
                          </Button>
                        </Box>
                      ))}
                    </Box>
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
