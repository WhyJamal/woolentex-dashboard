"use client";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import type { CashFlowPoint } from "@/types/finance.types";

type Currency = "sum" | "dollar" | "euro";

interface CashFlowChartProps {
  title: string;
  period: string;
  data: CashFlowPoint[];
  currency: Currency; 
}

const chartConfig = {
  sum: { label: "Сум", color: "var(--chart-1)" },
  dollar: { label: "Доллар", color: "var(--chart-2)" },
  euro: { label: "Евро", color: "var(--chart-3)" },
} satisfies ChartConfig;

const formatCompact = (v: number) =>
  new Intl.NumberFormat("ru-RU", { notation: "compact" }).format(v);

export function CashFlowChart({ title, period, data, currency }: CashFlowChartProps) {
  return (
    <Card className="gap-2 border-neutral-80 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-neutral-400">{period}</p>
        </div>
      </div>

      <ChartContainer config={chartConfig} className="h-32 w-full">
        <BarChart data={data} margin={{ top: 4, left: 0, right: 0, bottom: 0 }}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 10 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 10 }}
            tickFormatter={formatCompact}
            width={40}
          />
          <ChartTooltip
            content={<ChartTooltipContent className="text-xs" />}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
          />
          <Bar
            dataKey={currency}
            fill={`var(--color-${currency})`}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </Card>
  );
}