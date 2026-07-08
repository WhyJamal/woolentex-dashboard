"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface StockChartProps {
  data: { month: string; value: number }[];
}

const chartConfig = {
  value: {
    label: "Qoldiq",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function StockChart({ data }: StockChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Остатки готовой продукции</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-55 w-full">
          <LineChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              dataKey="value"
              type="monotone"
              stroke="var(--color-value)"
              strokeWidth={2.5}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}