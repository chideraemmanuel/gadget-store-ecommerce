import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

interface Props {}

const UserRegistrationForm: FC<Props> = () => {
  // const form = useForm()

  return (
    <>
      {/* <Form {...form}> */}
      <Card className="shadow-md lg:shadow-none lg:bg-transparent lg:border-none lg:dark:border-none  lg:dark:bg-transparent dark:bg-slate-900 py-3">
        <CardHeader className="text-center">
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            a, veritatis rem ratione qui explicabo!
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          <form action="" className="">
            <div className=" flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="w-full">
                  <Label htmlFor="first_name">First name</Label>
                  <Input placeholder="e.g John" id="first_name" />
                </div>
                <div className="w-full">
                  <Label htmlFor="last_name">Last name</Label>
                  <Input placeholder="e.g Doe" id="last_name" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input placeholder="e.g johndoe@email.com" id="email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Enter password" id="password" />
              </div>
              <div>
                <Label htmlFor="confirm_password">Confirm password</Label>
                <Input placeholder="Confirm password" id="confirm_password" />
              </div>

              <Button className="w-full">Create account</Button>
            </div>
          </form>

          <FormBreak />

          <Button variant="outline" className="bg-transparent" asChild>
            <Link
              // href={generateGoogleOauthUrl()}
              href={'/'}
              className="flex items-center gap-2"
            >
              {/* <FcGoogle /> */}
              <Github />
              <span>Sign in with google</span>
            </Link>
          </Button>
        </CardContent>

        <CardFooter className="text-center w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
          <p className="text-muted-foreground text-sm w-full">
            By clicking continue, you agree to our{' '}
            <Link href={'/'} className="underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={'/'} className="underline">
              Privacy policy
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </Form> */}
    </>
  );
};

export default UserRegistrationForm;

const FormBreak: FC = () => {
  return (
    <div className="relative w-full grid grid-cols-[1fr_auto_1fr] items-center gap-2">
      <div className="bg-border h-[1px]"></div>
      <span className="text-muted-foreground">or</span>
      <div className="bg-border h-[1px]"></div>
    </div>
  );
};
