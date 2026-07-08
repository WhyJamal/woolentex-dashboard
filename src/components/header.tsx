"use client";

import {HelpCircle, Bell } from "lucide-react";

import { useAuthStore } from "@/store/auth-store";
import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";
import { getInitials } from "@/utils/getInitials";

export function Header() {
  const user = useAuthStore((s) => s.user);

  return (
    <header className="flex h-16 shrink-0 items-center justify-end gap-4 border-b border-border bg-background px-6">

      {/* Right actions */}
      <div className="flex items-center gap-3">

        <div className="flex items-center gap-1">
          <ToggleTheme />
          <Button
            variant="ghost"
            size="icon"
          >
            <HelpCircle className="size-4" />
          </Button>
          {/* <button className="relative flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground">
            <Bell className="size-4" />
            <span className="absolute top-2 right-2 size-1.5 rounded-full bg-red-500" />
          </button> */}
        </div>

        <div className="flex size-9 items-center justify-center rounded-full bg-muted text-xs font-medium">
          {getInitials(user || null)}
        </div>
      </div>
    </header>
  );
}