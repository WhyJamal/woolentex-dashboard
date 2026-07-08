import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { StockChart } from "@/components/kpi/stock-chart";
import { RevenueGoals } from "@/components/kpi/revenue-goals";
import { OutputVolumeChart } from "@/components/kpi/output-volume-chart";
import { getSession } from "@/lib/auth/get-session";

const stockData = [
    { month: "Iyul", value: 32000 },
    { month: "Avg", value: 34500 },
    { month: "Sen", value: 33800 },
    { month: "Okt", value: 38200 },
    { month: "Noy", value: 42000 },
    { month: "Dek", value: 45500 },
    { month: "Yan", value: 48200 },
];

const revenueGoals = [
    {
        label: "Monthly Revenue",
        current: "48,295",
        target: "55,000",
        percent: 88,
        color: "bg-orange-500",
    },
    {
        label: "New Customers",
        current: "847",
        target: "1,000",
        percent: 85,
        color: "bg-teal-500",
    },
    {
        label: "Conversion Rate",
        current: "7.6%",
        target: "10%",
        percent: 76,
        color: "bg-slate-800",
    },
];

const outputData = Array.from({ length: 90 }, (_, i) => ({
    date: `${(i % 30) + 1}-kun`,
    value: Math.floor(Math.random() * 400) + 100,
}));

export default async function KpiPage() {
    const session = await getSession();

    return (
        <div className="space-y-6">
            <HeroStatCard
                title="Производство"
                subtitle="Обзор остатков по складу и производству"
                groups={[
                    {
                        title: "Банк",
                        cards: [
                            {
                                rows: [
                                    { label: "Сум", value: "482 000 000", icon: heroIcons.Wallet },
                                ],
                            },
                            {
                                rows: [
                                    { label: "Евро", value: "€ 4 200", icon: heroIcons.Euro },
                                    { label: "Доллар", value: "$ 48 200", icon: heroIcons.DollarSign },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Касса",
                        cards: [
                            {
                                rows: [
                                    { label: "Сум", value: "12 847 000", icon: heroIcons.Wallet },
                                ],
                            },
                            {
                                rows: [
                                    { label: "Евро", value: "€ 320", icon: heroIcons.Euro },
                                    { label: "Доллар", value: "$ 3 420", icon: heroIcons.DollarSign },
                                ],
                            },
                        ],
                    },
                ]}
            />

            <div className="grid gap-6 lg:grid-cols-2">
                <StockChart data={stockData} />
                <RevenueGoals goals={revenueGoals} />
            </div>

            <OutputVolumeChart
                data={outputData}
                totalDesktop="24 828"
                totalMobile="25 010"
            />
        </div>
    );
}