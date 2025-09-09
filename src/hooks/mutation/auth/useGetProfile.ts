import { useQuery } from '@tanstack/react-query';
import Api from '@/src/service/props.service';

export default function useGetProfile() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => Api.auth.GetProfile(),
    staleTime: 1000 * 60 * 5,
  });
}
