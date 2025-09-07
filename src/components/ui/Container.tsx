import { DivProps } from '@/src/types/ui';

export default function Container({ as: Tag = 'main', children, className, ...props }: DivProps) {
  return <div className={className}>{children}</div>;
}
