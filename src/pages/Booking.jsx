import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Booking() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    category: 'Laser-Haarentfernung',
    service: 'Beratung',
    preferred_date: '',
    notes: '',
    agree_policy: false,
  })

  const categories = {
    'Laser-Haarentfernung': ['Beratung', 'Beine', 'Achseln', 'Rücken', 'Bikini'],
    'Permanent Make-up': ['Beratung', 'Powder Brows', 'Lidstrich', 'Lippen'],
    'Kosmetik & Facials': ['Beratung', 'Medical Facial', 'Skin Calm', 'Peeling'],
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch(`${baseUrl}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          preferred_date: form.preferred_date || null,
        }),
      })
      if (!res.ok) throw new Error('Fehler beim Senden')
      const data = await res.json()
      setSuccess('Termin erfolgreich angefragt. Wir melden uns zeitnah!')
      setForm({
        full_name: '', email: '', phone: '', category: 'Laser-Haarentfernung', service: 'Beratung', preferred_date: '', notes: '', agree_policy: false,
      })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-semibold tracking-tight">Online-Terminbuchung</h1>
          <p className="mt-3 text-slate-300">Einfach, übersichtlich und schnell – wählen Sie Ihre Behandlung und Ihren Wunschtermin.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 bg-white/5 ring-1 ring-white/10 p-6 rounded-2xl">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.full_name} onChange={e=>setForm({...form, full_name:e.target.value})} placeholder="Vollständiger Name" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="E-Mail" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} placeholder="Telefon (optional)" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-1" />
              <select value={form.category} onChange={e=>setForm({...form, category:e.target.value, service: categories[e.target.value][0]})} className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-1">
                {Object.keys(categories).map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={form.service} onChange={e=>setForm({...form, service:e.target.value})} className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400 sm:col-span-1">
                {categories[form.category].map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="date" value={form.preferred_date} onChange={e=>setForm({...form, preferred_date:e.target.value})} className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
              <input value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} placeholder="Hinweise / Wünsche (optional)" className="bg-white/10 rounded-md px-4 py-3 outline-none placeholder:text-slate-400" />
            </div>
            <label className="flex items-center gap-3 text-sm text-slate-300">
              <input type="checkbox" checked={form.agree_policy} onChange={e=>setForm({...form, agree_policy:e.target.checked})} required />
              Ich stimme den Datenschutzbestimmungen zu.
            </label>

            <div className="flex items-center gap-3">
              <button disabled={loading} className="px-5 py-3 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium ring-1 ring-white/10 disabled:opacity-60">
                {loading ? 'Senden…' : 'Termin anfragen'}
              </button>
              {success && <span className="text-emerald-400 text-sm">{success}</span>}
              {error && <span className="text-rose-400 text-sm">{error}</span>}
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Booking
