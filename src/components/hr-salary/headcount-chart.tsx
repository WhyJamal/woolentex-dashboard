"use client";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";
import { TrendingUp } from "lucide-react";

interface HeadcountChartProps {
  total: number;
  totalLabel: string;
  period: string;
  trendPercent: number;
  data: { label: string; value: number; color: string }[];
}

export function HeadcountChart({
  total,
  totalLabel,
  period,
  trendPercent,
  data,
}: HeadcountChartProps) {
  const chartConfig = data.reduce((acc, item) => {
    acc[item.label] = { label: item.label, color: item.color };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card className="gap-2 border-neutral-800 p-4">
      <div>
        <p className="text-sm font-medium">Численность</p>
        <p className="text-xs text-neutral-400">{period}</p>
      </div>

      <div className="relative mx-auto">
        <ChartContainer config={chartConfig} className="h-45 w-45">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              innerRadius={62}
              outerRadius={85}
              paddingAngle={2}
              strokeWidth={0}
            >
              {data.map((item) => (
                <Cell key={item.label} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-xs text-neutral-400">{totalLabel}</p>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-2">
        <p className="flex items-center gap-1 text-xs font-medium">
          Рост на {trendPercent}% в этом месяце
          <TrendingUp className="size-3.5 text-green-400" />
        </p>
      </div>
    </Card>
  );
}