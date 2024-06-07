'use client';

import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import { Separator } from '@/components/ui/separator';
import { FC } from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
import Filter from '@/components/Filter';

interface Props {}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterItems = [
  {
    _id: '1',
    name: 'Laptop',
  },
  {
    _id: '2',
    name: 'Phones',
  },
  {
    _id: '3',
    name: 'Headphones',
  },
];

const ProductsPage: FC<Props> = () => {
  return (
    <section className="">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr,_5fr] pt-7">
        <aside className="self-start sticky top-[70px] md:top-20 flex flex-col gap-3">
          <Filter
            label="Categories"
            filterItems={filterItems}
            searchParamKey="category"
          />

          <Drawer>
            <DrawerTrigger className="inline-block md:hidden">
              Open Drawer
            </DrawerTrigger>
            <DrawerContent>
              <span>Drawer Content!</span>
            </DrawerContent>
          </Drawer>
        </aside>

        <div className="px-0 md:px-2 md:border-l">
          <SectionHeader>Products</SectionHeader>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-7">
            {array.map((num, index) => (
              <ProductCard key={index} />
            ))}
          </div>

          <div className="">
            <span>Pagination</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;

// <RadioGroup defaultValue="option-one">
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="option-one" id="option-one" />
//     <Label htmlFor="option-one">Option One</Label>
//   </div>
//   <div className="flex items-center space-x-2">
//     <RadioGroupItem value="option-two" id="option-two" />
//     <Label htmlFor="option-two">Option Two</Label>
//   </div>
// </RadioGroup>;

// ****************************
// ****************************
// ****************************

// import { Bold, Italic, Underline } from 'lucide-react';

// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

// export function ToggleGroupDemo() {
//   return (
//     <ToggleGroup type="single">
//       <ToggleGroupItem value="bold" aria-label="Toggle bold">
//         <Bold className="h-4 w-4" />
//       </ToggleGroupItem>
//       <ToggleGroupItem value="italic" aria-label="Toggle italic">
//         <Italic className="h-4 w-4" />
//       </ToggleGroupItem>
//       <ToggleGroupItem value="underline" aria-label="Toggle underline">
//         <Underline className="h-4 w-4" />
//       </ToggleGroupItem>
//     </ToggleGroup>
//   );
// }

// ****************************
// ****************************
// ****************************

// [&:checked+label]:bg-[#bfb]

// ****************************
// ****************************
// ****************************

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

// export function PaginationDemo() {
//   return (
//     <Pagination>
//       <PaginationContent>
//         <PaginationItem>
//           <PaginationPrevious href="#" />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">1</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#" isActive>
//             2
//           </PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationLink href="#">3</PaginationLink>
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationEllipsis />
//         </PaginationItem>
//         <PaginationItem>
//           <PaginationNext href="#" />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   )
// }
