import { Wallet, Users2, Banknote } from "lucide-react";
import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { HeadcountChart } from "@/components/hr-salary/headcount-chart";
import { TurnoverChart } from "@/components/hr-salary/turnover-chart";
import { HrStatCard } from "@/components/hr-salary/hr-stat-card";
import { SalaryBarChart } from "@/components/hr-salary/salary-bar-chart";
import { getSession } from "@/lib/auth/get-session";

const headcountData = [
  { label: "Производство", value: 620, color: "#60a5fa" },
  { label: "Офис", value: 280, color: "#93c5fd" },
  { label: "Склад", value: 225, color: "#1d4ed8" },
];

const turnoverData = [
  { label: "Производство", value: 8, color: "#60a5fa" },
  { label: "Офис", value: 3, color: "#93c5fd" },
  { label: "Склад", value: 4, color: "#1d4ed8" },
  { label: "Продажи", value: 2, color: "#2563eb" },
  { label: "Другое", value: 1, color: "#bfdbfe" },
];

const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"];
const salaryData = months.map((label, i) => ({
  label,
  value: 3200000 + i * 90000,
}));

export default async function HrSalaryPage() {
  const session = await getSession();

  return (
    <div className="space-y-6">
      <HeroStatCard
        title="Кадры и зарплата"
        subtitle="Обзор персонала и фонда оплаты труда"
        groups={[
          {
            title: "Персонал",
            cards: [
              {
                rows: [
                  { label: "Сотрудников", value: "1 125", icon: heroIcons.Wallet },
                ],
              },
              {
                rows: [
                  { label: "Текучесть", value: "5.2%", icon: heroIcons.Euro },
                ],
              },
            ],
          },
        ]}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <HeadcountChart
          total={1125}
          totalLabel="Сотрудников"
          period="Январь – Июнь 2024"
          trendPercent={5.2}
          data={headcountData}
        />
        <TurnoverChart period="Январь – Июнь 2024" data={turnoverData} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <HrStatCard
          label="ФОТ"
          value="12 000 000 000"
          icon={Banknote}
          trend="+4.1% к прошлому месяцу"
        />
        <HrStatCard
          label="Средняя зарплата"
          value="3 480 000"
          icon={Wallet}
          trend="+2.3% к прошлому месяцу"
        />
        <HrStatCard
          label="Количество сотрудников"
          value="1 125"
          icon={Users2}
          trend="+1.8% к прошлому месяцу"
        />
      </div>

      <SalaryBarChart
        period="Январь – Июнь 2024"
        trendPercent={5.2}
        data={salaryData}
      />
    </div>
  );
}