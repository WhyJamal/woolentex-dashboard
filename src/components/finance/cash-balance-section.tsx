"use client";

import { useState, useTransition } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CashBalanceCard } from "./cash-balance-card";
import { getCashBalance } from "@/actions/finance.action";
import type { BalancePeriod, CashBalanceResponse } from "@/types/finance.types";

interface CashBalanceSectionProps {
  initialData: CashBalanceResponse;
}

export function CashBalanceSection({ initialData }: CashBalanceSectionProps) {
  const [period, setPeriod] = useState<BalancePeriod>("day");
  const [data, setData] = useState<CashBalanceResponse>(initialData);
  const [isPending, startTransition] = useTransition();

  const handlePeriodChange = (value: string) => {
    const newPeriod = value as BalancePeriod;
    setPeriod(newPeriod);

    startTransition(async () => {
      const result = await getCashBalance(newPeriod);
      if (result.success) {
        setData(result.data);
      }
    });
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base">Денежные средства</CardTitle>
        <Tabs value={period} onValueChange={handlePeriodChange}>
          <TabsList>
            <TabsTrigger value="day">День</TabsTrigger>
            <TabsTrigger value="week">Неделя</TabsTrigger>
            <TabsTrigger value="month">Месяц</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className={`space-y-4 transition-opacity ${isPending ? "opacity-50" : ""}`}>
        <p className="mb-2 text-md font-medium tracking-wide uppercase text-center border-b border-neutral-800 pb-3">
          Банк
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Поступления
            </p>
            <CashBalanceCard {...data.bank.income} />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Платежи
            </p>
            <CashBalanceCard {...data.bank.expense} />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Остатки
            </p>
            <CashBalanceCard {...data.bank.balance} />
          </div>
        </div>

        <p className="mb-2 text-md font-medium tracking-wide uppercase text-center border-b border-neutral-800 pb-3">
          Касса
        </p>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Поступления
            </p>
            <CashBalanceCard {...data.kassa.income} />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Платежи
            </p>
            <CashBalanceCard {...data.kassa.expense} />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Остатки
            </p>
            <CashBalanceCard {...data.kassa.balance} />
          </div>
        </div>

      </CardContent>
    </Card>
  );
}