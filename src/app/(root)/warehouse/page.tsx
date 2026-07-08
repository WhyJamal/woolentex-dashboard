import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { WarehouseDistribution } from "@/components/warehouse/warehouse-distribution";
import { RevenueGoals } from "@/components/kpi/revenue-goals";
import { getSession } from "@/lib/auth/get-session";

const distributionData = [
  { label: "Готовая продукция", value: 35, color: "#f97316" },
  { label: "Сырьё", value: 28, color: "#14b8a6" },
  { label: "Полуфабрикаты", value: 22, color: "#1e3a8a" },
  { label: "Брак", value: 15, color: "#eab308" },
];

const warehouseGoals = [
  {
    label: "Оборачиваемость склада",
    current: "48 295",
    target: "55 000",
    percent: 88,
    color: "bg-orange-500",
  },
  {
    label: "Заполненность склада",
    current: "847",
    target: "1 000",
    percent: 85,
    color: "bg-teal-500",
  },
  {
    label: "Своевременность отгрузок",
    current: "76%",
    target: "100%",
    percent: 76,
    color: "bg-slate-800",
  },
];

export default async function WarehousePage() {
  const session = await getSession();

  return (
    <div className="space-y-6">
      <HeroStatCard
        title="Склад"
        subtitle="Обзор остатков по складу"
        groups={[
          {
            title: "Склад",
            cards: [
              {
                rows: [
                  {
                    label: "Общий объём",
                    value: "48.2K",
                    icon: heroIcons.Wallet,
                  },
                ],
              },
              {
                rows: [
                  {
                    label: "Активные позиции",
                    value: "12 847",
                    icon: heroIcons.Euro,
                  },
                ],
              },
            ],
          },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <WarehouseDistribution
          title="Остатки по категориям"
          description="Распределение готовой продукции по складу"
          centerLabel="Позиций"
          centerValue="284K"
          data={distributionData}
        />
        <RevenueGoals goals={warehouseGoals} />
      </div>
    </div>
  );
}