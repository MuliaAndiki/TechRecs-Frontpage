import { forwardRef } from 'react';
import { cn } from '@/src/lib/utils';
export const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'z-10 flex size-12 items-center justify-center rounded-full border-2 bg-foreground/20 hover:bg-[var(--shapeV1-parent)]/20 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ',
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = 'Circle';
