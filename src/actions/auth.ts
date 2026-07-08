"use server";

import { cookies } from "next/headers";
import { api } from "@/lib/axiosInstance";

export async function loginAction(login: string, password: string) {
  try {
    const data = await api.post<{ success: boolean; user: any }>(
      "/check-user",
      { login, password }
    );

    // console.log("Ответ:", data);
    if (!data.success || !data.user) {
      return { error: "Неверный логин или пароль." };
    }

    const cookieStore = await cookies();
    cookieStore.set("session_user", JSON.stringify(data.user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development" ? false : true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return { user: data.user };
  } catch (error) {
    console.error(error);
    return { error: "Ошибка при подключении к 1С" };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("session_user");
}