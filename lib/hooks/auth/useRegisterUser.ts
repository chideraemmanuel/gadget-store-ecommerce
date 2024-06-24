import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { RegistrationCredentialsTypes } from '@/types';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';

const register = async ({
  credentials,
  redirectPath,
}: {
  credentials: RegistrationCredentialsTypes;
  redirectPath?: string;
}) => {
  const response = await axios.post('/auth/register', credentials);

  console.log('response from register user hook', response);

  return { data: response.data, redirectPath };
};

const useRegisterUser = () => {
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationKey: ['register user'],
    mutationFn: register,
    onSuccess: (data: {
      data: RegistrationCredentialsTypes;
      redirectPath?: string;
    }) => {
      const redirectPath = data.redirectPath ?? '/';

      toast({
        description: 'Registration Successful!',
      });

      router.replace(redirectPath);
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error ||
          error?.message ||
          'Registration failed - Something went wrong'
        }`,
        variant: 'destructive',
      });
    },
  });
};

export default useRegisterUser;
