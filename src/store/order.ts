import { Order, OrderItem } from '@/types/order.ts';
import { create } from 'zustand';
import { createOrder, getOrders } from '@/services/orderServices.ts';

interface OrderState {
  newOrders: OrderItem[];
  ordersStored: Order[];
  getOrdersStored: () => Promise<void>;
  addOrder: (order: OrderItem) => void;
  updateAmountOrder: (productId: number, quantity: number) => void;
  registerOrders: (address: string, items: OrderItem[]) => Promise<void>;
  removeOrder: (productId: number) => void;
}

export const useOrderStore = create<OrderState>()((set) => ({
  newOrders: [] as OrderItem[],
  ordersStored: [] as Order[],
  getOrdersStored: async () => {
    const orders = await getOrders();
    if (orders) {
      set({ ordersStored: orders });
    }
  },
  addOrder: (order) => {
    set((state) => {
      const orders = [...state.newOrders, order];
      localStorage.setItem('orders', JSON.stringify(orders));
      return { newOrders: orders };
    });
  },
  updateAmountOrder: (productId, quantity) => {
    set((state) => {
      const orders = state.newOrders.map((order) => {
        if (order.id === productId) {
          return { ...order, quantity };
        }
        return order;
      });
      localStorage.setItem('orders', JSON.stringify(orders));
      return { newOrders: orders };
    });
  },
  removeOrder: (productId) => {
    set((state) => {
      const orders = state.newOrders.filter((order) => order.id !== productId);
      localStorage.setItem('orders', JSON.stringify(orders));
      return { newOrders: orders };
    });
  }
  ,
  registerOrders: async (address, items) => {
    const response = await createOrder({ delivery_address: address, items });
    set((state) => {
      const orders = [...state.ordersStored, response];
      localStorage.setItem('orders', JSON.stringify([]));
      localStorage.setItem('ordersStored', JSON.stringify(orders));
      return { ordersStored: orders, newOrders: [] };
    });
  }
}));