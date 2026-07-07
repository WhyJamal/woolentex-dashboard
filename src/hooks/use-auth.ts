"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/auth";
import { useAuthStore } from "@/lib/auth-store";

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const setUser = useAuthStore((s) => s.setUser);
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  async function login(login: string, password: string) {
    setIsLoading(true);
    setError(null);

    try {
      const result = await loginAction(login, password);

      if (result.error) {
        setError(result.error);
        return false;
      }

      setUser(result.user);
      router.push("/dashboard");
      return true;
    } catch {
      setError("Не удалось подключиться к серверу.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return { login, logout, user, isAuthenticated, isLoading, error };
}