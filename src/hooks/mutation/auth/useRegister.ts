import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { useMutation } from '@tanstack/react-query';
import Api from '@/src/service/props.service';
import { useAlert } from '../../use-alert';
import { useRouter } from 'next/navigation';
export default function useRegister() {
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: ({ payload }) => Api.auth.Register(payload),
    onSuccess: (res) => {
      alert.toast({
        title: 'succes',
        message: 'succes Register',
        icon: 'success',
        onVoid: () => {
          // SETUP DLU
          router.push('/login');
        },
      });
    },
    onError: (err) => {
      console.log(err),
        alert.toast({
          title: 'failed',
          message: 'failed Register',
          icon: 'error',
        });
    },
  });
}
