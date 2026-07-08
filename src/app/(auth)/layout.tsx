"use client";

import { useMobile } from "@/hooks/use-mobile";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isMobile = useMobile();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={
            isMobile
              ? "/images/WZ010-10-black-01.jpg"
              : "/images/maxresdefault.png"
          }
          alt="Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute -left-60 -top-60 h-125 w-125 rounded-full bg-violet-600/30 blur-[150px]" />

        <div className="absolute -right-50 -bottom-50 h-125 w-125 rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6 xl:-translate-x-100 xl:-translate-y-20">
        {children}
      </div>
    </main>
  );
}