"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatNumber } from "@/utils/formatter-number";
import { Bar, BarChart, LabelList, XAxis } from "recharts";

interface OutputVolumeChartProps {
  data: { date: string; value: number }[];
  total: number;
}

const chartConfig = {
  value: {
    label: "Количество",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function OutputVolumeChart({
  data,
  total,
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
            <p className="text-xs text-neutral-400">Итого</p>
            <p className="text-lg font-semibold">{formatNumber(total)}</p>
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
              interval={0}
              tick={{ fill: "#737373", fontSize: 8 }}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={[3, 3, 0, 0]}>
               <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}