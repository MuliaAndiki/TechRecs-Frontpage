import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { useMutation } from '@tanstack/react-query';
import { useAlert } from '../../use-alert';
import AuthApi from '@/src/service/auth/auth.service';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: ({ payload }) => AuthApi.Login(payload),
    onSuccess: (res) => {
      alert.toast({
        title: 'Succes',
        message: 'Succes Login',
        icon: 'success',
        onVoid: () => {
          // SETUP DLU
          router.push('');
        },
      });
    },
    onError: (err) => {
      console.log(err);
      alert.toast({
        title: 'Failed',
        message: 'Failed Login',
        icon: 'error',
      });
    },
  });
};
