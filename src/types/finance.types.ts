export interface CashFlowPoint {
  label: string;
  value: number;
}

export interface CashFlowSeries {
  title: string;
  period: string;
  trendPercent: number;
  data: CashFlowPoint[];
}

export interface CashBalanceGroup {
  sum: string;
  euro: string;
  dollar: string;
}

export interface FinanceOverviewResponse {
  cashFlows: CashFlowSeries[];
  balance: {
    bank: CashBalanceGroup;
    kassa: CashBalanceGroup;
  };
}