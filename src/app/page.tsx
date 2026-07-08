import { getSession } from "@/lib/auth/get-session";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const session = await getSession();

  if (session) {
    redirect("/kpi");
  }

  redirect("/sign-in");
}