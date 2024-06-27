import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { SERVER_QUERY_KEYS } from '@/constants';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';

const verifyUser = async (credentials: { email: string; otp: number }) => {
  const response = await axios.post('/auth/verify', credentials);

  console.log('response from verify user hook', response);

  return response.data;
};

const useVerifyUser = () => {
  const router = useRouter();
  const { toast } = useToast();

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['verify user'],
    mutationFn: verifyUser,
    onSuccess: () => {
      toast({
        description: 'Email Verified Successfully',
      });

      queryClient.invalidateQueries(SERVER_QUERY_KEYS['get-current-user']);

      router.replace('/');
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Email Verification Failed'
        }`,
        variant: 'destructive',
      });
    },
  });
};

export default useVerifyUser;
