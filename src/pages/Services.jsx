import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const services = [
  {
    category: 'Laser-Haarentfernung',
    items: [
      { title: 'Damen – Beine komplett', desc: 'Glatt, gepflegt und dauerhaft haarfrei.' },
      { title: 'Herren – Rücken', desc: 'Schonend und effektiv für ein gepflegtes Hautbild.' }
    ],
    faqs: [
      { q: 'Ist die Behandlung schmerzhaft?', a: 'Dank moderner Kühlung sehr gut verträglich.' },
      { q: 'Wie viele Sitzungen brauche ich?', a: 'In der Regel 6–8 Sitzungen, abhängig vom Haut- und Haartyp.' }
    ]
  },
  {
    category: 'Permanent Make-up',
    items: [
      { title: 'Powder Brows', desc: 'Natürlich definierte Augenbrauen.' },
      { title: 'Lidstrich & Wimpernkranz', desc: 'Dezente Betonung für den Blick.' }
    ],
    faqs: [
      { q: 'Wie lange hält Permanent Make-up?', a: 'Je nach Hauttyp 1–3 Jahre.' },
      { q: 'Ist es natürlich?', a: 'Ja, wir arbeiten mit sanften, harmonischen Techniken.' }
    ]
  },
  {
    category: 'Kosmetik & Facials',
    items: [
      { title: 'Medical Facial', desc: 'Tiefenreinigung, Pflege und wohltuende Entspannung.' },
      { title: 'Skin Calm Treatment', desc: 'Beruhigend bei sensibler Haut.' }
    ],
    faqs: [
      { q: 'Für wen sind Facials geeignet?', a: 'Für alle Hauttypen – individuell abgestimmt.' },
      { q: 'Gibt es eine Hautanalyse?', a: 'Ja, jede Behandlung beginnt mit einer professionellen Analyse.' }
    ]
  }
]

function Services() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Leistungen</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Übersichtlich strukturiert mit Vorteilen, Ablauf und Antworten auf die wichtigsten Fragen.</p>

          <div className="mt-10 space-y-12">
            {services.map((block, idx) => (
              <div key={idx} className="border-t border-white/10 pt-10">
                <h2 className="text-2xl font-medium">{block.category}</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {block.items.map((s, i) => (
                    <motion.div key={i} whileHover={{ y: -4 }} className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <h3 className="text-lg font-medium">{s.title}</h3>
                      <p className="text-slate-300 mt-2 text-sm">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {block.faqs.map((f, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 ring-1 ring-white/10">
                      <p className="text-white font-medium">{f.q}</p>
                      <p className="text-slate-300 text-sm mt-1">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Services
