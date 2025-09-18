import { Label } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import Shape from '@/src/components/ui/shape';
import { FooterConfig } from '@/src/config/app.config';
import { SosmedApp } from '@/src/config/app.config';

export default function FooterApp() {
  return (
    <footer>
      <Box className="bg-foreground/10 flex justify-center items-center flex-col p-14 relative overflow-clip">
        <Shape className="w-130 h-130 bg-[var(--shapeV1-parent)] rounded-full z-[-5] blur-3xl translate-y-70 translate-x-30 " />
        <Shape className="w-130 h-130 bg-[var(--shapeV1-child)] rounded-full z-[-5] blur-3xl translate-y-70 -translate-x-30 " />
        <Box className="flex flex-wrap lg:flex-nowrap justify-between items-center w-full ">
          <Box className="flex justify-start items-start flex-col">
            <Label className="text-5xl font-semibold text-[var(--shapeV1-child)] text-center w-full lg:w-auto">
              TechRecs
            </Label>
            <Label className="text-3xl font-light w-full max-w-80 my-10">
              Technology AI Generator Website
            </Label>
          </Box>
          <Box className="flex justify-start items-start flex-col gap-4">
            <Label className="text-4xl ">Explore</Label>
            {FooterConfig.flatMap(({ Explore }) =>
              Explore.map((items, key) => (
                <Link href={items.params} key={key}>
                  <Label className="text-lg font-light">{items.title}</Label>
                </Link>
              ))
            )}
          </Box>
          <Box className="flex justify-start items-start flex-col gap-4">
            <Label className="text-4xl ">Menu</Label>
            {FooterConfig.flatMap(({ Menu }) =>
              Menu.map((items, key) => (
                <Link href={items.params} key={key}>
                  <Label className="text-lg font-light">{items.title}</Label>
                </Link>
              ))
            )}
          </Box>
          <Box className="flex justify-start items-start flex-col gap-4">
            <Label className="text-4xl ">OFFICE LOCATION</Label>
            <Label className="text-lg font-light">Address Line Lorem Ipsum Dolore Sit Amet</Label>
          </Box>
        </Box>
        <Box className="w-full flex justify-center items-center flex-col">
          <Box className="flex  gap-4 items-center w-full text-lg">
            <Label>Terms</Label>
            <Label>Privacy</Label>
            <Label>Cookies</Label>
          </Box>
          <Box className="w-full flex  items-center">
            <Label className="text-lg">© 2025 By TechRecs. All Rights Reserved.</Label>
          </Box>
          <Box className="flex  items-center gap-4">
            {SosmedApp.map((items, key) => (
              <Link href={items.params} key={key}>
                <Button variant="ghost">
                  <items.icon className="size-5" />
                </Button>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
