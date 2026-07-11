"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { StockPoint } from "@/types/kpi.types";
import { pivotStockData } from "@/lib/pivot-stock-data";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";

interface StockChartProps {
  data: StockPoint[];
}

export function StockChart({ data }: StockChartProps) {
  const { chartData, slugs, chartConfig, axisBySlug, hasRightAxis } =
    pivotStockData(data);

  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const toggleSlug = (slug: string) => {
    setHidden((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Остатки готовой продукции</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig satisfies ChartConfig} className="h-64 w-full">
          <LineChart data={chartData} margin={{ right: hasRightAxis ? 12 : 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            {hasRightAxis && (
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />
            )}
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend
              content={
                <ChartLegendContent
                  onClick={(e: any) => toggleSlug(e?.dataKey)}
                />
              }
            />
            {slugs.map((slug) => (
              <Line
                key={slug}
                yAxisId={axisBySlug[slug]}
                dataKey={slug}
                type="monotone"
                stroke={`var(--color-${slug})`}
                strokeWidth={2.5}
                dot={{ fill: `var(--color-${slug})` }}
                activeDot={{ r: 6 }}
                connectNulls
                hide={hidden.has(slug)}
              />
            ))}
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}