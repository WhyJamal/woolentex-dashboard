import { formatNumber, formatSimpleNumber } from "@/utils/formatter-number";
import { Wallet, Euro, DollarSign, Package, Layers, User, UserPlus, UserMinus } from "lucide-react";

export interface HeroStatRow {
  label: string;
  value: number;
  icon: React.ElementType;
}

interface HeroCard {
  rows: HeroStatRow[];
}

interface HeroGroup {
  title: string;
  cards: HeroCard[];
  columbs?: number;
  titlePosition?: "left" | "center" | "right";
}

interface HeroStatCardProps {
  title: string;
  subtitle?: string;
  format?: "number" | "simpleNumber";
  groups: HeroGroup[];
}

export function HeroStatCard({ title, subtitle, format, groups }: HeroStatCardProps) {
  return (
    <div className="rounded-2xl bg-linear-to-br from-violet-600 via-indigo-600 to-blue-500 p-6 text-white shadow-lg">
      <h1 className="text-xl font-semibold">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-sm text-white/70">
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-10">
        {groups.map((group) => (
          <div key={group.title} className="flex-1">
            <p className={`mb-3 text-xs font-medium tracking-wide text-white/60 uppercase ${group.titlePosition === "center" ? "text-center" : group.titlePosition === "right" ? "text-right" : "text-left"}`}>
              {group.title}
            </p>
            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: `repeat(${group.columbs || 2}, minmax(0, 1fr))`,
              }}
            >
              {group.cards.map((card, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-2 rounded-xl bg-white/10 p-3 px-10 backdrop-blur-sm"
                >
                  {card.rows.map((row) => {
                    const Icon = row.icon;
                    return (
                      <div key={row.label}>
                        <div className="flex items-center gap-1.5 text-xs text-white/70">
                          <Icon className="size-3.5" />
                          {row.label}
                        </div>
                        <p className="mt-0.5 text-lg font-semibold">
                          {format === "simpleNumber" ? formatSimpleNumber(Number(row.value) || 0) : formatNumber(Number(row.value) || 0)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const heroIcons = { Wallet, Euro, DollarSign, Package, Layers, User, UserPlus, UserMinus };