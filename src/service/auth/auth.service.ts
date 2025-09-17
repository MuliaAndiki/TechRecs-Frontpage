import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { FormLoginType, FormRegisterType } from '@/src/types/form';
import AxiosClient from '@/src/utils/axios.client';

class AuthApi {
  async Login(payload: FormLoginType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/login', payload);
    return res.data;
  }
  async Register(payload: FormRegisterType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/', payload);
    return res.data;
  }
  async Logout(): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/auth/logout');
    return res.data;
  }
  async GetProfile(): Promise<TResponse<any>> {
    const res = await AxiosClient.get('/api/auth/getProfile');
    return res.data;
  }
  async Delete(): Promise<TResponse<any>> {
    const res = await AxiosClient.delete('/api/auth/delete');
    return res.data;
  }
}

export default new AuthApi();
