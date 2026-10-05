import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cadastrar moto" };

const fields = [
  { label: "Marca", placeholder: "Ex.: Honda", required: true },
  { label: "Modelo", placeholder: "Ex.: CB 500F ABS", required: true },
  { label: "Versão / edição", placeholder: "Ex.: Special Edition" },
  { label: "Categoria", placeholder: "Selecione a categoria", required: true, select: true },
  { label: "Ano de fabricação", placeholder: "2024", required: true },
  { label: "Ano do modelo", placeholder: "2024", required: true },
  { label: "Cor principal", placeholder: "Ex.: Vermelho", required: true },
  { label: "Cilindrada (cc)", placeholder: "471", required: true },
  { label: "Combustível", placeholder: "Gasolina", required: true },
];

export default function NovaMotoPage() {
  return (
    <div className="space-y-7">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">Motos <span className="px-1 text-slate-600">›</span> Nova moto</p>
          <h1 className="text-3xl font-bold tracking-tight text-white">Cadastrar nova moto</h1>
          <p className="mt-2 text-sm text-muted">Preencha os dados para adicionar uma motocicleta ao estoque.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/motos" className="rounded-lg border border-line bg-panel px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white">Cancelar</Link>
          <button type="button" disabled className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-accent/60 px-4 py-2.5 text-xs font-bold text-white/80"><span className="material-symbols-outlined text-base">save</span> Salvar moto</button>
        </div>
      </section>

      <form id="new-bike" className="grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <section className="surface-card p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div><h2 className="text-lg font-bold text-white">Dados técnicos principais</h2><p className="mt-1 text-xs text-muted">Informações de identificação do veículo</p></div>
              <span className="material-symbols-outlined text-cyan">tune</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {fields.map((field) => (
                <label key={field.label}>
                  <span className="field-label">{field.label}{field.required && <span className="ml-1 text-accent">*</span>}</span>
                  {field.select ? (
                    <select required={field.required} className="field"><option value="">{field.placeholder}</option><option>Naked</option><option>Big Trail</option><option>Scooter</option><option>SuperSport</option><option>Custom</option></select>
                  ) : (
                    <input required={field.required} placeholder={field.placeholder} className="field" />
                  )}
                </label>
              ))}
            </div>
          </section>

          <section className="surface-card p-5 md:p-6">
            <div className="mb-5"><h2 className="text-lg font-bold text-white">Documentação e identificação</h2><p className="mt-1 text-xs text-muted">Dados para consulta e rastreabilidade</p></div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[["Placa", "BRA2E19"], ["Renavam", "12345678901"], ["Número do chassi (VIN)", "17 caracteres"], ["Quilometragem atual", "12.500 km"], ["Preço de compra", "R$ 33.500,00"], ["Preço de venda", "R$ 39.900,00"]].map(([label, placeholder]) => (
                <label key={label}><span className="field-label">{label}<span className="ml-1 text-accent">*</span></span><input required placeholder={placeholder} className="field" /></label>
              ))}
            </div>
          </section>

          <section className="surface-card p-5 md:p-6">
            <h2 className="text-lg font-bold text-white">Descrição e procedência</h2>
            <label className="mt-5 block"><span className="field-label">Observações para o anúncio</span><textarea rows={5} placeholder="Descreva o estado, histórico de revisões e acessórios..." className="field resize-y" /></label>
          </section>
        </div>

        <aside className="space-y-5">
          <section className="surface-card p-5">
            <div className="flex items-center justify-between"><h2 className="font-bold text-white">Galeria e mídias</h2><span className="font-mono text-[10px] text-muted">0 / 12</span></div>
            <label className="mt-4 flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-line bg-ink/60 px-4 text-center transition hover:border-cyan">
              <span className="material-symbols-outlined text-3xl text-cyan">cloud_upload</span>
              <span className="mt-3 text-xs font-semibold text-slate-200">Arraste as fotos ou clique para selecionar</span>
              <span className="mt-1 text-[10px] text-muted">PNG, JPG ou WEBP · até 10 MB</span>
              <input type="file" accept="image/png,image/jpeg,image/webp" multiple className="sr-only" />
            </label>
          </section>
          <section className="surface-card p-5">
            <h2 className="font-bold text-white">Status e localização</h2>
            <label className="mt-4 block"><span className="field-label">Status operacional</span><select className="field"><option>Disponível para venda</option><option>Reservada</option><option>Em preparação</option></select></label>
            <label className="mt-4 block"><span className="field-label">Localização / box</span><input placeholder="Pátio principal · vaga A-14" className="field" /></label>
          </section>
          <section className="rounded-xl border border-cyan/20 bg-cyan/5 p-4">
            <p className="flex items-center gap-2 text-xs font-semibold text-cyan"><span className="material-symbols-outlined text-base">info</span> Cadastro em modo de demonstração</p>
            <p className="mt-2 text-[11px] leading-relaxed text-muted">Este formulário é demonstrativo. Salvar dados e enviar fotos depende da integração com uma API.</p>
          </section>
        </aside>
      </form>
    </div>
  );
}
