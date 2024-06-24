import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

const initiate = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ['initiate password reset'],
    mutationFn: async (email: string) => {
      const response = await axios.post('auth/reset-password/initiate', {
        email,
        redirect_url: 'http://localhost:3000/auth/reset-password',
      });

      console.log('response from initiate password reset hook', response);

      return response.data;
    },
    onSuccess: () => {
      toast({
        description: 'Reset Email Sent Successfully',
      });
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Reset Email Send Failed'
        }`,
        variant: 'destructive',
      });
    },
  });
};

const complete = () => {
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationKey: ['complete password reset'],
    mutationFn: async ({
      email,
      reset_string,
      new_password,
    }: {
      email: string;
      reset_string: string;
      new_password: string;
    }) => {
      const response = await axios.post('auth/reset-password', {
        email,
        reset_string,
        new_password,
      });

      console.log('response from complete password reset hook', response);

      return response.data;
    },
    onSuccess: () => {
      toast({
        description: 'Password Reset Successfully',
      });

      router.push('/auth/login');
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Password Reset Failed'
        }`,
        variant: 'destructive',
      });
    },
  });
};

const useResetPassword = () => {
  return { initiate, complete };
};

export default useResetPassword;
