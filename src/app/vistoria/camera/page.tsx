'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Camera, Check, X, ChevronLeft, Loader2 } from 'lucide-react';
import { saveFoto } from '@/lib/db';

function CameraContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturing, setCapturing] = useState(false);
  const [comodo, setComodo] = useState('Sala');

  useEffect(() => {
    async function startCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' },
          audio: false 
        });
        setStream(mediaStream);
        if (videoRef.current) videoRef.current.srcObject = mediaStream;
      } catch (err) {
        console.error("Erro ao acessar camera:", err);
      }
    }
    startCamera();
    return () => stream?.getTracks().forEach(t => t.stop());
  }, []);

  const takePhoto = async () => {
    if (!videoRef.current || !id) return;
    
    setCapturing(true);
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx?.drawImage(videoRef.current, 0, 0);
    
    canvas.toBlob(async (blob) => {
      if (blob) {
        await saveFoto({
          id: Date.now().toString(),
          inspectId: id,
          blob,
          comodo,
          data: new Date().toISOString()
        });
        setCapturing(false);
      }
    }, 'image/jpeg', 0.8);
  };

  return (
    <main className="fixed inset-0 bg-black flex flex-col text-white">
      <header className="p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
        <button onClick={() => router.back()} className="p-2 bg-white/10 rounded-full">
          <ChevronLeft size={20} />
        </button>
        <select 
          value={comodo} 
          onChange={(e) => setComodo(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm font-bold outline-none"
        >
          {['Sala', 'Cozinha', 'Quarto 1', 'Quarto 2', 'Banheiro', 'Varanda'].map(c => (
            <option key={c} value={c} className="bg-zinc-900">{c}</option>
          ))}
        </select>
        <div className="w-10" />
      </header>

      <div className="flex-1 relative overflow-hidden">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 border-2 border-white/20 pointer-events-none flex items-center justify-center">
          <div className="w-64 h-64 border border-white/10 rounded-3xl" />
        </div>
      </div>

      <footer className="p-8 flex justify-around items-center bg-gradient-to-t from-black/80 to-transparent">
        <button onClick={() => router.push(`/vistoria/revisao?id=${id}`)} className="p-4 bg-white/5 rounded-full">
          <X size={24} />
        </button>
        
        <button 
          onClick={takePhoto}
          disabled={capturing}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-90 transition-transform disabled:opacity-50"
        >
          {capturing ? <Loader2 className="animate-spin text-black" size={32} /> : <div className="w-16 h-16 border-4 border-black rounded-full" />}
        </button>

        <button onClick={() => router.push(`/vistoria/revisao?id=${id}`)} className="p-4 bg-green-500 rounded-full">
          <Check size={24} />
        </button>
      </footer>
    </main>
  );
}

export default function CameraPage() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen flex items-center justify-center text-white text-sm uppercase tracking-widest font-bold animate-pulse">Iniciando Lente...</div>}>
      <CameraContent />
    </Suspense>
  );
}