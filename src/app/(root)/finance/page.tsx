import { CashFlowChart } from "@/components/finance/cash-flow-chart";
import { CashBalanceSection } from "@/components/finance/cash-balance-section";

const months = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"];
const genData = (base: number) =>
  months.map((label, i) => ({
    label,
    value: base + Math.round(Math.sin(i) * base * 0.3),
  }));

export default function FinancePage() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <CashFlowChart
          title="Банк — Приход"
          period="Январь – Июнь 2024"
          trendPercent={5.2}
          data={genData(4200)}
        />
        <CashFlowChart
          title="Банк — Расход"
          period="Январь – Июнь 2024"
          trendPercent={3.8}
          data={genData(3100)}
        />
        <CashFlowChart
          title="Касса — Приход"
          period="Январь – Июнь 2024"
          trendPercent={6.1}
          data={genData(1800)}
        />
        <CashFlowChart
          title="Касса — Расход"
          period="Январь – Июнь 2024"
          trendPercent={2.4}
          data={genData(1200)}
        />
      </div>

      <CashBalanceSection
        bank={{ sum: "482 000 000", euro: "€ 4 200", dollar: "$ 48 200" }}
        kassa={{ sum: "12 847 000", euro: "€ 320", dollar: "$ 3 420" }}
      />
    </div>
  );
}