import { DivProps } from '@/src/types/ui';
export default function Shape({ children, className, as: Tag = 'canvas', ...props }: DivProps) {
  return <div className={`${className} absolute`}>{children}</div>;
}
