import collectionClient from "./collection-client";

export async function getOrders() {
  return await collectionClient(`/products`);
}
