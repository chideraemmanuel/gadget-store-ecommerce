'use client';

import SplashScreen from '@/components/SplashScreen';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import useResendOtp from '@/lib/hooks/auth/useResendOtp';
import useVerifyUser from '@/lib/hooks/auth/useVerifyUser';
import { AuthReturnTypes } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  user: AuthReturnTypes;
}

const UserVerificationForm: FC<Props> = ({ user }) => {
  const [otp, setOtp] = useState('');
  const [isOtpComplete, setIsOtpComplete] = useState(false);

  const router = useRouter();

  const { mutate: resendOtp, isLoading: isResendingOtp } = useResendOtp();
  const { mutate: verifyUser, isLoading: isVerifyingUser } = useVerifyUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('submitted otp', otp);

    verifyUser({
      // email: 'chidera@gmail.com',
      email: user?.email!,
      // otp: +otp,
      otp: otp,
    });
  };

  return (
    <>
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Verify your account</CardTitle>
          <CardDescription className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            We sent a One-Time Password to your registered email: {user?.email}.
            Please enter the code below.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className=" flex flex-col gap-3">
              <div>
                <Label htmlFor="otp" className="sr-only">
                  OTP
                </Label>
                {/* <Input placeholder="Enter OTP" id="otp" /> */}
                <InputOTP
                  containerClassName="justify-center"
                  maxLength={6}
                  id="otp"
                  disabled={isVerifyingUser}
                  value={otp}
                  onChange={(newValue) => {
                    setOtp(newValue);

                    if (newValue.length === 6) {
                      setIsOtpComplete(true);
                      return;
                    }
                    setIsOtpComplete(false);
                  }}
                >
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTP>
              </div>

              <Button
                className="w-full flex items-center gap-2"
                disabled={!isOtpComplete || isVerifyingUser}
              >
                {isVerifyingUser && <div className="spinner"></div>}
                <span>Verify OTP</span>
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <p className="text-muted-foreground text-sm w-full">
            <span>Didn't receive OTP? </span>
            <Button
              type="button"
              variant={'link'}
              className="h-auto px-0 py-0 text-xs text-primary "
              onClick={() => resendOtp('chidera@gmail.com')}
              disabled={isResendingOtp || isVerifyingUser}
            >
              Resend here
            </Button>
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default UserVerificationForm;

// TODO: use OTP input
