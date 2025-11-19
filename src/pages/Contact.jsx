import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ full_name: '', email: '', subject: '', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Senden fehlgeschlagen')
      setStatus({ ok: true, msg: 'Nachricht gesendet. Wir melden uns zeitnah.' })
      setForm({ full_name: '', email: '', subject: '', message: '' })
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Kontakt</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Wir sind für Sie da – schreiben Sie uns oder rufen Sie an. Gerne beraten wir Sie persönlich.</p>

          <div className="mt-10 grid lg:grid-cols-2 gap-10">
            <form onSubmit={onSubmit} className="grid gap-4 bg-white/5 ring-1 ring-white/10 p-6 rounded-2xl">
              <input required value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} placeholder="Vollständiger Name" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="E-Mail" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <input required value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Betreff" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Ihre Nachricht" rows={5} className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <button disabled={loading} className="px-5 py-3 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium ring-1 ring-white/10 disabled:opacity-60">
                {loading ? 'Senden…' : 'Nachricht senden'}
              </button>
              {status && (
                <div className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{status.msg}</div>
              )}
            </form>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/5 ring-1 ring-white/10">
                <h3 className="text-lg font-medium">Kontaktinformationen</h3>
                <p className="text-slate-300 mt-2 text-sm">Telefon: 01234 567890<br/>E-Mail: info@monter-skin.de<br/>Öffnungszeiten: Mo–Fr 10–18 Uhr</p>
              </div>
              <div className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <iframe title="Karte" src="https://www.openstreetmap.org/export/embed.html?bbox=11.54%2C48.14%2C11.543%2C48.142&layer=mapnik" className="w-full h-64"></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
