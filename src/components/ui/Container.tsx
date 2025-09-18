import { DivProps } from '@/src/types/ui';

export default function Container({ as: Tag = 'main', children, className, ...props }: DivProps) {
  return <Tag className={className}>{children}</Tag>;
}
