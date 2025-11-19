import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8 text-slate-300">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 ring-1 ring-white/20" />
            <div className="text-white font-semibold">Monter Medical</div>
          </div>
          <p className="mt-3 text-sm text-slate-400">Ruhige, professionelle Hautpflege mit medizinischem Anspruch.</p>
        </div>
        <div>
          <h4 className="text-white font-medium">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/">Start</Link></li>
            <li><Link to="/about">Über mich</Link></li>
            <li><Link to="/services">Leistungen</Link></li>
            <li><Link to="/booking">Termin</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Telefon: 01234 567890</li>
            <li>E-Mail: info@monter-skin.de</li>
            <li>Mo–Fr 10–18 Uhr</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium">Termin</h4>
          <p className="mt-3 text-sm">Buchen Sie Ihren Wunschtermin bequem online.</p>
          <Link to="/booking" className="inline-block mt-3 px-4 py-2 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm ring-1 ring-white/10">Termin buchen</Link>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-white/10">© {new Date().getFullYear()} Monter Medical Skin Care</div>
    </footer>
  )
}

export default Footer
