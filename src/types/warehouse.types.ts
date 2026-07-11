import { RevenueGoal } from "./kpi.types";

export interface WarehouseStatRow {
  label: string;
  value: number;
  icon: string; 
}

export interface WarehouseDistributionItem {
  label: string;
  value: number;
  color: string;
}

// export interface WarehouseGoal {
//   label: string;
//   current: string;
//   percent: number;
//   color: string;
// }

export interface WarehouseOverviewResponse {
  stats: WarehouseStatRow[];
  distribution: {
    items: WarehouseDistributionItem[];
    centerLabel: string;
    centerValue: string;
  };
  goals: RevenueGoal[];
}