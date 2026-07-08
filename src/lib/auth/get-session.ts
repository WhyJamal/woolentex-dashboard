import { cookies } from "next/headers";

export interface Session {
  id: string;
  login: string;
  fio?: string;
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get("session_user")?.value;

  if (!raw) return null;

  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}