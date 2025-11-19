import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavButton, IconButton } from '../HeaderComps';

function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [lang, setLang] = useState<"id" | "en">("id")

  function toggleTheme() {
    setTheme(t => t === "light" ? "dark" : "light")
    // future: add document.documentElement.classList toggle etc.
  }

  function toggleLang() {
    setLang(l => l === "id" ? "en" : "id")
    // future: integrate translation logic
  }

  return (
    <header className="font-medium">
      <section className="flex items-center justify-between px-0 py-7 w-full">
        {/* left: WYDO homepage */}
        <div className="">
          <span className="text-xl bg-cyan-600">WYDO</span>
        </div>

        {/* centre: navlinks */}
        <div>
          <nav>
            <ul className="flex gap-6">
              <li><NavButton to="/" end>Home</NavButton></li>
              <li><NavButton to="/predict">Predict!</NavButton></li>
              <li><NavButton to="/about">About</NavButton></li>
            </ul>
          </nav>
        </div>

        {/* right: theme and lang toggles */}
        <div className="flex gap-1 text-xl">
          <IconButton
            onClick={toggleLang}
            ariaLabel={`Switch language to ${lang === "id" ? "English" : "Bahasa Indonesia"}`}
            title="Toggle language"
          >
            <span className="font-extrabold">
              {lang.toUpperCase()}
            </span>
          </IconButton>

          <IconButton
            onClick={toggleTheme}
            ariaLabel={`Switch theme to ${theme === "light" ? "dark" : "light"} mode`}
            title="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
          </IconButton>
        </div>
      </section>
    </header>
  )
}

export default Header;
