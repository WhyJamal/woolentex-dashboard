import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RevenueGoal } from "@/types/kpi.types";
import { formatNumber } from "@/utils/formatter-number";

interface RevenueGoalsProps {
  goals: RevenueGoal[];
}

const colorMap = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
};

export function RevenueGoals({ goals }: RevenueGoalsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Выручка</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <p className="text-sm font-medium">{goal.label}</p>
              <p className="text-sm text-muted-foreground">{goal.percent}%</p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full",
                  colorMap[goal.color as keyof typeof colorMap]
                )}
                style={{ width: `${goal.percent}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
              <span>{formatNumber(goal.current)}</span>
              {/* <span>Target: {goal.target}</span> */}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}