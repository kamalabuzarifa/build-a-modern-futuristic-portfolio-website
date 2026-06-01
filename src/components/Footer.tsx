interface FooterProps {
  text: string;
}

export function Footer({ text }: FooterProps) {
  return (
    <footer className="border-t border-slate-300/70 py-8 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">{text}</p>
      </div>
    </footer>
  );
}
