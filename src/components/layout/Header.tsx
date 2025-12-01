import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faMoon, faSun, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavButton, IconButton } from '../HeaderComps';
import { useLang } from '../../context/LangContext';

function Header() {
  /*
   *  t = language's texts list/table
   *  toggleLang() = toggle the language (id or en)
   *  lang = get current language state value
   */
  const { t, toggleLang, lang } = useLang();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function toggleTheme() {
    setTheme(t => t === "light" ? "dark" : "light")
    // future: add document.documentElement.classList toggle etc.
  }

  console.log(isMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 font-medium bg-slate-100 shadow-sm">
        <section className="flex items-center justify-between py-2.5 w-full px-1 md:px-6 lg:px-14 xl:px-32">
          {/* left: WYDO homepage */}
          <div className="flex items-center px-4 py-0">
            <NavLink to="/">
              <img src="/icon.png" alt="WYDO Icon" aria-label="Go to homepage" className="h-10 w-auto" />
            </NavLink>
          </div>

          {/* centre: navlinks (hidden on mobile) */}
          <div className="hidden md:block">
            <nav>
              <ul className="flex gap-3">
                <li><NavButton to="/" end>{t.header.home}</NavButton></li>
                <li><NavButton to="/predict">{t.header.predict}</NavButton></li>
                <li><NavButton to="/about">{t.header.about}</NavButton></li>
              </ul>
            </nav>
          </div>

          {/* right: theme and lang toggles (on desktop) */}
          <div className="gap-3.5 text-xl hidden md:flex">
            {/* lang button */}
            <IconButton
              onClick={toggleLang}
              ariaLabel={`Switch language to ${t.name}`}
              title=""
            >
              <span className="font-extrabold">{lang.toUpperCase()}</span>
            </IconButton>

            {/* theme button */}
            <IconButton
              onClick={toggleTheme}
              ariaLabel={`Switch theme to ${theme === "light" ? "dark" : "light"} mode`}
              title=""
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
            </IconButton>
          </div>

          {/* right: hamburger (on mobile) */}
          <div className="block md:hidden">
            <IconButton
              onClick={() => setMenuOpen(!isMenuOpen)}
              ariaLabel={isMenuOpen ? "Close dropdown menu" : "Open dropdown menu"}
              className="px-3"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl"
                className={`transition-transform duration-300 ${isMenuOpen ? "rotate-90" : "rotate-0"}`} />
            </IconButton>
          </div>
        </section>
      </header>

      {/* mobile dropdown overlay (opened with hamburger, on mobile) */}
      <div
        className={`
          fixed inset-0 z-40 bg-slate-100 md:hidden transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"}
        `}
      >
        <div className="pt-[3.65rem] px-4 flex flex-col">
          {/* navlinks */}
          <nav className="flex flex-col border-slate-200 divide-y divide-slate-200">
            <NavLink
              to="/" end onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                `block w-full text-left px-2 py-3 text-base
                ${isActive ? "text-cyan-700 font-bold" : "text-slate-700 hover:text-slate-950"}`
              }
            > {t.header.home}
            </NavLink>

            <NavLink
              to="/predict" end onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                `block w-full text-left px-2 py-3 text-base
                ${isActive ? "text-cyan-700 font-bold" : "text-slate-700 hover:text-slate-950"}`
              }
            > {t.header.predict}
            </NavLink>

            <NavLink
              to="/about" end onClick={() => setMenuOpen(false)} className={({ isActive }) =>
                `block w-full text-left px-2 py-3 text-base
                ${isActive ? "text-cyan-700 font-bold" : "text-slate-700 hover:text-slate-950"}`
              }
            > {t.header.about}
            </NavLink>
          </nav>

          {/* theme and lang toggles */}
          <div className="mt-auto pt-5 border-t border-slate-200 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={toggleLang}
              className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700"
            >
              {t.name}
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
              <span>{theme === "light" ? "Dark" : "Light"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
