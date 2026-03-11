export default function Header({ onNav, currentPage }) {
  const navItems = [
    { id:"home",  label:"Diagnose",   icon:"🔍" },
    { id:"rules", label:"Rules",      icon:"📋" },
    { id:"tests", label:"Test Cases", icon:"✅" },
    { id:"about", label:"About",      icon:"📖" },
  ];

  return (
    <header className="bg-[#2c4a2e] text-white px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => onNav("home")} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 rounded-xl bg-[#4a7c59] flex items-center justify-center text-2xl">🌱</div>
          <div>
            <h1 className="font-display text-xl leading-none tracking-tight">
              Smart<span className="text-[#a8d5a2]">Botanica</span>
            </h1>
            <p className="text-[10px] text-white/50 tracking-widest uppercase">Plant Expert System</p>
          </div>
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all
                ${currentPage === item.id
                  ? "bg-[#4a7c59] text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
            >
              <span>{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Slogan */}
        <p className="hidden lg:block text-xs text-[#a8d5a2]/70 italic max-w-[200px] text-right leading-tight">
          "Turning leaves into knowledge, roots into solutions."
        </p>
      </div>
    </header>
  );
}