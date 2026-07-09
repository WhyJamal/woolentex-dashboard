"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronLeft,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import { useAuthStore } from "@/store/auth-store";
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "./ui/button";
import { NAVSECTIONS } from "@/config/sidebar.config";
import { getInitials } from "@/utils/getInitials";

export function Sidebar() {
  const pathname = usePathname();
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  const toggle = useSidebarStore((s) => s.toggle);
  const user = useAuthStore((s) => s.user);
  const { logout } = useAuth();

  return (
    <aside
      className={cn(
        "relative flex h-screen shrink-0 flex-col border-r border-border bg-background transition-all duration-300",
        isCollapsed ? "w-19" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5">
        <div className="flex size-9 shrink-0 items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={38}
            height={38}
            className="block dark:hidden"
          />
          <Image
            src="/logo-white1.png"
            alt="Logo"
            width={38}
            height={38}
            className="hidden dark:block"
          />
        </div>
        {!isCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Woolentex</p>
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggle}
        className="absolute top-6 -right-3 flex size-6 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm hover:text-foreground"
      >
        <ChevronLeft
          className={cn(
            "size-3.5 transition-transform duration-300",
            isCollapsed && "rotate-180"
          )}
        />
      </button>

      {/* Nav */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-2">
        {NAVSECTIONS.map((section) => (
          <div key={section.label}>
            {!isCollapsed && (
              <p className="mb-2 px-2 text-[10px] font-semibold tracking-wider text-muted-foreground">
                {section.label.toUpperCase()}
              </p>
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors",
                      isActive
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    {!isCollapsed && (
                      <>
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge && (
                          <span className="rounded-md bg-foreground/10 px-1.5 py-0.5 text-[10px] font-medium">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User footer */}
      <div className="border-t border-border p-3">
        <div
          className={cn(
            "flex items-center gap-2.5 rounded-lg px-2 py-2",
            isCollapsed && "justify-center"
          )}
        >
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
            {getInitials(user || null)}
          </div>
          {!isCollapsed && (
            <>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">
                  {user?.name ?? "Пользователь"}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {user?.role ?? ""}
                </p>
              </div>
              <Button
                onClick={logout}
                variant="ghost"
                size="icon"
              >
                <LogOut className="size-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}