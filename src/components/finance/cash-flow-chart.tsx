"use client";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";
import { TrendingUp } from "lucide-react";

interface CashFlowChartProps {
  title: string;
  period: string;
  trendPercent: number;
  data: { label: string; value: number }[];
}

const chartConfig = {
  value: {
    label: "Сумма",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function CashFlowChart({
  title,
  period,
  trendPercent,
  data,
}: CashFlowChartProps) {
  return (
    <Card className="gap-2 border-neutral-80 p-4">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-neutral-400">{period}</p>
      </div>

      <ChartContainer config={chartConfig} className="h-27.5 w-full">
        <BarChart data={data} margin={{ top: 4, left: 0, right: 0, bottom: 0 }}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 10 }}
          />
          <ChartTooltip
            content={<ChartTooltipContent className="text-xs" />}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ChartContainer>

      <div className="border-t border-neutral-800 pt-2">
        <p className="flex items-center gap-1 text-xs font-medium">
          Рост на {trendPercent}% в этом месяце
          <TrendingUp className="size-3.5 text-green-400" />
        </p>
      </div>
    </Card>
  );
}