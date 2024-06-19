import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { LoginCredentialsTypes } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

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

  return useMutation({
    mutationKey: ['login user'],
    mutationFn: login,
    onSuccess: (data) => {
      const redirectPath = data.redirectPath ?? '/';

      toast({
        description: 'Login Successful!',
      });

      router.replace(redirectPath);
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
