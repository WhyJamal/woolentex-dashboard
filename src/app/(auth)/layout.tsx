import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute -left-62.5 -top-62.5 h-125 w-125 rounded-full bg-violet-600/30 blur-[150px]" />

        <div className="absolute -right-50 -bottom-50 h-125 w-125 rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        {children}
      </div>
    </main>
  );
}