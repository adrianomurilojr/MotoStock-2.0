"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Brand } from "@/components/brand";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: "space_dashboard" },
  { href: "/motos", label: "Motos", icon: "two_wheeler" },
  { href: "/motos/nova", label: "Cadastrar moto", icon: "add_circle" },
  { href: "/pecas", label: "Estoque de peças", icon: "handyman" },
  { href: "/clientes", label: "Clientes", icon: "groups" },
  { href: "/vendas", label: "Vendas", icon: "point_of_sale" },
  { href: "/relatorios", label: "Relatórios", icon: "analytics" },
  { href: "/usuarios", label: "Usuários", icon: "badge" },
  { href: "/configuracoes", label: "Configurações", icon: "settings" },
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-ink">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line/70 bg-panel lg:flex">
        <div className="flex h-[76px] items-center border-b border-line/70 px-6">
          <Brand />
        </div>
        <div className="px-5 pb-2 pt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
          Menu principal
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {links.map((link, index) => {
            const active = pathname === link.href;

            return (
              <Link
                key={`${link.label}-${index}`}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-accent text-white shadow-glow"
                    : "text-slate-400 hover:bg-elevated hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[19px]">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto border-t border-line/70 p-4">
          <div className="flex items-center gap-3 rounded-lg bg-ink/70 p-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-elevated font-bold text-cyan">
              RS
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold text-white">Murilo</span>
              <span className="mt-1 block text-[11px] text-muted">Administrador</span>
            </span>
            <Link href="/login" className="material-symbols-outlined text-muted hover:text-white" aria-label="Sair">
              logout
            </Link>
          </div>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex min-h-[76px] items-center justify-between gap-4 border-b border-line/70 bg-ink/95 px-4 backdrop-blur md:px-8">
          <div className="lg:hidden">
            <Brand compact />
          </div>
          <label className="hidden max-w-xl flex-1 items-center gap-3 rounded-lg border border-line bg-panel px-4 py-2.5 md:flex">
            <span className="material-symbols-outlined text-muted">pesquisar</span>
            <input
              type="search"
              placeholder="Buscar motos, placas, clientes, peças..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              aria-label="Buscar no sistema"
            />
            <kbd className="whitespace-nowrap rounded bg-elevated px-2 py-1 font-mono text-[10px] text-muted">Ctrl K</kbd>
          </label>
          <div className="ml-auto flex items-center gap-3">
            <Link href="/motos" className="rounded-lg px-2 py-2 text-xs font-semibold text-slate-300 hover:text-white lg:hidden">Motos</Link>
            <span className="hidden rounded-full border border-line bg-panel px-3 py-2 font-mono text-[10px] text-slate-300 sm:inline-flex">
              <span className="mr-2 text-cyan">●</span> Matriz · Piranhas-AL
            </span>
            <button className="relative hidden h-10 w-10 items-center justify-center rounded-lg bg-panel text-slate-300 hover:text-white sm:flex" aria-label="Notificações">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] text-white">3</span>
            </button>
            <Link href="/motos/nova" className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-red-500 sm:px-4 sm:text-sm">
              <span className="material-symbols-outlined text-base">add</span>
              <span className="hidden sm:inline">Nova moto</span>
              <span className="sm:hidden">Cadastrar</span>
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-[1600px] px-4 py-7 md:px-8 md:py-9">{children}</main>
      </div>
    </div>
  );
}
