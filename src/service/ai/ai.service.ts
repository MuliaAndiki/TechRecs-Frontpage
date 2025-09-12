import { TResponse } from '@/src/pkg/react-query/mutation-wrapper.type';
import { PromptType } from '@/src/types/form';
import AxiosClient from '@/src/utils/axios.client';
class AiApi {
  async generate(payload: PromptType): Promise<TResponse<any>> {
    const res = await AxiosClient.post('/api/ai/generate', payload);
    return res.data;
  }
  async getById(id: string): Promise<TResponse<any>> {
    const res = await AxiosClient.get(`/get/${id}`);
    return res.data;
  }
  async getAll(): Promise<TResponse<any>> {
    const res = await AxiosClient.get('getAll');
    return res.data;
  }
}

export default new AiApi();
