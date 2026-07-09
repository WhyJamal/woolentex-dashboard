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
}

export interface RevenueGoal {
  label: string;
  current: string;
  target: string;
  percent: number;
  color: string;
}

export interface OutputPoint {
  date: string;
  value: number;
}

export interface KpiOverviewResponse {
  bank: {
    sum: string;
    euro: string;
    dollar: string;
  };
  cash: {
    sum: string;
    euro: string;
    dollar: string;
  };
  stock: StockPoint[];
  revenueGoals: RevenueGoal[];
  output: {
    data: OutputPoint[];
    totalDesktop: string;
    totalMobile: string;
  };
}