import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Calendar, PhoneCall } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-slate-200/90 hover:text-white'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-inner shadow-blue-400/30 ring-1 ring-white/20" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold tracking-wide">Monter Medical</span>
              <span className="text-xs text-slate-300">Skin Care</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem({ to: '/', label: 'Start' })}
            {navItem({ to: '/about', label: 'Über mich' })}
            {navItem({ to: '/services', label: 'Leistungen' })}
            {navItem({ to: '/booking', label: 'Termin' })}
            {navItem({ to: '/contact', label: 'Kontakt' })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+491234567890" className="inline-flex items-center gap-2 text-slate-200 hover:text-white text-sm">
              <PhoneCall className="w-4 h-4" /> 01234 567890
            </a>
            <Link to="/booking" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow ring-1 ring-white/10 hover:from-sky-400 hover:to-blue-500">
              <Calendar className="w-4 h-4" /> Termin buchen
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            <Link to="/" className="py-2 text-slate-200" onClick={() => setOpen(false)}>Start</Link>
            <Link to="/about" className="py-2 text-slate-200" onClick={() => setOpen(false)}>Über mich</Link>
            <Link to="/services" className="py-2 text-slate-200" onClick={() => setOpen(false)}>Leistungen</Link>
            <Link to="/booking" className="py-2 text-slate-200" onClick={() => setOpen(false)}>Termin</Link>
            <Link to="/contact" className="py-2 text-slate-200" onClick={() => setOpen(false)}>Kontakt</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
