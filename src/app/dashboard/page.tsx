import { Plus, ClipboardList, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const inspecoes = [
    { id: '1', endereco: 'Rua das Flores, 123', status: 'pendente', data: '18/03' },
    { id: '2', endereco: 'Av. Sertao, 456', status: 'concluido', data: '17/03' },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 space-y-8 bg-black text-white">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight uppercase italic">Inspectify</h1>
          <p className="text-gray-500">Painel de Controle</p>
        </div>
        <Link href="/vistoria/nova">
          <button className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2 font-bold">
            <Plus size={20} /> Nova Inspecao
          </button>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-sm font-medium uppercase text-gray-500 tracking-wider">Pendentes</p>
          <p className="text-4xl font-bold">12</p>
        </div>
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-sm font-medium uppercase text-gray-500 tracking-wider">Concluidas</p>
          <p className="text-4xl font-bold">48</p>
        </div>
        <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
          <p className="text-sm font-medium uppercase text-gray-500 tracking-wider">Total Mes</p>
          <p className="text-4xl font-bold">60</p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold uppercase tracking-widest text-gray-400">Inspecoes Recentes</h2>
        <div className="space-y-2">
          {inspecoes.map((v) => (
            <div key={v.id} className="p-4 flex justify-between items-center border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex gap-4 items-center">
                <div className="p-2 rounded-full bg-white/10">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <p className="font-medium">{v.endereco}</p>
                  <p className="text-sm text-gray-500 font-mono">{v.data}</p>
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
