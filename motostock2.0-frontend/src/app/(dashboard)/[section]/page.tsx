import Link from "next/link";
import { notFound } from "next/navigation";

const sections: Record<string, { title: string; description: string; icon: string }> = {
  pecas: {
    title: "Estoque de peças",
    description: "Acompanhe componentes, níveis mínimos e reposição do estoque.",
    icon: "handyman",
  },
  clientes: {
    title: "Clientes",
    description: "Organize os contatos e o relacionamento com seus clientes.",
    icon: "groups",
  },
  vendas: {
    title: "Vendas",
    description: "Consulte negociações, propostas e vendas realizadas.",
    icon: "point_of_sale",
  },
  relatorios: {
    title: "Relatórios",
    description: "Acompanhe os indicadores e relatórios da concessionária.",
    icon: "analytics",
  },
  usuarios: {
    title: "Usuários",
    description: "Gerencie os acessos e perfis da equipe.",
    icon: "badge",
  },
  configuracoes: {
    title: "Configurações",
    description: "Preferências e configurações da sua unidade.",
    icon: "settings",
  },
};

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const content = sections[section];

  if (!content) {
    notFound();
  }

  return (
    <section className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-elevated text-cyan">
        <span className="material-symbols-outlined text-3xl">{content.icon}</span>
      </span>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">Área do sistema</p>
      <h1 className="mt-2 text-3xl font-bold text-white">{content.title}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{content.description}</p>
      <p className="mt-6 rounded-lg border border-line bg-panel px-4 py-3 text-xs text-slate-400">
        Esta área está estruturada e pronta para receber sua interface e integração de dados.
      </p>
      <Link href="/dashboard" className="mt-6 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-500">
        Voltar ao dashboard
      </Link>
    </section>
  );
}
