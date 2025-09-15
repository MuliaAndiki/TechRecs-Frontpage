import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/src/service/props.service';
import { useAlert } from '../../use-alert';
import { PromptType } from '@/src/types/form';
import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';

export default function useGenerate(options?: {
  onAfterSuccess?: (aiResponse: PromptType) => void;
}) {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: Api.ai.generate,
    onSuccess: (res) => {
      const aiResponse = res.data;
      options?.onAfterSuccess?.(aiResponse);
      queryClient.invalidateQueries({ queryKey: ['request'], exact: false });
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
