import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-200">Medizinisch-ästhetische Hautpflege</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Monter Medical Skin Care
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-xl">
              Präzision, Ästhetik und modernste Technologie – für sichtbar schöne Haut. Ruhig, vertrauenswürdig und professionell.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/booking" className="px-5 py-3 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium shadow ring-1 ring-white/10 hover:from-sky-400 hover:to-blue-500">
                Termin buchen
              </Link>
              <Link to="/services" className="px-5 py-3 rounded-md bg-white/10 text-white font-medium ring-1 ring-white/15 hover:bg-white/15">
                Leistungen ansehen
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="lg:pl-12"
          >
            <div className="grid grid-cols-2 gap-4 max-w-lg ml-auto">
              {[
                { title: 'Laser-Haarentfernung', desc: 'Effizient, präzise, hautschonend' },
                { title: 'Permanent Make-up', desc: 'Natürliche Betonung Ihres Gesichts' },
                { title: 'Kosmetik & Facials', desc: 'Individuell abgestimmte Behandlungen' },
                { title: 'Hygiene & Zertifikate', desc: 'Medizinische Standards' },
              ].map((c, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                  <h3 className="text-white font-medium">{c.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
