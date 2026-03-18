export default function Header({ onNav, currentPage }) {
  const navItems = [
    { id:"home",  label:"Diagnose",   icon:"🔍" },
    { id:"rules", label:"Rules",      icon:"📋" },
    { id:"tests", label:"Test Cases", icon:"✅" },
    { id:"about", label:"About",      icon:"📖" },
  ];

  return (
    <header className="text-white px-4 md:px-6 shadow-lg sticky top-0 z-50 relative overflow-hidden bg-[var(--sb-primary-dark)] border-b border-white/10">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--sb-primary-dark)] via-[var(--sb-primary)] to-[var(--sb-primary-dark)]/90" />
      <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between h-20 relative z-10">
        {/* Logo */}
        <button onClick={() => onNav("home")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-11 h-11 rounded-2xl bg-[var(--sb-primary)] flex items-center justify-center text-2xl shadow-md">🌱</div>
          <div>
            <h1 className="font-display text-2xl leading-none tracking-tight">
              Smart<span className="text-[var(--sb-accent)]">Botanica</span>
            </h1>
            <p className="text-[10px] text-white/55 tracking-[0.22em] uppercase">Plant Expert System</p>
          </div>
        </button>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1 glass-panel rounded-2xl border border-white/10 px-2 py-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all
                ${currentPage === item.id
                  ? "bg-[var(--sb-primary)] text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        <nav className="flex md:hidden items-center gap-1">
          {navItems.slice(0, 4).map(item => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`w-10 h-10 rounded-xl text-sm transition-all ${currentPage === item.id ? "bg-[var(--sb-primary)]" : "bg-white/10"}`}
            >
              {item.icon}
            </button>
          ))}
        </nav>

        {/* Slogan */}
        <p className="hidden xl:block text-xs text-[var(--sb-accent)]/80 italic max-w-[220px] text-right leading-tight">
          "Turning leaves into knowledge, roots into solutions."
        </p>
      </div>
    </header>
  );
}
