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

  // const withHeroIcon = (rows: { label: string; value: number; icon: string }[]) =>
  //   rows.map((row) => ({
  //     ...row,
  //     icon: heroIcons[row.icon as keyof typeof heroIcons],
  //   }));

  return (
    <div className="space-y-6">
      <HeroStatCard
        title="Кадры и зарплата"
        subtitle="Обзор персонала и фонда оплаты труда"
        groups={[
          {
            title: "За весь период",
            titlePosition: "center",
            cards: [
              {
                rows: [
                  {
                    label: "Сотрудники",
                    value: stats.employees || 0,
                    icon: heroIcons.User,
                  },
                ],
              },
              {
                rows: [
                  {
                    label: "Принято",
                    value: stats.hired || 0,
                    icon: heroIcons.UserPlus,
                  },
                  {
                    label: "Увольнения",
                    value: stats.fired || 0,
                    icon: heroIcons.UserMinus,
                  },
                ],
              },
            ],
          },
          {
            title: "За текущий период",
            titlePosition: "center",
            columbs: 1,
            cards: [
              {
                rows: [
                  {
                    label: "Принято",
                    value: stats.hired_month || 0,
                    icon: heroIcons.UserPlus,
                  },
                  {
                    label: "Увольнения",
                    value: stats.fired_month || 0,
                    icon: heroIcons.UserMinus,
                  },
                ],
              },
            ],
          },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <HeadcountChart
          total={headcount.total}
          totalLabel={headcount.totalLabel}
          period={headcount.period}
          data={headcount.data}
        />
        {/* <TurnoverChart period={turnover.period} data={turnover.data} /> */}
      {/* </div> */}



      <div className="flex flex-col gap-3 sm:flex-col">
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
      </div>

      {/* <SalaryBarChart
        period={salary.period}
        trendPercent={salary.trendPercent}
        data={salary.data}
      /> */}
    </div>
  );
}