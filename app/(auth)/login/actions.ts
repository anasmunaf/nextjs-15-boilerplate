"use server";

import { appRoute } from "@/constants/routes";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
  const response = await getData(value);

  (await cookies()).set("token", response.accessToken);
  redirect(appRoute.dashboard);
  return { ...state, response };
}

function setStorage(key: string, value: string) {
  // "use client";
  localStorage.setItem(key, value);
}
