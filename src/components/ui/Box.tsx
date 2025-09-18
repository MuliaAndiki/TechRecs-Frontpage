import { DivProps } from '@/src/types/ui';
export default function Box({ as: Tag = 'div', children, className, ...props }: DivProps) {
  return <Tag className={className}>{children}</Tag>;
}
