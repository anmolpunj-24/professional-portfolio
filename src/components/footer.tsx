export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#10B981]/30 bg-[#050706] px-6 py-8 lg:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <div className="group flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_14px_rgba(16,185,129,0.6)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#34D399]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A3AEA8] transition-colors duration-300 group-hover:text-white">
            © 2026 <span className="text-[#34D399]">Anmol Punj</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]">
          <span className="text-[#66736D]">Role</span>

          <span className="h-1 w-1 rounded-full bg-[#10B981]/70" />

          <span className="text-[#D4DDD8] transition-colors duration-300 hover:text-[#34D399]">
            Full Stack Developer
          </span>
        </div>

        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em]">
          <span className="text-[#66736D]">Built with</span>

          <span className="text-[#34D399] transition-colors duration-300 hover:text-white">
            Next.js
          </span>

          <span className="text-[#10B981]">·</span>

          <span className="text-[#A3AEA8] transition-colors duration-300 hover:text-[#34D399]">
            TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
