import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { AuthReturnTypes } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from 'react-query';

const logout = async () => {
  const response = await axios.get('/auth/logout');

  console.log('response from use logout user hook', response);

  return response.data;
};

const useLogoutUser = () => {
  const router = useRouter();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['logout user'],
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(
        'get current user',
        // @ts-ignore
        (oldUserData: AuthReturnTypes) => {
          return null;
        }
      );
      queryClient.setQueryData(
        'get user cart',
        // @ts-ignore
        (oldCartData: AuthReturnTypes) => {
          return null;
        }
      );

      // queryClient.invalidateQueries('get current user');
      // queryClient.invalidateQueries('get user cart');

      toast({
        description: 'Logout Successful',
      });

      // router.replace('/auth/login');
    },
    onError: (error: any) => {
      console.log(error);

      toast({
        description: `${
          error?.response?.data?.error || error?.message || 'Logout Failed'
        }`,
        variant: 'destructive',
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries('get current user');
      queryClient.invalidateQueries('get user cart');
    },
  });
};

export default useLogoutUser;
