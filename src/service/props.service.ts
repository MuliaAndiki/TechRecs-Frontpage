import AiApi from '@/src/service/ai/ai.service';
import AuthApi from '@/src/service/auth/auth.service';

class Api {
  static auth = AuthApi;
  static ai = AiApi;
}

export default Api;
