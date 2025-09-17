import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import Api from '@/src/service/props.service';
import { logout } from '@/src/stores/authSlice/authSlice';

import { useAppDispatch } from '../../dispatch/dispatch';
import { useAlert } from '../../use-alert';

export default function useLogout() {
  const alert = useAlert();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: () => Api.auth.Logout(),
    onSuccess: (res) => {
      alert.toast({
        title: 'Succes',
        message: 'Logout Succes',
        icon: 'success',
        onVoid: () => {
          queryClient.clear();
          router.push('/');
        },
      });
    },
    onError: (err) => {
      console.error(err);
      alert.toast({
        title: 'Failed',
        message: 'Logout Failed',
        icon: 'error',
      });
    },
  });
}
