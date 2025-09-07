import AxiosClient from '@/src/utils/axios.client';
import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { FormLoginType, FormRegisterType } from '@/src/types/form';
class AuthApi {
  async Login(payload: FormLoginType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/login', payload);
    return res.data;
  }
  async Register(payload: FormRegisterType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/', payload);
    return res.data;
  }
}

export default new AuthApi();
