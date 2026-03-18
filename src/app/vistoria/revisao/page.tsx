'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft, Send, Trash2, Edit3, Loader2, CheckCircle } from 'lucide-react';
import { getFotosByInspeção, initDB } from '@/lib/db';

export default function RevisaoInspeção() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const InspeçãoId = searchParams.get('id');

  const [Inspeção, setInspeção] = useState<any>(null);
  const [fotos, setFotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (!InspeçãoId) return;
      const db = await initDB();
      const v = await db.get('inspeções', InspeçãoId);
      const f = await getFotosByInspeção(InspeçãoId);
      setInspeção(v);
      setFotos(f);
      setLoading(false);
    }
    loadData();
  }, [InspeçãoId]);

  const handleSync = async () => {
    setSyncing(true);
    
    // 1. Preparar os dados para o Backend Python
    // Em um cenÃ¡rio real, converterÃ­amos Blobs para Base64 ou FormData
    const payload = {
      InspeçãoId: Inspeção.id,
      endereco: Inspeção.endereco,
      cliente: Inspeção.cliente,
      fotos: fotos.map(f => ({
        comodo: f.comodo,
        nota: f.comentario || 'Sem observaÃ§Ãµes'
      }))
    };

    try {
      // 2. Chamada para o Motor Python (FastAPI)
      const res = await fetch('http://localhost:8000/Inspeção/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Laudo sincronizado com sucesso! O PDF estÃ¡ sendo gerado no servidor.");
        router.push('/');
      }
    } catch (err) {
      alert("Erro ao sincronizar. Verifique se o servidor Python estÃ¡ ligado.");
    } finally {
      setSyncing(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <main className="min-h-screen bg-konig-background text-konig-foreground p-6 space-y-8 pb-32">
      <header className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 glass rounded-full">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">RevisÃ£o do Laudo</h1>
          <p className="text-sm text-gray-500">{Inspeção?.endereco}</p>
        </div>
      </header>

      {/* Grid de Fotos para RevisÃ£o */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fotos.map((f) => (
          <div key={f.id} className="glass overflow-hidden border-white/5 flex flex-col">
            <div className="relative aspect-video">
              <img src={URL.createObjectURL(f.blob)} className="w-full h-full object-cover" alt="Inspeção" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest">
                {f.comodo}
              </div>
            </div>
            <div className="p-4 space-y-3 flex-1 flex flex-col">
              <textarea
                placeholder="Adicione uma nota sobre este cÃ´modo..."
                defaultValue={f.comentario}
                onBlur={(e) => { f.comentario = e.target.value }}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-white outline-none resize-none min-h-[80px]"
              />
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] text-gray-600 uppercase font-bold tracking-tighter">ID: {f.id}</span>
                <button className="text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* BotÃ£o Flutuante de SincronizaÃ§Ã£o */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent flex justify-center z-50">
        <button 
          onClick={handleSync}
          disabled={syncing}
          className="bg-white text-black px-12 py-5 rounded-full font-black text-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] disabled:opacity-50"
        >
          {syncing ? <Loader2 className="animate-spin" size={24} /> : <CheckCircle size={24} />}
          {syncing ? 'Sincronizando...' : 'Gerar Laudo Profissional'}
        </button>
      </footer>
    </main>
  );
}
