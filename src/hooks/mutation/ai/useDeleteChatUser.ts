import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import Api from '@/src/service/props.service';

import { useAlert } from '../../use-alert';

export default function useDeleteChatUser(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: () => Api.ai.deleteChatByUser(),
    onSuccess: (res) => {
      alert.toast({
        title: 'Succesfully',
        message: 'Succesfully Delete Chat User All',
        icon: 'success',
        onVoid: () => {
          options?.onAfterSuccess?.();
          queryClient.invalidateQueries({ queryKey: ['request'], exact: false });
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Error',
        message: 'Failed Error Delete Chat User',
      });
    },
  });
}
