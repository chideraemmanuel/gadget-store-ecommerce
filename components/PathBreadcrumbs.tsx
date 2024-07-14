'use client';

import { FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface PathnameTypes {
  label: string;
  href: string;
}

interface Props {
  pathnames: PathnameTypes[];
}

const PathBreadcrumb: FC<Props> = ({ pathnames }) => {
  const pathname = usePathname();

  // const pathnames = pathname.split('/')

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {pathnames.map((pathname, index) => {
            if (index + 1 === pathnames.length) {
              return (
                <BreadcrumbItem>
                  <BreadcrumbPage>{pathname.label}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            } else {
              if (index === 1 && pathnames.length > 3) {
                return (
                  <>
                    <BreadcrumbEllipsis />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={`${pathname.href}`}>{pathname.label}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                );
              } else {
                return (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={`${pathname.href}`}>{pathname.label}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                );
              }
            }
          })}

          {/* {pathnames.map((pathname, index) => {
            if (index + 1 === pathnames.length) {
              return (
                <BreadcrumbItem>
                  <BreadcrumbPage>{pathname.label}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            } else {
              return (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={`${pathname.href}`}>{pathname.label}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              );
            }
          })} */}

          {/* <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/`}></Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem> */}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default PathBreadcrumb;
