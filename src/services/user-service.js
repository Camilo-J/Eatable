import { tokenKey } from "../config";
import collectionClient from "./collection-client";

export async function createUser(userData) {
  const { token, ...user } = await collectionClient("/signup", {
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function updateUser(userData) {
  const { token, ...user } = await collectionClient("/profile", {
    method: "PATCH",
    body: userData,
  });

  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { token, ...user } = await collectionClient("/profile");

  return user;
}
