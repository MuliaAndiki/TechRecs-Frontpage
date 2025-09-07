import { Circle } from '@/src/components/partial/circle';
import { useRef } from 'react';
import { AnimatedBeam } from '@/src/components/magicui/animated-beam';
import { Icons } from '@/src/config/components.config';
import { AiCardType } from '@/src/types/components';
import UseTooltip from '../core/components/tooltip';
import Box from './ui/Box';
import { Label } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { DotPattern } from '@/src/components/magicui/dot-pattern';

const CardAi = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const AiComponents: AiCardType = {
    straight: {
      user: {
        icon: Icons.IconUser,
        name: 'user',
        params: '#',
        ref: div1Ref,
        delay: 4,
      },
      techRecs: {
        icon: Icons.IconBrandOpenai,
        name: 'user',
        params: '#',
        ref: div2Ref,
        delay: 5,
      },
    },
    cros: {
      deepseek: {
        icon: Icons.IconBrandDiscord,
        name: 'Deepseek',
        params: '#',
        ref: div3Ref,
        delay: 5,

        from: div2Ref,
      },
      gemini: {
        icon: Icons.IconActivity,
        name: 'Gemini',
        params: '#',
        ref: div4Ref,
        from: div2Ref,
        delay: 5,
      },
    },
    back: {
      deepseek: {
        icon: Icons.IconBrandDiscord,
        name: 'Deepseek',
        params: '#',
        ref: div3Ref,
        delay: 8,
        curvature: 120,
        from: div1Ref,
      },
      gemini: {
        icon: Icons.IconActivity,
        name: 'Gemini',
        params: '#',
        ref: div4Ref,
        from: div1Ref,
        delay: 10,
        curvature: -120,
      },
    },
  };
  return (
    <Box className="w-full flex relative justify-center items-center h-[400px] flex-col bg-[var(--shapeV1-parent)]/5 rounded-lg border overflow-hidden p-10 z-0">
      <div
        className="relative flex w-full max-w-full h-full items-center justify-center   "
        ref={containerRef}
      >
        <Box className="flex flex-row justify-between w-full  ">
          {Object.entries(AiComponents.straight).map(([key, items]) => (
            <UseTooltip key={key} content={items.name}>
              <Link href={items.params}>
                <Circle ref={items.ref}>
                  <items.icon />
                </Circle>
              </Link>
            </UseTooltip>
          ))}
        </Box>
        <Box className="flex justify-between flex-col h-full w-full max-w-40   items-end ">
          {Object.entries(AiComponents.cros).map(([key, items]) => (
            <UseTooltip key={key} content={items.name}>
              <Link href={items.params}>
                <Circle ref={items.ref}>
                  <items.icon />
                </Circle>
              </Link>
            </UseTooltip>
          ))}
        </Box>
        {Object.entries(AiComponents.straight).map(([key, items]) => (
          <AnimatedBeam
            duration={8}
            key={key}
            containerRef={containerRef}
            fromRef={div1Ref}
            pathColor="#C30EFF"
            gradientStopColor="#471EFF"
            toRef={items.ref}
            delay={items.delay}
          />
        ))}
        {Object.entries(AiComponents.cros).map(([key, items]) => (
          <AnimatedBeam
            duration={8}
            key={key}
            containerRef={containerRef}
            fromRef={items.from}
            toRef={items.ref}
            delay={items.delay}
            pathColor="#C30EFF"
            gradientStopColor="#471EFF"
          />
        ))}
        {Object.entries(AiComponents.back).map(([key, items]) => (
          <AnimatedBeam
            duration={8}
            key={key}
            containerRef={containerRef}
            fromRef={items.from}
            toRef={items.ref}
            delay={items.delay}
            reverse
            curvature={items.curvature}
            pathColor="#C30EFF"
            gradientStopColor="#471EFF"
          />
        ))}
      </div>
      <Box className="flex justify-center items-center flex-col">
        <Label className="text-2xl font-light">How It Works</Label>
        <p className="text-base text-muted-foreground mt-2 max-w-xl">
          Here’s a quick overview of how our website works, making it simple and seamless for you to
          explore, connect, and collaborate.
        </p>
      </Box>
    </Box>
  );
};

export default CardAi;
