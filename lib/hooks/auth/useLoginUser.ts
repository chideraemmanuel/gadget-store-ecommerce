import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { LoginCredentialsTypes } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';

interface Params {
  credentials: LoginCredentialsTypes;
  redirectPath?: string;
}

const login = async ({ credentials, redirectPath }: Params) => {
  const response = await axios.post('/auth/login', credentials);

  console.log('response from login user hook', response);

  return { data: response.data, redirectPath };
};

const useLoginUser = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['login user'],
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-current-user']);
      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-user-cart']);

      const redirectPath = data.redirectPath ?? '/';

      console.log('data redirect path', data.redirectPath);
      console.log('redirect path', redirectPath);

      toast({
        description: 'Login Successful!',
      });

      router.replace(redirectPath, { scroll: false });
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Login failed - Something went wrong'
        }`,
        variant: 'destructive',
      });
    },
  });
};

export default useLoginUser;
