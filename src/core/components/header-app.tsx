'use client';
import { Label } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Box from '@/src/components/ui/Box';
import { Button } from '@/src/components/ui/button';
import { SidebarTrigger } from '@/src/components/ui/sidebar';
import { NavbarApp } from '@/src/config/app.config';
import { SosmedApp } from '@/src/config/app.config';
import { useIsMobile } from '@/src/hooks/use-mobile';

import ToggleTheme from './toggle-theme';

export default function HeaderApp() {
  const Mobile = useIsMobile();
  const pathname = usePathname();
  const hidden = ['/login'];
  const show = ['/home'];
  const hiddenToggle = ['/home'];

  return (
    <nav>
      <div className="flex justify-between items-center w-full p-2">
        <Box className="flex">
          <Label className="text-lg font-bold">TechRecs</Label>
          {show.includes(pathname) && <SidebarTrigger />}
        </Box>
        <Box className="flex justify-center items-center gap-4">
          {!Mobile ||
            (hidden.includes(pathname) && (
              <>
                {NavbarApp.map((items, key) => (
                  <Link key={key} href={items.params}>
                    <Label className="text-lg font-light">{items.title}</Label>
                  </Link>
                ))}
              </>
            ))}
        </Box>
        <Box className="flex justify-center items-center gap-4">
          {!Mobile && (
            <>
              {SosmedApp.map((items, key) => (
                <Link href={items.params} key={key}>
                  <Button variant="ghost">
                    <items.icon className="size-5" />
                  </Button>
                </Link>
              ))}
            </>
          )}

          {!hiddenToggle.includes(pathname) && <ToggleTheme />}
        </Box>
      </div>
    </nav>
  );
}
