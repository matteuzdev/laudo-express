'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, User, ArrowRight, ChevronLeft } from 'lucide-react';
import { saveInspeção } from '@/lib/db';

export default function NovaInspeção() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    endereco: '',
    cliente: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now().toString();
    
    // Salva no IndexedDB (Offline-First)
    await saveInspeção({
      id,
      endereco: formData.endereco,
      cliente: formData.cliente,
      data: new Date().toLocaleDateString('pt-BR'),
      status: 'pendente'
    });

    // Redireciona para a cÃ¢mera da Inspeção especÃ­fica
    router.push(`/Inspeção/camera?id=${id}`);
  };

  return (
    <main className="min-h-screen bg-konig-background text-konig-foreground p-6 flex flex-col justify-center items-center">
      <div className="w-full max-w-md space-y-8">
        <header className="flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 glass rounded-full">
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Nova Inspeção</h1>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">EndereÃ§o do ImÃ³vel</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  required
                  placeholder="Rua, nÃºmero, bairro..."
                  value={formData.endereco}
                  onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:border-white outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Nome do Cliente / ImobiliÃ¡ria</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                  required
                  placeholder="Ex: ImobiliÃ¡ria SertÃ£o"
                  value={formData.cliente}
                  onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:border-white outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            Iniciar InspeÃ§Ã£o <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </main>
  );
}
