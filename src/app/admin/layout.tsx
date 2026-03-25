import { redirect } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

// Basit şifre koruması — production'da ADMIN_SECRET env var ile
async function checkAuth() {
  const headersList = await headers();
  const cookie = headersList.get("cookie") ?? "";
  const isAuthed = cookie.includes(`admin_token=${process.env.ADMIN_SECRET ?? "spinora_admin_2024"}`);
  return isAuthed;
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const authed = await checkAuth();
  if (!authed) redirect("/admin/login");
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">Spinora <span className="text-brand-400">Admin</span></span>
        <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← Back to site</a>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
