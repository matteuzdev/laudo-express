'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, User, ArrowRight, ChevronLeft } from 'lucide-react';
import { saveInspection } from '@/lib/db';

function NovaContent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    endereco: '',
    cliente: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now().toString();
    
    await saveInspection({
      id,
      endereco: formData.endereco,
      cliente: formData.cliente,
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'pendente'
    });

    router.push(`/vistoria/camera?id=${id}`);
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-md space-y-12 z-10">
        <header className="space-y-4">
          <button onClick={() => router.back()} className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1 className="text-4xl font-black tracking-tighter italic uppercase">Nova Inspecao</h1>
            <p className="text-gray-500 font-medium text-sm">Registre os dados do imovel para iniciar.</p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Localizacao do Ativo</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  required
                  placeholder="Endereco completo..."
                  value={formData.endereco}
                  onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-white outline-none transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Identificacao do Cliente</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  required
                  placeholder="Nome do Cliente ou Imobiliaria..."
                  value={formData.cliente}
                  onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-white outline-none transition-all placeholder:text-gray-700"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            PROSSEGUIR <ArrowRight size={24} />
          </button>
        </form>
      </div>
    </main>
  );
}

export default function NovaVistoria() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen text-white flex items-center justify-center">Carregando...</div>}>
      <NovaContent />
    </Suspense>
  );
}
