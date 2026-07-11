"use server";

import { api } from "@/lib/axiosInstance";
import { getSession } from "@/lib/auth/get-session";
import type { HrSalaryOverviewResponse } from "@/types/hr-salary.types";

type HrSalaryActionResult =
  | { success: true; data: HrSalaryOverviewResponse }
  | { success: false; error: string };

export async function getHrSalaryOverview(): Promise<HrSalaryActionResult> {
  const session = await getSession();

  if (!session) {
    return { success: false, error: "Сессия не найдена." };
  }

  try {
    const data = await api.get<HrSalaryOverviewResponse>("/hr-salary");
    //console.log("HR/Salary Overview data:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка получения HR/Salary обзора:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}