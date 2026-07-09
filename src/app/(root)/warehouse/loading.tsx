export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-6">
        <div className="mb-6">
          <div className="h-8 w-48 animate-pulse rounded bg-white/10" />
          <div className="mt-2 h-4 w-64 animate-pulse rounded bg-white/10" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-xl bg-white/10"
            />
          ))}
        </div>
      </div>

      {/* Charts skeleton */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-105 animate-pulse rounded-2xl border border-white/10 bg-white/10" />
        <div className="h-105 animate-pulse rounded-2xl border border-white/10 bg-white/10" />
      </div>
    </div>
  );
}