import Link from 'next/link';

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/dashboard"
      className="inline-flex items-center gap-3"
      aria-label="MotoStock, início"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-glow">
        <span className="material-symbols-outlined">two_wheeler</span>
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-base font-extrabold tracking-tight text-white">
            MotoStock{' '}
            <span className="font-mono text-xs font-semibold text-accent">
              2.0
            </span>
          </span>
          <span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-muted">
            GESTÃO DE ESTOQUE
          </span>
        </span>
      )}
    </Link>
  );
}
