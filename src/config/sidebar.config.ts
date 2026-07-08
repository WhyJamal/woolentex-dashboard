import { BarChart2, LayoutGrid, Users, Warehouse } from "lucide-react";
import { PAGES } from "./pages.config";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface NavSection {
  label: string;
  items: NavItem[];
}
export const NAVSECTIONS: NavSection[] = [
  {
    label: "Обзор",
    items: [
      { label: "KPI", href: PAGES.KPI, icon: LayoutGrid },
      { label: "Склад", href: PAGES.WAREHOUSE, icon: Warehouse },
      { label: "Финансы", href: PAGES.FINANCE, icon: BarChart2 },
      { label: "Кадры и зарплата", href: PAGES.HR_SALARY, icon: Users },
    ],
  },
];