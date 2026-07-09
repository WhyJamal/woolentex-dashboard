export default function Loading() {
  return (
    <div className="space-y-6 p-6">
      <div className="h-40 animate-pulse rounded-2xl bg-zinc-800" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="h-80 animate-pulse rounded-2xl bg-zinc-800" />
        <div className="h-80 animate-pulse rounded-2xl bg-zinc-800" />
      </div>

      <div className="h-96 animate-pulse rounded-2xl bg-zinc-800" />
    </div>
  );
}