"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis } from "recharts";

interface OutputVolumeChartProps {
  data: { date: string; value: number }[];
  totalDesktop: string;
  totalMobile: string;
}

const chartConfig = {
  value: {
    label: "Hajm",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function OutputVolumeChart({
  data,
  totalDesktop,
  totalMobile,
}: OutputVolumeChartProps) {
  return (
    <Card className="border-neutral-800">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <p className="text-sm font-medium">Объем выработки</p>
          <p className="text-xs text-neutral-400">
            Объем производства за последний месяц
          </p>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <p className="text-xs text-neutral-400">Desktop</p>
            <p className="text-lg font-semibold">{totalDesktop}</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400">Mobile</p>
            <p className="text-lg font-semibold">{totalMobile}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-55 w-full">
          <BarChart data={data}>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              interval={2}
              tick={{ fill: "#737373", fontSize: 10 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}