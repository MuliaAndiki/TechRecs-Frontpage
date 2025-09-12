import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { useMutation } from '@tanstack/react-query';
import Api from '@/src/service/props.service';
import { useAlert } from '../../use-alert';

export default function useGenerate(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: Api.ai.generate,
    onSuccess: (res) => {
      console.log(res);
      alert.toast({
        title: 'Succes',
        message: 'Succes Login',
        icon: 'success',
        onVoid: () => {
          options?.onAfterSuccess?.();
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed ',
        message: 'Failed Generate',
        icon: 'error',
      });
    },
  });
}
