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
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const UserVerificationForm: FC<Props> = () => {
  return (
    <>
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Verify your account</CardTitle>
          <CardDescription className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            We sent a One-Time Password to your registered email: [user?.email].
            Please enter the code below.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form action="" className="">
            <div className=" flex flex-col gap-3">
              <div>
                <Label htmlFor="otp" className="sr-only">
                  OTP
                </Label>
                <Input placeholder="Enter OTP" id="otp" />
              </div>

              <Button className="w-full">Verify OTP</Button>
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
