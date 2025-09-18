import { DivProps } from '@/src/types/ui';

export default function View({ as: Tag = 'section', children, className, ...props }: DivProps) {
  return <Tag className={className}>{children}</Tag>;
}
