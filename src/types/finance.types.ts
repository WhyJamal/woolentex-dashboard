export type BalancePeriod = "day" | "week" | "month";

export interface CashBalanceValues {
  sum: number;
  dollar: number;
  euro: number;
}

export interface CashBalanceGroup {
  income: CashBalanceValues;   // Поступления
  expense: CashBalanceValues;  // Платежи
  balance: CashBalanceValues;  // Остатки
}

export interface CashBalanceResponse {
  bank: CashBalanceGroup;
  kassa: CashBalanceGroup;
}

export interface CashFlowPoint {
  label: string;
  sum: number;
  dollar: number;
  euro: number;
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