import { DivProps } from '@/src/types/ui';

const Form: React.FC<DivProps> = ({ onClick, className, children, as: Tag = 'form' }) => {
  return (
    <Tag className={className} onClick={onClick}>
      {children}
    </Tag>
  );
};

export default Form;
