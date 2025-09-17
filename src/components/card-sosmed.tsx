import { Label } from '@radix-ui/react-dropdown-menu';
import { IconBrandDiscord, IconBrandGithub, IconBrandTiktok, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import { useRef } from 'react';

import { AnimatedBeam } from '@/src/components/magicui/animated-beam';
import { Icons } from '@/src/config/components.config';
import UseTooltip from '@/src/core/components/tooltip';
import { cn } from '@/src/lib/utils';
import { SosmedCardType } from '@/src/types/components';

import { Circle } from './partial/circle';
import Box from './ui/Box';

const CardSosmed = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  const rightCircles: SosmedCardType = {
    discord: {
      icon: IconBrandDiscord,
      name: 'discord',
      params: '#',
      ref: div2Ref,
      delay: 6,
      curvature: 200,
    },
    tiktok: {
      icon: IconBrandTiktok,
      params: 'https://www.tiktok.com/@dikzzycde',
      name: 'tiktok',
      ref: div3Ref,
      delay: 7,
      curvature: 100,
    },
    github: {
      icon: IconBrandGithub,
      params: 'https://github.com/MuliaAndiki',
      name: 'github',
      ref: div4Ref,
      delay: 8,
      curvature: -100,
    },
    email: {
      icon: IconMail,
      params: '#',
      name: 'email',
      ref: div5Ref,
      delay: 9,
      curvature: -200,
    },
  };
  return (
    <div
      className={cn(
        'relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10 border rounded-lg bg-[var(--shapeV1-parent)]/5 flex-col '
      )}
      ref={containerRef}
    >
      <Box className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 ">
        <Box className="flex justify-center flex-col">
          <UseTooltip content="user">
            <Link href="">
              <Circle ref={div1Ref}>
                <Icons.IconUser />
              </Circle>
            </Link>
          </UseTooltip>
        </Box>
        <Box className="flex justify-between flex-col">
          {Object.entries(rightCircles).map(([key, item]) => (
            <UseTooltip key={key} content={item.name}>
              <Link href={item.params}>
                <Circle ref={item.ref}>
                  <item.icon />
                </Circle>
              </Link>
            </UseTooltip>
          ))}
        </Box>
      </Box>
      {Object.entries(rightCircles).map(([key, items]) => (
        <AnimatedBeam
          key={key}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={items.ref}
          duration={6}
          delay={items.delay}
          pathColor="#C30EFF"
          gradientStopColor="#471EFF"
          curvature={items.curvature}
        />
      ))}
      <Box className="w-full flex flex-col">
        <Label className="text-2xl font-light">Contact Person</Label>
        <p className="text-base text-muted-foreground mt-2">
          Feel free to reach out if you’d like to collaborate or have any questions.
        </p>
      </Box>
    </div>
  );
};

export default CardSosmed;
