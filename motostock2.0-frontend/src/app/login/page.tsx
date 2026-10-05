import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/components/brand";

export const metadata: Metadata = { title: "Acesso" };

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-8 md:flex md:items-center md:justify-center md:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl md:min-h-[650px] md:grid-cols-2">
        <section className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-panel via-[#121a2d] to-[#101a2e] p-10 md:flex">
          <div className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <Brand />
            <p className="mt-6 max-w-xs text-lg leading-relaxed text-slate-300">Gestão inteligente para o seu estoque de alta performance.</p>
          </div>
          <div className="relative rounded-xl border border-line bg-ink/70 p-6">
            <div className="flex h-60 items-center justify-center rounded-lg bg-gradient-to-br from-elevated to-ink">
              <img src="/images/moto-login.jpg" alt="Moto em exposição" className="h-full w-full rounded-lg object" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div><p className="font-mono text-[10px] tracking-widest text-cyan">SHOWROOM MASTER</p><p className="mt-1 font-semibold text-white">Apex Series · Grade 2025</p></div>
              <span className="rounded bg-cyan/10 px-2 py-1 font-mono text-[10px] text-cyan">LIVE</span>
            </div>
          </div>
          <p className="relative text-xs text-muted">Ambiente de demonstração · MotoStock 2.0</p>
        </section>

        <section className="flex items-center justify-center px-6 py-10 sm:px-12">
          <div className="w-full max-w-sm">
            <div className="mb-8 md:hidden"><Brand /></div>
            <div className="mb-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">Acesso de colaborador</p>
              <h1 className="text-3xl font-bold tracking-tight text-white">Bem-vindo de volta</h1>
              <p className="mt-2 text-sm leading-relaxed text-muted">Entre na sua conta para acessar o ecossistema MotoStock 2.0.</p>
            </div>
            <div className="space-y-5">
              <label className="block"><span className="field-label">E-mail corporativo</span><input type="email" autoComplete="email" placeholder="voce@empresa.com.br" className="field" /></label>
              <label className="block"><span className="field-label">Senha</span><input type="password" autoComplete="current-password" placeholder="Digite sua senha" className="field" /></label>
              <div className="flex items-center justify-between gap-3 text-xs">
                <label className="flex items-center gap-2 text-slate-300"><input type="checkbox" className="accent-accent" /> Manter conectado</label>
                <button type="button" className="font-semibold text-cyan hover:text-white">Esqueci minha senha</button>
              </div>
              <Link href="/dashboard" className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3.5 font-bold text-white shadow-glow transition hover:bg-red-500">
                Explorar demonstração <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
            <p className="mt-6 rounded-lg border border-amber/20 bg-amber/5 p-3 text-[11px] leading-relaxed text-amber">Demonstração visual: autenticação ainda não conectada a um serviço de acesso.</p>
            <p className="mt-6 text-center text-xs text-muted">Ainda não possui acesso? <span className="font-semibold text-cyan">Fale com a gerência</span></p>
          </div>
        </section>
      </div>
    </main>
  );
}
