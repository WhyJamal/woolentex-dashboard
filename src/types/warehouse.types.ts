export interface WarehouseStatRow {
  label: string;
  value: string;
  icon: string; 
}

export interface WarehouseDistributionItem {
  label: string;
  value: number;
  color: string;
}

export interface WarehouseGoal {
  label: string;
  current: string;
  target: string;
  percent: number;
  color: string;
}

export interface WarehouseOverviewResponse {
  stats: WarehouseStatRow[];
  distribution: {
    items: WarehouseDistributionItem[];
    centerLabel: string;
    centerValue: string;
  };
  goals: WarehouseGoal[];
}