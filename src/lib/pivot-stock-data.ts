import type { StockPoint } from "@/types/kpi.types";

const WAREHOUSE_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "#ef4444",
  "var(--chart-5)",
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "");
}

export function pivotStockData(data: StockPoint[]) {
  const warehouseMap = new Map<string, string>(); // slug -> original name
  const maxByWarehouse = new Map<string, number>();

  data.forEach((d) => {
    const slug = slugify(d.warehouse);
    warehouseMap.set(slug, d.warehouse);
    maxByWarehouse.set(slug, Math.max(maxByWarehouse.get(slug) ?? 0, d.value));
  });

  const grouped = new Map<string, Record<string, string | number>>();
  for (const point of data) {
    const slug = slugify(point.warehouse);
    if (!grouped.has(point.month)) {
      grouped.set(point.month, { month: point.month });
    }
    grouped.get(point.month)![slug] = point.value;
  }

  const chartData = Array.from(grouped.values());
  const slugs = Array.from(warehouseMap.keys());

  const overallMax = Math.max(...maxByWarehouse.values());

  // Agar sklad maksimumi umumiy maksimumning 15% dan kamini tashkil qilsa —
  // uni o'ng (kichik) o'qqa joylashtiramiz, aks holda chap (katta) o'qqa
  const axisBySlug = slugs.reduce((acc, slug) => {
    const ratio = (maxByWarehouse.get(slug) ?? 0) / overallMax;
    acc[slug] = ratio < 0.15 ? "right" : "left";
    return acc;
  }, {} as Record<string, "left" | "right">);

  const chartConfig = slugs.reduce((config, slug, i) => {
    config[slug] = {
      label: warehouseMap.get(slug)!,
      color: WAREHOUSE_COLORS[i % WAREHOUSE_COLORS.length],
    };
    return config;
  }, {} as Record<string, { label: string; color: string }>);

  const hasRightAxis = Object.values(axisBySlug).includes("right");

  return { chartData, slugs, chartConfig, axisBySlug, hasRightAxis };
}