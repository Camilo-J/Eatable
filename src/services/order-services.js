import collectionClient from "./collection-client";

export async function createOrder(data) {
  return await collectionClient("/orders", {
    body: data,
  });
}

export async function getOrders() {
  return await collectionClient(`/orders`);
}
