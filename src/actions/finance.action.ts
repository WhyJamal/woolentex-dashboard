"use server";

import { api } from "@/lib/axiosInstance";
import { getSession } from "@/lib/auth/get-session";
import type { FinanceOverviewResponse } from "@/types/finance.types";

type FinanceActionResult =
  | { success: true; data: FinanceOverviewResponse }
  | { success: false; error: string };

export async function getFinanceOverview(): Promise<FinanceActionResult> {
  const session = await getSession();

  if (!session) {
    return { success: false, error: "Сессия не найдена." };
  }

  try {
    const data = await api.get<FinanceOverviewResponse>("/finance");
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка при получении обзора финансов:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}