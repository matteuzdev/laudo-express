import { Plus, ClipboardList, Clock, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const vistorias = [
    { id: 1, endereco: 'Rua das Flores, 123', status: 'pendente', data: '18/03' },
    { id: 2, endereco: 'Av. Sertão, 456', status: 'concluido', data: '17/03' },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Laudo Express</h1>
          <p className="text-gray-500">Painel de Vistorias Imobiliárias</p>
        </div>
        <button className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
          <Plus size={20} />
          Nova Vistoria
        </button>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass p-6 space-y-2">
          <div className="flex items-center gap-2 text-yellow-600">
            <Clock size={18} />
            <span className="text-sm font-medium uppercase tracking-wider">Pendentes</span>
          </div>
          <p className="text-4xl font-bold">12</p>
        </div>
        <div className="glass p-6 space-y-2">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle size={18} />
            <span className="text-sm font-medium uppercase tracking-wider">Concluídas</span>
          </div>
          <p className="text-4xl font-bold">48</p>
        </div>
        <div className="glass p-6 space-y-2">
          <div className="flex items-center gap-2 text-blue-600">
            <ClipboardList size={18} />
            <span className="text-sm font-medium uppercase tracking-wider">Total Mês</span>
          </div>
          <p className="text-4xl font-bold">60</p>
        </div>
      </div>

      {/* Lista de Vistorias */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Vistorias Recentes</h2>
        <div className="space-y-2">
          {vistorias.map((v) => (
            <div key={v.id} className="glass p-4 flex justify-between items-center hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
              <div className="flex gap-4 items-center">
                <div className={`p-2 rounded-full ${v.status === 'concluido' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  <ClipboardList size={20} />
                </div>
                <div>
                  <p className="font-medium">{v.endereco}</p>
                  <p className="text-sm text-gray-400">{v.data}</p>
                </div>
              </div>
              <span className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${v.status === 'concluido' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}