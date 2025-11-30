import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavButton, IconButton } from '../HeaderComps';
import { useLang } from '../../context/LangContext';

// need xl: or 1280 min width for dropdown header

function Header() {
  /*
   *  t = language's texts list/table
   *  toggleLang() = toggle the language (id or en)
   *  lang = get current language state value
   */
  const { t, toggleLang, lang } = useLang()
  const [theme, setTheme] = useState<"light" | "dark">("light")

  function toggleTheme() {
    setTheme(t => t === "light" ? "dark" : "light")
    // future: add document.documentElement.classList toggle etc.
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-medium bg-slate-100 shadow-sm">
      <section className="flex items-center justify-between py-3 w-full px-1 md:px-6 lg:px-14 xl:px-32">
        {/* left: WYDO homepage */}
        <div className="flex items-center px-4 py-0">
          <NavLink to="/">
            <img src="/icon.png" alt="WYDO Icon" aria-label="Go to homepage" className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* centre: navlinks */}
        <div>
          <nav>
            <ul className="flex gap-3">
              <li><NavButton to="/" end>{t.header.home}</NavButton></li>
              <li><NavButton to="/predict">{t.header.predict}</NavButton></li>
              <li><NavButton to="/about">{t.header.about}</NavButton></li>
            </ul>
          </nav>
        </div>

        {/* right: theme and lang toggles */}
        <div className="flex gap-1 text-xl">
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
      </section>
    </header>
  )
}

export default Header;
