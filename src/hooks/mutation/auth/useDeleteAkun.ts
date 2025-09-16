import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '@/src/service/props.service';
import { useAlert } from '../../use-alert';
import { useRouter } from 'next/navigation';

export default function useDeleteAkun(options?: { onAfterSuccess?: () => void }) {
  const alert = useAlert();
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: () => Api.auth.Delete(),
    onSuccess: (res) => {
      alert.toast({
        title: 'Succesfuly',
        message: 'Delete Akun Succesfuly',
        icon: 'success',
        onVoid: () => {
          options?.onAfterSuccess?.();
          router.push('/login');
          queryClient.clear();
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'Delete Akun Failed',
        icon: 'error',
      });
    },
  });
}
