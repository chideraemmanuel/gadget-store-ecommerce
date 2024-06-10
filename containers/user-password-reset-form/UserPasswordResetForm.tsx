import { FC } from 'react';
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

interface Props {}

const UserPasswordResetForm: FC<Props> = () => {
  return (
    <>
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Reset your password</CardTitle>
          {/* <CardDescription className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            a, veritatis rem ratione qui explicabo!
          </CardDescription> */}
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form action="" className="">
            <div className=" flex flex-col gap-3">
              <div>
                <Label htmlFor="new_password">New password</Label>
                <Input
                  placeholder="Enter your new password"
                  id="new_password"
                />
              </div>
              <div>
                <Label htmlFor="confirm_new_password">
                  Confirm new password
                </Label>
                <Input
                  placeholder="Confirm your new password"
                  id="confirm_new_password"
                />
              </div>

              <Button className="w-full">Reset password</Button>
            </div>
          </form>
        </CardContent>

        {/* <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <p className="text-muted-foreground text-sm w-full">
            <span>Didn't receive OTP? </span>
            <Button
              type="button"
              variant={'link'}
              asChild
              className="h-auto px-0 py-0 text-xs text-primary "
            >
              <Link href={'#'}>Resend here</Link>
            </Button>
          </p>
        </CardFooter> */}
      </Card>
    </>
  );
};

export default UserPasswordResetForm;
