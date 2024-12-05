import { Order, OrderItem } from '../types/order.ts';
import { create } from 'zustand';

interface OrderState {
  newOrders: OrderItem[];
  ordersStored: Order[];
  getOrdersStored: () => Promise<void>;
  addOrder: (order: OrderItem) => void;
  updateAmountOrder: (productId: number, quantity: number) => void;
}

export const useOrderStore = create<OrderState>()((set) => ({
  newOrders: [] as OrderItem[],
  ordersStored: [] as Order[],
  getOrdersStored: async () => {
    const orders = localStorage.getItem('orders');
    if (orders) {
      set({ ordersStored: JSON.parse(orders) });
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
  }
}));