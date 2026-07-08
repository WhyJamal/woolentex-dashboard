export function getInitials(user: { name?: string | null } | null | undefined) {
  if (!user?.name) return "??";

  return user.name
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}