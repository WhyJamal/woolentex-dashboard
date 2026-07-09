import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-6">
        <div className="mb-6">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="mt-2 h-4 w-72" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-28 rounded-xl" />
          <Skeleton className="h-28 rounded-xl" />
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Skeleton className="h-90 rounded-2xl" />
        <Skeleton className="h-90 rounded-2xl" />
      </div>

      {/* HR Stat Cards */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton
            key={i}
            className="h-32 flex-1 rounded-2xl"
          />
        ))}
      </div>

      {/* Salary Chart */}
      <Skeleton className="h-105 rounded-2xl" />
    </div>
  );
}