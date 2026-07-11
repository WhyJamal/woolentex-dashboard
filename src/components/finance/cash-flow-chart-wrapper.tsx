"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CashFlowChart } from "./cash-flow-chart";
import { CashFlowSeries } from "@/types/finance.types";

type Currency = "sum" | "dollar" | "euro";

interface CashFlowChartWrapperProps {
    cashFlows: CashFlowSeries[];
}

export function CashFlowChartWrapper({ cashFlows }: CashFlowChartWrapperProps) {
    const [currency, setCurrency] = useState<Currency>("sum");


    return (
        <div className="flex flex-col gap-3">

            <Tabs value={currency} onValueChange={(v) => setCurrency(v as Currency)}>
                <TabsList className="h-7 w-100">
                    <TabsTrigger value="sum">Сум</TabsTrigger>
                    <TabsTrigger value="dollar">$</TabsTrigger>
                    <TabsTrigger value="euro">€</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid gap-4 sm:grid-cols-2">

                {cashFlows.map((flow) => (
                    <CashFlowChart
                        key={flow.title}
                        title={flow.title}
                        period={flow.period}
                        //trendPercent={flow.trendPercent}
                        data={flow.data}
                        currency={currency}
                    />
                ))}
            </div>
        </div>
    )
}
