export interface BankCashRow {
  label: string;
  value: string;
  currency: "UZS" | "EUR" | "USD";
}

export interface HeroStatGroupData {
  title: string; // "Банк" | "Касса"
  bank: { sum: string; euro: string; dollar: string };
}

export interface StockPoint {
  month: string;
  value: number;
  warehouse: string;
}

export interface RevenueGoal {
  total: number;
  data: RevenueGoalItem[];
}

export interface RevenueGoalItem {
  label: string;
  current: number;
  // target: string;
  percent: number;
  color: string;
}

export interface OutputPoint {
  date: string;
  value: number;
}

export interface KpiOverviewResponse {
  bank: {
    sum: number;
    euro: number;
    dollar: number;
  };
  cash: {
    sum: number;
    euro: number;
    dollar: number;
  };
  stock: StockPoint[];
  revenueGoals: RevenueGoal;
  output: {
    data: OutputPoint[];
    total: number;
  };
}