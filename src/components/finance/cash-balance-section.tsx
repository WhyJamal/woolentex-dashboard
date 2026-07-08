"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CashBalanceCard } from "./cash-balance-card";

interface BalanceRow {
  sum: string;
  euro: string;
  dollar: string;
}

interface CashBalanceSectionProps {
  bank: BalanceRow;
  kassa: BalanceRow;
}

export function CashBalanceSection({ bank, kassa }: CashBalanceSectionProps) {
  const [period, setPeriod] = useState("day");

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base">Остатки денежных средств</CardTitle>
        <Tabs value={period} onValueChange={setPeriod}>
          <TabsList>
            <TabsTrigger value="day">День</TabsTrigger>
            <TabsTrigger value="week">Неделя</TabsTrigger>
            <TabsTrigger value="month">Месяц</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Банк
          </p>
          <div className="flex gap-3">
            <CashBalanceCard {...bank} />
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Касса
          </p>
          <div className="flex gap-3">
            <CashBalanceCard {...kassa} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}