import { useQuery } from '@tanstack/react-query';

import Api from '@/src/service/props.service';

export default function useGetByUser(id: string) {
  return useQuery({
    queryKey: ['request', 'user', id],
    queryFn: () => Api.ai.getByUser(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
}
