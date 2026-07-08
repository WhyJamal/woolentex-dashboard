"use client";

import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Cell, Pie, PieChart } from "recharts";

interface TurnoverChartProps {
  period: string;
  data: { label: string; value: number; color: string }[];
}

export function TurnoverChart({ period, data }: TurnoverChartProps) {
  const chartConfig = data.reduce((acc, item) => {
    acc[item.label] = { label: item.label, color: item.color };
    return acc;
  }, {} as ChartConfig);

  return (
    <Card className="gap-2 border-neutral-800 p-4">
      <div>
        <p className="text-sm font-medium">Текучесть</p>
        <p className="text-xs text-neutral-400">{period}</p>
      </div>

      <ChartContainer config={chartConfig} className="mx-auto h-45 w-45">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie data={data} dataKey="value" nameKey="label" outerRadius={85} strokeWidth={0}>
            {data.map((item) => (
              <Cell key={item.label} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-1">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-neutral-300">{item.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}