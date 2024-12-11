import { http, HttpResponse } from 'msw';
import { OrderPayload } from '@/types/order.ts';
import { User } from '@/types/user.ts';
import products from './Endpoints/products.json';
import orders from './Endpoints/orders.json';
import userMocked from './Endpoints/user.json';

let user = userMocked;

const endpoints = {
  login: addBaseUrl('login'),
  profile: addBaseUrl('profile'),
  logout: addBaseUrl('logout'),
  products: addBaseUrl('products'),
  orders: addBaseUrl('orders')
};

export const handlers = [
  http.get(endpoints.products, async () => {
    return HttpResponse.json(products);
  }),
  http.get(endpoints.orders, async () => {
    return HttpResponse.json(orders);
  }),
  http.post(endpoints.orders, async ({ request }) => {
    const { delivery_address, items } = (await request.json()) as OrderPayload;
    const details = items.map(({ id, quantity }) => {
      const findProduct = products.find((product) => product.id === id);
      return {
        id: Math.floor(Math.random() * 100),
        quantity,
        subtotal: Math.floor(Math.random() * 5000),
        product_id: id,
        product_name: findProduct || ''
      };
    });
    const total = details.reduce((acc, current) => acc + current.subtotal, 0);

    const newOrder = {
      id: Math.random() * 20,
      items_count: details.length,
      total,
      delivery_address,
      created_at: new Date().toISOString(),
      order_details: details
    };

    return HttpResponse.json(newOrder, { status: 201 });
  }),
  http.get(endpoints.profile, async () => {
    HttpResponse.json(user);
  }),
  http.patch(endpoints.profile, async ({ request }) => {
    const body = (await request.json()) as User;
    const filteredBody = Object.entries(body).filter(([key]) => Boolean(key));
    user = { ...user, ...Object.fromEntries(filteredBody) };

    return HttpResponse.json(user, { status: 201 });
  })
];

function addBaseUrl(endpoint: string) {
  const BASE_URL = import.meta.env.VITE_BASE_URI as string;
  return `${BASE_URL}/${endpoint}`;
}
