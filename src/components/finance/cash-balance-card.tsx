import { Wallet, Euro, DollarSign } from "lucide-react";

const icons = { sum: Wallet, euro: Euro, dollar: DollarSign };

interface CashBalanceCardProps {
  sum: string;
  euro: string;
  dollar: string;
}

export function CashBalanceCard({ sum, euro, dollar }: CashBalanceCardProps) {
  const rows = [
    { key: "sum", label: "Сум", value: sum },
    { key: "euro", label: "Евро", value: euro },
    { key: "dollar", label: "Доллар", value: dollar },
  ] as const;

  return (
    <div className="flex-1 rounded-xl border border-border p-3">
      <div className="space-y-1.5">
        {rows.map((row) => {
          const Icon = icons[row.key];
          return (
            <div
              key={row.key}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Icon className="size-3.5" />
                {row.label}
              </span>
              <span className="font-medium">{row.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}