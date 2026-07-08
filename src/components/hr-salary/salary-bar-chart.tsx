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

interface SalaryBarChartProps {
  period: string;
  trendPercent: number;
  data: { label: string; value: number }[];
}

const chartConfig = {
  value: {
    label: "Средняя зарплата",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function SalaryBarChart({ period, trendPercent, data }: SalaryBarChartProps) {
  return (
    <Card className="gap-3 border-neutral-800 p-5">
      <div>
        <p className="text-sm font-medium">Средняя зарплата по месяцам</p>
        <p className="text-xs text-neutral-400">{period}</p>
      </div>

      <ChartContainer config={chartConfig} className="h-45 w-full">
        <BarChart data={data}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#737373", fontSize: 11 }}
          />
          <ChartTooltip
            content={<ChartTooltipContent />}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
          />
          <Bar dataKey="value" fill="var(--color-value)" radius={[4, 4, 0, 0]} />
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