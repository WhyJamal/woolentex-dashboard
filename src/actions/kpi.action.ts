"use server";

import { api } from "@/lib/axiosInstance";
import { getSession } from "@/lib/auth/get-session";
import type { KpiOverviewResponse } from "@/types/kpi.types";

type KpiActionResult =
  | { success: true; data: KpiOverviewResponse }
  | { success: false; error: string };

export async function getKpiOverview(): Promise<KpiActionResult> {
  const session = await getSession();

  if (!session) {
    return { success: false, error: "Сессия не найдена." };
  }

  try {
    const data = await api.get<KpiOverviewResponse>("/kpi");
    console.log("KPI Overview data:", data.output);
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка при получении обзора KPI:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}