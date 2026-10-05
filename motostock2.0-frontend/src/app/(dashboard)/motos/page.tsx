import Link from "next/link";

const bikes = [
  { make: "Honda", model: "CB 500F ABS", category: "Naked", year: "2024/2024", km: "12.500 km", plate: "BRA-2E19", color: "Vermelha Victory", price: "R$ 39.900", status: "Disponível" },
  { make: "Yamaha", model: "MT-07 ABS", category: "Naked", year: "2023/2023", km: "8.200 km", plate: "SP-MT079", color: "Azul Racing Blue", price: "R$ 45.500", status: "Reservada" },
  { make: "BMW Motorrad", model: "F 850 GS Adventure", category: "Big Trail", year: "2023/2024", km: "14.100 km", plate: "PR-GS850", color: "Cinza Fosco", price: "R$ 68.900", status: "Disponível" },
  { make: "Kawasaki", model: "Ninja ZX-6R", category: "SuperSport", year: "2022/2023", km: "6.400 km", plate: "RJ-ZX600", color: "Verde KRT", price: "R$ 62.000", status: "Disponível" },
  { make: "Triumph", model: "Tiger 900 Rally Pro", category: "Big Trail", year: "2023/2023", km: "11.200 km", plate: "MG-TG900", color: "Preta White", price: "R$ 65.500", status: "Vendida" },
];

export default function MotosPage() {
  return (
    <div className="space-y-7">
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan"><span className="h-2 w-2 rounded-full bg-cyan" /> Frota ativa <span className="text-muted">· SYS.REV // 2025.1</span></p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Motos em estoque</h1>
          <p className="mt-2 max-w-xl text-sm text-muted">Gerencie motocicletas disponíveis, histórico de revisões e preços do pátio.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-lg border border-line bg-panel px-3 py-2.5 text-xs font-semibold text-slate-300 hover:text-white">Exportar lista</button>
          <Link href="/motos/nova" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-xs font-bold text-white hover:bg-red-500"><span className="material-symbols-outlined text-base">add</span> Nova moto</Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[["Total na frota", "128", "4 adicionadas hoje", "two_wheeler"], ["Disponíveis", "94", "73,4% da frota", "check_circle"], ["Reservadas / F&I", "18", "Em proposta", "lock"], ["Vendas no mês", "16", "+18,5% este mês", "local_fire_department"]].map(([label, value, note, icon], index) => (
          <article key={label} className="surface-card p-5">
            <div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-wider text-muted">{label}</span><span className={`material-symbols-outlined ${index === 2 ? "text-amber" : index === 1 ? "text-cyan" : "text-slate-400"}`}>{icon}</span></div>
            <p className="mt-4 text-3xl font-bold text-white">{value}</p>
            <p className="mt-1 text-[11px] text-muted">{note}</p>
          </article>
        ))}
      </section>

      <section className="surface-card p-4 md:p-5">
        <div className="flex flex-col gap-3 md:flex-row">
          <label className="flex flex-1 items-center gap-3 rounded-lg border border-line bg-ink/70 px-3.5">
            <span className="material-symbols-outlined text-muted">search</span>
            <input type="search" placeholder="Buscar por marca, modelo, placa ou chassi..." className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500" aria-label="Buscar motocicletas" />
          </label>
          <select className="field md:max-w-48" aria-label="Filtrar por categoria"><option>Todas as categorias</option><option>Naked</option><option>Big Trail</option><option>Scooter</option></select>
          <select className="field md:max-w-44" aria-label="Filtrar por status"><option>Todos os status</option><option>Disponível</option><option>Reservada</option><option>Vendida</option></select>
        </div>
        <p className="mt-4 font-mono text-[10px] text-muted">Filtros aplicados: <span className="text-cyan">Frota ativa</span> <button className="ml-2 text-slate-300 hover:text-white">Redefinir</button></p>
      </section>

      <section className="surface-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-elevated font-mono text-[10px] uppercase tracking-wider text-muted">
              <tr><th className="px-5 py-4 font-medium">Foto & identificação</th><th className="px-4 py-4 font-medium">Categoria</th><th className="px-4 py-4 font-medium">Ano/modelo</th><th className="px-4 py-4 font-medium">Quilometragem</th><th className="px-4 py-4 font-medium">Placa & cor</th><th className="px-4 py-4 font-medium">Preço</th><th className="px-4 py-4 font-medium">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-line/70">
              {bikes.map((bike) => (
                <tr key={bike.plate} className="transition hover:bg-elevated/40">
                  <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="flex h-12 w-14 items-center justify-center rounded-lg bg-elevated text-slate-500"><span className="material-symbols-outlined text-2xl">two_wheeler</span></span><span><span className="block font-semibold text-white">{bike.make} {bike.model}</span><span className="mt-1 block font-mono text-[10px] text-muted">CH: ...98342</span></span></div></td>
                  <td className="px-4 py-4"><span className="rounded bg-elevated px-2 py-1 text-[10px] text-slate-300">{bike.category}</span></td>
                  <td className="px-4 py-4 font-mono text-xs text-slate-300">{bike.year}</td>
                  <td className="px-4 py-4 font-mono text-xs text-slate-300">{bike.km}</td>
                  <td className="px-4 py-4"><span className="block font-mono text-xs text-slate-200">{bike.plate}</span><span className="mt-1 block text-[10px] text-muted">{bike.color}</span></td>
                  <td className="px-4 py-4 font-mono text-xs font-semibold text-white">{bike.price}</td>
                  <td className="px-4 py-4"><span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold ${bike.status === "Disponível" ? "bg-cyan/10 text-cyan" : bike.status === "Reservada" ? "bg-amber/10 text-amber" : "bg-slate-700 text-slate-300"}`}>● {bike.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 text-[11px] text-muted">
          <span>Mostrando 1–5 de 128 motocicletas</span>
          <div className="flex gap-2"><button className="rounded bg-elevated px-3 py-2 text-slate-300">‹</button><button className="rounded bg-accent px-3 py-2 font-semibold text-white">1</button><button className="rounded bg-elevated px-3 py-2 text-slate-300">2</button><button className="rounded bg-elevated px-3 py-2 text-slate-300">3</button><button className="rounded bg-elevated px-3 py-2 text-slate-300">›</button></div>
        </div>
      </section>
    </div>
  );
}
