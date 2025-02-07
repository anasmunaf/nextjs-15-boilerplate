"use server";

import { appRoute, authRoute } from "@/constants/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginSchema, loginStateType } from "./schema";

function getValues(form: FormData) {
  const obj: any = {};
  for (const item of form.entries()) {
    obj[item[0]] = item[1];
  }
  return obj;
}

async function getData(body: any) {
  return await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  }).then((res) => res.json());
}

export default async function onLogin(state: any, values: any) {
  const value = getValues(values);

  const validateFields = loginSchema.safeParse({
    username: value.username,
    password: value.password,
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const response = await getData(value);

  (await cookies()).set("token", response.accessToken);
  redirect(appRoute.dashboard);
  return { ...state, response };
}

export async function onLogout() {
  (await cookies()).delete("token");
  redirect(authRoute.login);
}

function setStorage(key: string, value: string) {
  // "use client";
  localStorage.setItem(key, value);
}
