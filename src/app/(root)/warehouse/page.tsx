import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { WarehouseDistribution } from "@/components/warehouse/warehouse-distribution";
import { RevenueGoals } from "@/components/kpi/revenue-goals";
import { getWarehouseOverview } from "@/actions/warehouse.action";

export default async function WarehousePage() {
  const result = await getWarehouseOverview();

  if (!result.success) {
    return (
      <div className="p-6 text-center text-red-500">
        {result.error}
      </div>
    );
  }

  const { stats, distribution, goals } = result.data;

  const withIcon = (rows: { label: string; value: string; icon: string }[]) =>
    rows.map((row) => ({
      ...row,
      icon: heroIcons[row.icon as keyof typeof heroIcons],
    }));

  return (
    <div className="space-y-6">
      <HeroStatCard
        title="Склад"
        subtitle="Обзор остатков по складу"
        groups={[
          {
            title: "Склад",
            cards: stats.map((row) => ({ rows: withIcon([row]) })),
          },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <WarehouseDistribution
          title="Остатки по категориям"
          description="Распределение готовой продукции по складу"
          centerLabel={distribution.centerLabel}
          centerValue={distribution.centerValue}
          data={distribution.items}
        />
        <RevenueGoals goals={goals} />
      </div>
    </div>
  );
}