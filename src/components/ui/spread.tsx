import { SpreedProps } from '@/src/types/ui';

const Spread: React.FC<SpreedProps> = ({ className, orientation, ...props }) => {
  return (
    <div
      className={`
        bg-[var(--shapeV1-parent)]
        ${orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px'} 
        ${className}
      `}
    />
  );
};

export default Spread;
