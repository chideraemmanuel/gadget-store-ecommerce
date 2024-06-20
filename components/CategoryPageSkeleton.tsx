import { FC } from 'react';
import { Skeleton } from './ui/skeleton';

interface Props {}

const array = [1, 2, 3, 4, 5, 6];

const CategoryPageSkeleton: FC<Props> = () => {
  return (
    <>
      <Skeleton className="h-[50vh] w-full" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
        <aside className="self-start sticky md:top-20 hidden md:flex md:flex-col md:gap-3 max-h-[80vh]">
          <div className="flex items-center justify-center">
            <span className="text-muted-foreground">Loading filters...</span>
          </div>
        </aside>

        <div className="px-0 md:px-2 md:border-l">
          <div className="flex items-start justify-between">
            {/* header text */}
            <Skeleton className="w-60 h-9" />
            {/* filter drawer button, sho only on mobile */}
            <Skeleton className="inline-block md:hidden w-10 h-12" />
          </div>

          {/* product cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-7">
            {array.map((num, index) => (
              <Skeleton key={index} className="min-h-[350px]" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPageSkeleton;
