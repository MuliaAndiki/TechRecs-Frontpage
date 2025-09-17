import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import Api from '@/src/service/props.service';
import { setCurrentUser } from '@/src/stores/authSlice/authSlice';
import { userSchema } from '@/src/types/api';

import { useAppDispatch } from '../../dispatch/dispatch';
import { useAlert } from '../../use-alert';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const router = useRouter();
  return useMutation<TResponse<any>, Error, any>({
    mutationFn: ({ payload }) => Api.auth.Login(payload),
    onSuccess: (res) => {
      const payload: userSchema = {
        user: res.data,
      };
      dispatch(setCurrentUser(payload));

      alert.toast({
        title: 'Succes',
        message: 'Succes Login',
        icon: 'success',
        onVoid: () => {
          router.push('/home');
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
