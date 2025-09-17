import { useMutation, useQueryClient } from '@tanstack/react-query';

import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import Api from '@/src/service/props.service';

import { useAlert } from '../../use-alert';

export default function useDeleteChatById(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: ({ userId, chatId }) => Api.ai.deleteChatById(userId, chatId),
    onSuccess: (res) => {
      alert.toast({
        title: 'Succesfuly',
        message: 'Delete Chat Succesfuly',
        icon: 'success',
        onVoid: () => {
          options?.onAfterSuccess?.();
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'Delete Chat Failed',
        icon: 'error',
      });
    },
  });
}
