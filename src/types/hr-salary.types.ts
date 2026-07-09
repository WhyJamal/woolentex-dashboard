export interface HrStatRow {
  label: string;
  value: string;
  icon: string; // "Wallet" | "Euro" — heroIcons map 
}

export interface DistributionItem {
  label: string;
  value: number;
  color: string;
}

export interface SalaryPoint {
  label: string;
  value: number;
}

export interface HrStatCardData {
  label: string;
  value: string;
  icon: string; // "Banknote" | "Wallet" | "Users2" — lucide-react map 
  trend: string;
}

export interface HrSalaryOverviewResponse {
  stats: HrStatRow[];
  headcount: {
    total: number;
    totalLabel: string;
    period: string;
    trendPercent: number;
    data: DistributionItem[];
  };
  turnover: {
    period: string;
    data: DistributionItem[];
  };
  cards: HrStatCardData[];
  salary: {
    period: string;
    trendPercent: number;
    data: SalaryPoint[];
  };
}