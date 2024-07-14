import Link from 'next/link';
import { FC } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';
import {
  Calendar,
  DollarSign,
  ShoppingBag,
  ShoppingBasket,
} from 'lucide-react';
import { OrderTypes } from '@/types';
import moment from 'moment';

interface Props {
  order: OrderTypes;
}
// order id
// order date
// order amount
// how many items
// status

const OrdersListItem: FC<Props> = ({ order }) => {
  const { _id, order_items, order_date, status, total_price, billing_address } =
    order;

  return (
    <>
      <Link href={'#'}>
        <Card className="dark:bg-slate-900 hover:bg-accent dark:hover:bg-accent transition-colors">
          <CardHeader className="flex flex-row justify-between items-start gap-7 p-3 md:p-4">
            <CardTitle className="flex flex-wrap items-center gap-1 text-lg md:text-xl">
              <span>Order ID:</span>
              <span className="font-medium text-base md:text-md">#{_id}</span>
            </CardTitle>

            <Badge
              variant={'outline'}
              className="border-primary text-primary capitalize"
            >
              {status}
            </Badge>
          </CardHeader>

          <CardContent className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5 text-muted-foreground p-3 md:p-4">
            <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <ShoppingBag width={20} />
              <span>{order_items.length}</span>
            </div>
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <DollarSign width={20} />
              {/* <span>₦300,000</span> */}
              <span>₦{total_price}</span>
            </div>
            <div className="flex items-center gap-1 text-sm sm:text-base">
              <Calendar width={20} />
              {/* <span>{order_date.toLocaleString()}</span> */}
              <span>{moment(order_date).format('MMM Do YYYY, h:mm A')}</span>
            </div>
          </CardContent>

          {/* <CardFooter>
            <Badge variant={'outline'}>Pending</Badge>
          </CardFooter> */}
        </Card>
      </Link>
    </>
  );
};

export default OrdersListItem;
