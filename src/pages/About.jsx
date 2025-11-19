import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2">
              <h1 className="text-4xl font-semibold tracking-tight">Über mich</h1>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Willkommen bei Monter Medical Skin Care. Ich bin spezialisiert auf Laser-Haarentfernung, Permanent Make-up und hochwertige Kosmetikbehandlungen. Mit medizinischem Anspruch, viel Feingefühl und moderner Technik begleite ich Sie auf dem Weg zu gesunder, schöner Haut.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <h3 className="text-lg font-medium">Expertise</h3>
                  <p className="text-slate-300 mt-2 text-sm">Zertifizierte Schulungen, kontinuierliche Fortbildung und präzise Arbeitsweise.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <h3 className="text-lg font-medium">Werte</h3>
                  <p className="text-slate-300 mt-2 text-sm">Vertrauen, Hygiene, Natürlichkeit und ein ruhiges, respektvolles Miteinander.</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
                <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1080&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About
