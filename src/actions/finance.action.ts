"use server";

import { api } from "@/lib/axiosInstance";
import { getSession } from "@/lib/auth/get-session";
import type { BalancePeriod, CashBalanceResponse, FinanceOverviewResponse } from "@/types/finance.types";

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
    console.log("Finance Overview data:", data.cashFlows[0].data);
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка при получении обзора финансов:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}

type CashBalanceActionResult =
  | { success: true; data: CashBalanceResponse }
  | { success: false; error: string };

export async function getCashBalance(
  period: BalancePeriod
): Promise<CashBalanceActionResult> {
  const session = await getSession();

  if (!session) {
    return { success: false, error: "Сессия не найдена." };
  }

  try {
    const data = await api.get<CashBalanceResponse>("/finance/balance", {
      params: { period },
    });
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка при получении остатка денежных средств:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}