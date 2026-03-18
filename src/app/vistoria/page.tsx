'use client';

import { useState } from 'react';
import { Camera, Save, MapPin, ChevronLeft, Trash2, CheckCircle2 } from 'lucide-react';

export default function Inspe��oAtiva() {
  const [comodoAtual, setComodoAtual] = useState('Sala');
  const [fotos, setFotos] = useState<{id: number, blob: string, nota: string}[]>([]);

  const capturarFoto = () => {
    // Simulação de captura de câmera (no PWA real abre a câmera do celular)
    const novaFoto = {
      id: Date.now(),
      blob: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400',
      nota: ''
    };
    setFotos([...fotos, novaFoto]);
  };

  return (
    <main className="min-h-screen bg-konig-background text-konig-foreground p-4 md:p-8 space-y-6">
      {/* Header Fixo */}
      <header className="flex justify-between items-center bg-white/5 backdrop-blur-md p-4 sticky top-0 z-50 rounded-2xl border border-white/10">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold">Inspe��o Ativa</h1>
          <p className="text-xs text-gray-400">Rua das Flores, 123</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-green-700 transition-colors">
          <CheckCircle2 size={18} /> Finalizar
        </button>
      </header>

      {/* Seleção de Cômodo */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {['Sala', 'Cozinha', 'Quarto 1', 'Quarto 2', 'Banheiro'].map((c) => (
          <button
            key={c}
            onClick={() => setComodoAtual(c)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              comodoAtual === c ? 'bg-white text-black font-bold' : 'bg-white/5 text-gray-400 border border-white/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Área da Câmera */}
      <section className="space-y-4">
        <div className="relative aspect-video bg-black/40 rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center space-y-4 group overflow-hidden">
          <button 
            onClick={capturarFoto}
            className="bg-white text-black p-6 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-10"
          >
            <Camera size={32} />
          </button>
          <p className="text-gray-500 text-sm">Toque para capturar foto da {comodoAtual}</p>
        </div>
      </section>

      {/* Fotos Capturadas */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {fotos.map((f) => (
          <div key={f.id} className="glass relative group overflow-hidden aspect-square border-white/10">
            <img src={f.blob} alt="Inspe��o" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col p-2 justify-between">
              <button className="self-end p-2 bg-red-500 text-white rounded-lg">
                <Trash2 size={16} />
              </button>
              <input 
                placeholder="Adicionar nota..." 
                className="bg-white/10 border border-white/20 rounded-lg p-2 text-xs focus:outline-none"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Geolocalização & Info */}
      <footer className="glass p-6 border-white/10">
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <MapPin size={20} className="text-red-500" />
          <p>Localização: -23.5505, -46.6333 (Precisão: 5m)</p>
        </div>
      </footer>
    </main>
  );
}
