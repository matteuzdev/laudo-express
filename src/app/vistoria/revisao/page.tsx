'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft, Trash2, Loader2, CheckCircle } from 'lucide-react';
import { getFotosByInspection, initDB, deleteFoto } from '@/lib/db';

function RevisaoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');

  const [vistoria, setVistoria] = useState<any>(null);
  const [fotos, setFotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (!id) return;
      const db = await initDB();
      const v = await db.get('inspections', id);
      const f = await getFotosByInspection(id);
      setVistoria(v);
      setFotos(f);
      setLoading(false);
    }
    loadData();
  }, [id]);

  const handleDelete = async (fotoId: string) => {
    if (confirm("Deseja realmente excluir esta foto?")) {
      await deleteFoto(fotoId);
      setFotos(fotos.filter(f => f.id !== fotoId));
    }
  };

  const handleSync = async () => {
    setSyncing(true);
    const payload = {
      inspectId: id,
      endereco: vistoria.endereco,
      cliente: vistoria.cliente,
      fotos: fotos.map(f => ({
        comodo: f.comodo,
        nota: f.comentario || 'Sem observações'
      }))
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const res = await fetch(`${apiUrl}/vistoria/sync`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Relatório sincronizado com sucesso!");
        router.push('/dashboard');
      } else {
        alert("Erro no servidor ao gerar o relatório.");
      }
    } catch (err) {
      alert("Erro de conexão. Verifique se o servidor está online.");
    } finally {
      setSyncing(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black text-white"><Loader2 className="animate-spin" /></div>;

  return (
    <main className="min-h-screen bg-black text-white p-6 space-y-8 pb-32">
      <header className="flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 bg-white/5 border border-white/10 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase italic">Revisão de Inspeção</h1>
          <p className="text-sm text-gray-500 font-mono">{vistoria?.endereco}</p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fotos.map((f) => (
          <div key={f.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col group">
            <div className="relative aspect-video">
              <img src={URL.createObjectURL(f.blob)} className="w-full h-full object-cover" alt="Inspeção" />
              <div className="absolute top-3 left-3 px-3 py-1 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest">
                {f.comodo}
              </div>
            </div>
            <div className="p-4 space-y-3 flex-1 flex flex-col">
              <textarea
                placeholder="Adicione observações técnicas..."
                defaultValue={f.comentario}
                onBlur={(e) => { f.comentario = e.target.value }}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:border-white outline-none resize-none min-h-[100px]"
              />
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] text-gray-600 uppercase font-bold tracking-tighter">REF: {f.id}</span>
                <button 
                  onClick={() => handleDelete(f.id)}
                  className="text-red-500/50 p-2 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-center z-50">
        <button 
          onClick={handleSync}
          disabled={syncing}
          className="bg-white text-black px-16 py-5 rounded-full font-black text-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,255,255,0.2)] disabled:opacity-50"
        >
          {syncing ? <Loader2 className="animate-spin" size={24} /> : <CheckCircle size={24} />}
          {syncing ? 'SINCRONIZANDO...' : 'GERAR RELATÓRIO'}
        </button>
      </footer>
    </main>
  );
}

export default function RevisaoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white font-black tracking-tighter">CARREGANDO DADOS...</div>}>
      <RevisaoContent />
    </Suspense>
  );
}