import type React from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NavButtonProps = {
  to: NavLinkProps["to"]
  end?: boolean
  children: React.ReactNode
}

function NavButton({ to, end = false, children }: NavButtonProps) {
  return (
    <NavLink to={to} end={end}
      className={({ isActive }) =>
        isActive
          ? "px-5 py-2 rounded-lg text-slate-200 bg-cyan-600 shadow-md transition"
          : "px-5 py-2 rounded-lg text-slate-600 hover:text-slate-950 transition"
      }
    >
      {children}
    </NavLink>
  )
}

function Header() {
  return (
    <header className="font-medium">
      <section className="flex items-center justify-between px-6 py-7 w-full">
        {/* left header */}
        <div className="">
          <span className="text-xl bg-cyan-600">WYDO</span>
        </div>

        {/* centre: navlinks */}
        <div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavButton to="/" end>Home</NavButton>
              </li>
              <li>
                <NavButton to="/predict">Predict!</NavButton>
              </li>
              <li>
                <NavButton to="/about">About</NavButton>
              </li>
            </ul>
          </nav>
        </div>

        {/* right header */}
        <div className="">
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </div>
      </section>
    </header>
  )
}

export default Header;
