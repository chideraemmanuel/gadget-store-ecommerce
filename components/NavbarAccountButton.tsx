'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogIn, LogOut, User, User2 } from 'lucide-react';
import useGetCurrentUser from '@/lib/hooks/auth/useGetCurrentUser';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import useLogoutUser from '@/lib/hooks/auth/useLogoutUser';
import FullScreenLoader from './FullScreenLoader';

interface Props {}

const NavbarAccountButton: FC<Props> = () => {
  const { data: user, isLoading, isError, error } = useGetCurrentUser();

  const { mutate: logout, isLoading: isLoggingOut } = useLogoutUser();

  const getInitials = (firstName: string, lastName: string) => {
    const firstNameInitial = firstName.charAt(0);
    const lastNameInitial = lastName.charAt(0);

    return `${firstNameInitial}${lastNameInitial}`;
  };

  // if (isLoggingOut) {
  //   return <FullScreenLoader />;
  // }

  return (
    <>
      {isLoggingOut && <FullScreenLoader />}

      <DropdownMenu>
        {isLoading && (
          <Skeleton className="relative flex shrink-0 h-10 w-10 rounded-full" />
        )}

        {isError && (
          <Button
            asChild
            variant={'ghost'}
            size={'sm'}
            className="px-1 sm:px-2"
          >
            <Link
              href={'/auth/login'}
              className="inline-flex items-center justify-center gap-1 text-sm"
            >
              <LogIn
                // width={20}
                className="w-full md:w-1/2"
              />
              <span className="hidden md:inline-block">Sign in</span>
            </Link>
          </Button>
        )}

        {user && (
          // <DropdownMenuTrigger className="inline-flex items-center justify-center gap-1 text-sm">
          <DropdownMenuTrigger className="text-sm">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarImage src="" />
              {/* <AvatarFallback>CN</AvatarFallback> */}
              <AvatarFallback>
                {getInitials(user?.first_name, user?.last_name)}
              </AvatarFallback>
            </Avatar>

            {/* <span className="hidden md:inline-block">Account</span> */}
          </DropdownMenuTrigger>
        )}

        <DropdownMenuContent className="mr-4">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-2"
            // onClick={() => logout()}
          >
            <User2 className="h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center gap-2"
            onClick={() => logout()}
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavbarAccountButton;
