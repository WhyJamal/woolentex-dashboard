import { HeroStatCard, heroIcons } from "@/components/hero-stat-card";
import { StockChart } from "@/components/kpi/stock-chart";
import { RevenueGoals } from "@/components/kpi/revenue-goals";
import { OutputVolumeChart } from "@/components/kpi/output-volume-chart";
import { getKpiOverview } from "@/actions/kpi.action";

export default async function KpiPage() {
    const result = await getKpiOverview();

    if (!result.success) {
        return (
            <div className="p-6 text-center text-red-500">
                {result.error}
            </div>
        );
    }

    const { bank, cash, stock, revenueGoals, output } = result.data;

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
                                    { label: "Сум", value: bank.sum, icon: heroIcons.Wallet },
                                ],
                            },
                            {
                                rows: [
                                    { label: "Евро", value: bank.euro, icon: heroIcons.Euro },
                                    { label: "Доллар", value: bank.dollar, icon: heroIcons.DollarSign },
                                ],
                            },
                        ],
                    },
                    {
                        title: "Касса",
                        cards: [
                            {
                                rows: [
                                    { label: "Сум", value: cash.sum, icon: heroIcons.Wallet },
                                ],
                            },
                            {
                                rows: [
                                    { label: "Евро", value: cash.euro, icon: heroIcons.Euro },
                                    { label: "Доллар", value: cash.dollar, icon: heroIcons.DollarSign },
                                ],
                            },
                        ],
                    },
                ]}
            />

            <div className="grid gap-6 lg:grid-cols-2">
                <StockChart data={stock} />
                <RevenueGoals goals={revenueGoals} />
            </div>

            <OutputVolumeChart
                data={output.data}
                totalDesktop={output.totalDesktop}
                totalMobile={output.totalMobile}
            />
        </div>
    );
}