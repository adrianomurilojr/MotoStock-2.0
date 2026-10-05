import Link from "next/link";

const stats = [
  { label: "Motos em estoque", value: "128", note: "+12% vs. mês anterior", icon: "two_wheeler", tone: "text-cyan", bar: "w-[78%] bg-cyan" },
  { label: "Vendas no mês", value: "14", note: "de 20 da meta", icon: "trending_up", tone: "text-accent", bar: "w-[70%] bg-accent" },
  { label: "Valor do estoque", value: "R$ 1,25 mi", note: "Ticket médio R$ 42.800", icon: "account_balance_wallet", tone: "text-amber", bar: "w-[62%] bg-amber" },
  { label: "Clientes ativos", value: "327", note: "+24 este mês", icon: "groups", tone: "text-cyan", bar: "w-[54%] bg-cyan" },
  { label: "Estoque crítico", value: "8 itens", note: "Atenção à reposição", icon: "warning", tone: "text-red-300", bar: "w-[28%] bg-accent" },
];

const recentBikes = [
  { make: "HONDA", model: "CB 500F ABS", year: "2024", km: "12.500 km", price: "R$ 39.900", status: "Disponível", icon: "two_wheeler" },
  { make: "YAMAHA", model: "MT-07 ABS", year: "2023", km: "8.200 km", price: "R$ 45.500", status: "Reservada", icon: "two_wheeler" },
  { make: "BMW MOTORRAD", model: "F 850 GS Premium", year: "2023", km: "14.100 km", price: "R$ 68.900", status: "Disponível", icon: "two_wheeler" },
  { make: "KAWASAKI", model: "Z900 ABS", year: "2022", km: "19.800 km", price: "R$ 51.000", status: "Vendida", icon: "two_wheeler" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
            <span className="h-2 w-2 rounded-full bg-cyan" /> Painel executivo
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
          <p className="mt-2 text-sm text-muted">Visão geral do seu negócio e performance do pátio.</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-line bg-panel px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white">Últimos 30 dias</button>
          <button className="rounded-lg border border-line bg-panel px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white">Exportar relatório</button>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5" aria-label="Indicadores">
        {stats.map((stat) => (
          <article key={stat.label} className="surface-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-slate-400">{stat.label}</p>
              <span className={`material-symbols-outlined ${stat.tone}`}>{stat.icon}</span>
            </div>
            <p className="mt-5 text-2xl font-bold tracking-tight text-white">{stat.value}</p>
            <p className={`mt-1 text-[11px] ${stat.tone}`}>{stat.note}</p>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-elevated">
              <div className={`h-full rounded-full ${stat.bar}`} />
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
        <article className="surface-card p-5 md:p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-white">Evolução de vendas</h2>
              <p className="mt-1 text-xs text-muted">Histórico financeiro e volume de unidades negociadas</p>
            </div>
            <span className="rounded-md bg-elevated px-3 py-1.5 font-mono text-[10px] text-cyan">2025 · VALOR (R$)</span>
          </div>
          <div className="mt-7 flex items-end justify-between gap-2 border-b border-line pb-3">
            {[36, 48, 44, 61, 59, 70, 82, 72, 91, 76, 98, 86].map((height, index) => (
              <div key={index} className="flex h-48 flex-1 items-end">
                <div className="w-full rounded-t bg-gradient-to-t from-cyan/10 to-cyan/80" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[9px] text-slate-500">
            {["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"].map((month) => <span key={month}>{month}</span>)}
          </div>
        </article>
        <article className="surface-card p-5 md:p-6">
          <h2 className="text-base font-bold text-white">Composição do estoque</h2>
          <p className="mt-1 text-xs text-muted">Distribuição por categoria</p>
          <div className="my-7 flex items-center justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full" style={{ background: "conic-gradient(#ef2b32 0 38%, #68c8f2 38% 68%, #ffbd59 68% 86%, #28334a 86% 100%)" }}>
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-panel">
                <span className="font-mono text-[9px] text-muted">EM ESTOQUE</span>
                <span className="mt-1 text-2xl font-bold text-white">128</span>
                <span className="text-[10px] text-muted">motocicletas</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {[["Naked", "38%", "bg-accent"], ["Big trail", "30%", "bg-cyan"], ["Scooter", "18%", "bg-amber"], ["Outras", "14%", "bg-slate-600"]].map(([name, value, color]) => (
              <div key={name} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-300"><span className={`h-2 w-2 rounded-full ${color}`} />{name}</span>
                <span className="font-mono text-muted">{value}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="surface-card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
          <div>
            <h2 className="text-base font-bold text-white">Motos adicionadas recentemente</h2>
            <p className="mt-1 text-xs text-muted">Veículos recém-vistoriados e integrados ao catálogo</p>
          </div>
          <Link href="/motos" className="text-xs font-semibold text-cyan hover:text-white">Ver todas as motos →</Link>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-4">
          {recentBikes.map((bike) => (
            <article key={bike.model} className="rounded-lg border border-line bg-ink/50 p-4">
              <div className="flex h-28 items-center justify-center rounded-lg bg-gradient-to-br from-elevated to-ink">
                <span className="material-symbols-outlined text-5xl text-slate-500">{bike.icon}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted">{bike.make}</span>
                <span className={`rounded px-2 py-1 text-[9px] ${bike.status === "Reservada" ? "bg-amber/10 text-amber" : bike.status === "Vendida" ? "bg-slate-700 text-slate-300" : "bg-cyan/10 text-cyan"}`}>{bike.status}</span>
              </div>
              <h3 className="mt-2 font-semibold text-white">{bike.model}</h3>
              <p className="mt-1 text-[11px] text-muted">{bike.year} · {bike.km}</p>
              <p className="mt-3 font-mono text-sm font-semibold text-white">{bike.price}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
