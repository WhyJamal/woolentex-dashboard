import { Wallet, Users2, Banknote } from "lucide-react";
import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { HeadcountChart } from "@/components/hr-salary/headcount-chart";
import { TurnoverChart } from "@/components/hr-salary/turnover-chart";
import { HrStatCard } from "@/components/hr-salary/hr-stat-card";
import { SalaryBarChart } from "@/components/hr-salary/salary-bar-chart";
import { getHrSalaryOverview } from "@/actions/hr-salary.action";

const lucideIcons = { Wallet, Users2, Banknote };

export default async function HrSalaryPage() {
  const result = await getHrSalaryOverview();

  if (!result.success) {
    return (
      <div className="p-6 text-center text-red-500">
        {result.error}
      </div>
    );
  }

  const { stats, headcount, turnover, cards, salary } = result.data;

  const withHeroIcon = (rows: { label: string; value: string; icon: string }[]) =>
    rows.map((row) => ({
      ...row,
      icon: heroIcons[row.icon as keyof typeof heroIcons],
    }));

  return (
    <div className="space-y-6">
      <HeroStatCard
        title="Кадры и зарплата"
        subtitle="Обзор персонала и фонда оплаты труда"
        groups={[
          {
            title: "Персонал",
            cards: stats.map((row) => ({ rows: withHeroIcon([row]) })),
          },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <HeadcountChart
          total={headcount.total}
          totalLabel={headcount.totalLabel}
          period={headcount.period}
          trendPercent={headcount.trendPercent}
          data={headcount.data}
        />
        <TurnoverChart period={turnover.period} data={turnover.data} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {cards.map((card) => (
          <HrStatCard
            key={card.label}
            label={card.label}
            value={card.value}
            icon={lucideIcons[card.icon as keyof typeof lucideIcons]}
            trend={card.trend}
          />
        ))}
      </div>

      <SalaryBarChart
        period={salary.period}
        trendPercent={salary.trendPercent}
        data={salary.data}
      />
    </div>
  );
}