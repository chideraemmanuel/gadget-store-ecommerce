// export interface UserInfoTypes {
//   first_name: string;
//   last_name: string;
//   verified: boolean;
//   auth_type: 'MANUAL_AUTH_SERVICE' | 'GOOGLE_AUTH_SERVICE';
//   role: string;
//   email: string;
// }

export interface ProductTypes {
  _id: string;
  product_name: string;
  // brand: string;
  brand: {
    _id: string;
    name: string;
    brand_logo: string;
  };
  description: string;
  price: number;
  category: {
    _id: string;
    name: string;
    billboard: {
      _id: string;
      name: string;
      head_text: string;
      paragraph?: string;
      billboard_image: string;
    };
  };
  product_image: string;
  count_in_stock: number;
  featured: boolean;
}

export interface ProductsReturnTypes {
  data: ProductTypes[];
  pagination: PaginationTypes;
}

export interface CategoryTypes {
  _id: string;
  name: string;
  billboard: {
    _id: string;
    name: string;
    head_text: string;
    paragraph?: string;
    billboard_image: string;
  };
}
export interface CategoryReturnTypes {
  data: CategoryTypes[];
  pagination: PaginationTypes;
}

export interface BrandTypes {
  _id: string;
  name: string;
  brand_logo: string;
}

export interface BrandReturnTypes {
  data: BrandTypes[];
  pagination: PaginationTypes;
}

export interface BillboardTypes {
  _id: string;
  name: string;
  head_text: string;
  paragraph?: string;
  billboard_image: string;
}

export interface BillboardReturnTypes {
  data: BillboardTypes[];
  pagination: PaginationTypes;
}

export interface PaginationTypes {
  total_records: number;
  total_pages: number;
  current_page: number;
  previous_page: number;
  next_page: number;
}

export interface CartItemTypes {
  product: ProductTypes;
  quantity: number;
}

export interface CartReturnTypes {
  user: AuthReturnTypes;
  cart_items: CartItemTypes[];
}

export interface BillingAddressTypes {
  receipent_name: string;
  address: string;
  postal_code: string;
  city: string;
  state: string;
  country: string;
}

export type OrderItemTypes = CartItemTypes;

export interface OrderTypes {
  _id: string;
  user: string;
  order_items: OrderItemTypes[];
  billing_address: BillingAddressTypes;
  status: 'pending' | 'shipped' | 'delivered';
  order_date: Date;
  total_price: number;
}

export interface OrderReturnTypes {
  data: OrderTypes[];
  pagination: PaginationTypes;
}

export interface RegistrationCredentialsTypes {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginCredentialsTypes {
  email: string;
  password: string;
}

export interface AuthReturnTypes {
  first_name: string;
  last_name: string;
  email: string;
  verified: boolean;
  auth_type: 'MANUAL_AUTH_SERVICE' | 'GOOGLE_AUTH_SERVICE';
  role: string;
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export interface SearchParams {
  [key: string]: string | string[] | undefined;
}
