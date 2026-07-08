import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HrStatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function HrStatCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp = true,
}: HrStatCardProps) {
  return (
    <div className="flex-1 rounded-xl border border-border p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <p className="mt-2 text-xl font-semibold">{value}</p>
      {trend && (
        <p
          className={cn(
            "mt-1 text-xs font-medium",
            trendUp ? "text-green-600" : "text-red-500"
          )}
        >
          {trend}
        </p>
      )}
    </div>
  );
}