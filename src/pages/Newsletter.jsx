import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent }),
      })
      if (!res.ok) throw new Error('Anmeldung fehlgeschlagen')
      setStatus({ ok: true, msg: 'Danke! Sie erhalten künftig Neuigkeiten und Angebote.' })
      setEmail('')
      setConsent(false)
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    }
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Newsletter</h1>
          <p className="mt-3 text-slate-300">Erhalten Sie Updates, Angebote und Hautpflegetipps.</p>

          <form onSubmit={subscribe} className="mt-8 grid gap-4 bg-white/5 ring-1 ring-white/10 p-6 rounded-2xl">
            <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-Mail" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
            <label className="flex items-center gap-3 text-sm text-slate-300">
              <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)} required />
              Ich willige in den Erhalt von E-Mails ein.
            </label>
            <button className="px-5 py-3 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium ring-1 ring-white/10">Anmelden</button>
            {status && <div className={`text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{status.msg}</div>}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Newsletter
