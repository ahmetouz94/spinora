import { Users, Eye, TrendingUp, ShoppingCart } from "lucide-react";

// Gerçek veriler GA4 API veya Vercel Analytics ile gelir
// Şimdilik statik placeholder — ileride API route ile dinamik yapılır
const STATS = [
  { label: "Total Visitors", value: "—", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Page Views", value: "—", icon: Eye, color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "Conversion Rate", value: "—", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Orders", value: "—", icon: ShoppingCart, color: "text-brand-400", bg: "bg-brand-500/10" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-slate-400 mt-1">Welcome back. Here&apos;s your store overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-400">{stat.label}</span>
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Analytics Integration Box */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-white mb-2">Connect Analytics</h2>
        <p className="text-slate-400 text-sm mb-4">
          Connect Google Analytics 4 or Vercel Analytics to see real-time visitor data.
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-slate-300">Add <code className="text-brand-400">NEXT_PUBLIC_GA_ID</code> to your environment variables</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-slate-300">Or enable <strong className="text-white">Vercel Analytics</strong> in your Vercel project settings (free)</span>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-slate-800 p-3">
            <div className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="text-slate-300">Set <code className="text-brand-400">ADMIN_SECRET</code> env var to change your admin password</span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
            Google Analytics →
          </a>
          <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
            Search Console →
          </a>
          <a href="https://merchants.google.com" target="_blank" rel="noopener noreferrer"
            className="rounded-lg bg-slate-800 p-3 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors">
            Merchant Center →
          </a>
        </div>
      </div>
    </div>
  );
}
