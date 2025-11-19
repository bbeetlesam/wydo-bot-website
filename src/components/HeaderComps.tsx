// Header-specific components and properties
import type React from "react"
import { NavLink, type NavLinkProps } from "react-router-dom"

type NavButtonProps = {
  to: NavLinkProps["to"]
  end?: boolean
  children: React.ReactNode
}

type IconButtonProps = {
  onClick: () => void
  ariaLabel: string
  title?: string
  className?: string
  children: React.ReactNode
}

export function NavButton({ to, end = false, children }: NavButtonProps) {
  return (
    <NavLink to={to} end={end}
      className={({ isActive }) =>
        isActive
          ? "px-5 py-2.5 rounded-lg text-slate-200 bg-cyan-600 shadow-md transition"
          : "px-5 py-2.5 rounded-lg text-slate-600 hover:text-slate-950 transition"
      }
    >
      {children}
    </NavLink>
  )
}

export function IconButton({ onClick, ariaLabel, title, className = "", children }: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className={`inline-flex items-center justify-center p-1.5 rounded-lg
      text-slate-600 hover:text-slate-950 transition
      ${className}`}
    >
      {children}
    </button>
  )
}

