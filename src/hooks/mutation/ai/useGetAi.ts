import { useQuery } from '@tanstack/react-query';
import Api from '@/src/service/props.service';
export default function useGetAi() {
  return useQuery({
    queryKey: ['request', 'all'],
    queryFn: () => Api.ai.getAll(),
    staleTime: 1000 * 60 * 5,
  });
}
