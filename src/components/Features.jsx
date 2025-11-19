import { ShieldCheck, Microscope, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Vertrauen & Hygiene',
      desc: 'Sterile Arbeitsweise, zertifizierte Verfahren und höchste Sorgfalt.'
    },
    {
      icon: Microscope,
      title: 'Moderne Technologie',
      desc: 'Innovative Geräte für präzise, schonende und effektive Behandlungen.'
    },
    {
      icon: Sparkles,
      title: 'Ästhetische Ergebnisse',
      desc: 'Natürlich, harmonisch und individuell abgestimmt – für Ihr bestes Hautbild.'
    }
  ]

  return (
    <section className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur"
            >
              <item.icon className="w-7 h-7 text-sky-400" />
              <h3 className="text-white mt-4 text-lg font-medium">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
