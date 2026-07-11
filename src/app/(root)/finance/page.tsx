import { CashBalanceSection } from "@/components/finance/cash-balance-section";
import { getFinanceOverview } from "@/actions/finance.action";
import { CashFlowChartWrapper } from "@/components/finance/cash-flow-chart-wrapper";

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
      <CashFlowChartWrapper cashFlows={cashFlows} />

      <CashBalanceSection initialData={balance} />
    </div>
  );
}