"use server";

import { api } from "@/lib/axiosInstance";
import { getSession } from "@/lib/auth/get-session";
import type { WarehouseOverviewResponse } from "@/types/warehouse.types";

type WarehouseActionResult =
  | { success: true; data: WarehouseOverviewResponse }
  | { success: false; error: string };

export async function getWarehouseOverview(): Promise<WarehouseActionResult> {
  const session = await getSession();

  if (!session) {
    return { success: false, error: "Сессия не найдена." };
  }

  try {
    const data = await api.get<WarehouseOverviewResponse>("/warehouse");
    //console.log("Warehouse Overview data:", data);
    return { success: true, data };
  } catch (err) {
    console.error("Ошибка при получении обзора склада:", err);
    return { success: false, error: "Не удалось получить данные из 1С." };
  }
}