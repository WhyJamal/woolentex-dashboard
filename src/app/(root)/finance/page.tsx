import { CashFlowChart } from "@/components/finance/cash-flow-chart";
import { CashBalanceSection } from "@/components/finance/cash-balance-section";
import { getFinanceOverview } from "@/actions/finance.action";

export default async function FinancePage() {
  const result = await getFinanceOverview();

  if (!result.success) {
    return (
      <div className="p-6 text-center text-red-500">
        {result.error}
      </div>
    );
  }

  const { cashFlows, balance } = result.data;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {cashFlows.map((flow) => (
          <CashFlowChart
            key={flow.title}
            title={flow.title}
            period={flow.period}
            trendPercent={flow.trendPercent}
            data={flow.data}
          />
        ))}
      </div>

      <CashBalanceSection bank={balance.bank} kassa={balance.kassa} />
    </div>
  );
}