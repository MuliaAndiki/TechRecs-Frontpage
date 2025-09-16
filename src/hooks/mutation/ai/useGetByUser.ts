import Api from '@/src/service/props.service';
import { useQuery } from '@tanstack/react-query';

export default function useGetByUser(id: string) {
  return useQuery({
    queryKey: ['request', 'user', id],
    queryFn: () => Api.ai.getByUser(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}
