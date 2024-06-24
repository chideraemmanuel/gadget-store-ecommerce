import { useToast } from '@/components/ui/use-toast';
import axios from '@/config/axios';
import { useMutation } from 'react-query';

const resendOtp = async (email: string) => {
  const response = await axios.post('/auth/otp/resend', { email });

  console.log('response from resend otp hook', response);

  return response.data;
};

const useResendOtp = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ['resend otp'],
    mutationFn: resendOtp,
    onSuccess: () => {
      toast({
        description: 'OTP Resent Successfully',
      });
    },
    onError: (error: any) => {
      toast({
        description: `${
          error?.response?.data?.error || error?.message || 'OTP Resend Failed'
        }`,
        variant: 'destructive',
      });
    },
  });
};

export default useResendOtp;
