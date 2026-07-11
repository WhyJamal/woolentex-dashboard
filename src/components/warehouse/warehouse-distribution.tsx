"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { formatNumber } from "@/utils/formatter-number";
import { Cell, Pie, PieChart } from "recharts";

interface DistributionItem {
  label: string;
  value: number;
  color: string;
}

interface WarehouseDistributionProps {
  title: string;
  description: string;
  centerLabel: string;
  centerValue: string;
  data: DistributionItem[];
}

export function WarehouseDistribution({
  title,
  description,
  centerLabel,
  centerValue,
  data,
}: WarehouseDistributionProps) {
  const chartConfig = data.reduce((acc, item) => {
    acc[item.label] = { label: item.label, color: item.color };
    return acc;
  }, {} as ChartConfig);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <div className="relative shrink-0">
          <ChartContainer config={chartConfig} className="h-40 w-40">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                innerRadius={55}
                outerRadius={78}
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
            <p className="text-xl font-semibold">{centerValue}</p>
            <p className="text-xs text-muted-foreground">{centerLabel}</p>
          </div>
        </div>

        <div className="flex-1 space-y-2.5">
          {data.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-muted-foreground">{item.label}</span>
              </div>
              <span className="font-medium">
                {formatNumber(item.value)}
              </span>
              {/* <span className="font-medium">
                {Math.round((item.value / total) * 100)}%
              </span> */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}