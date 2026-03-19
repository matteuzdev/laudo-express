'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // SIMULAÃ‡ÃƒO DE MAGIC LINK E LOGIN PARA TESTES
      // Em produção, isso bateria no FastAPI e enviaria um e-mail real.
      setTimeout(() => {
        setLoading(false);
        setSent(true);
        // Grava o cookie de segurança para o Middleware liberar o acesso
        document.cookie = `user_email=${email}; path=/; max-age=86400`; // Expira em 1 dia
      }, 1500);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
      
      <div className="w-full max-w-md space-y-8 z-10">
        <div className="text-center space-y-6">
          <Link href="/" className="inline-block">
            <Logo className="w-16 h-16 text-white mx-auto hover:rotate-12 transition-transform duration-500" />
          </Link>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">Acesso Restrito</h1>
            <p className="text-zinc-500 font-medium">Insira seu e-mail corporativo para receber a chave.</p>
          </div>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-white/10 bg-zinc-950/80 rounded-[2.5rem] backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                <input
                  type="email"
                  required
                  placeholder="inspetor@imobiliaria.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-white focus:bg-white/10 outline-none transition-all placeholder:text-zinc-700"
                />
              </div>
            </div>
            <button
              disabled={loading || !email}
              className="w-full bg-white text-black py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : 'RECEBER ACESSO'}
              {!loading && <ArrowRight size={20} />}
            </button>
            <p className="text-center text-xs text-zinc-600 font-medium flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> Conexão criptografada de ponta a ponta
            </p>
          </form>
        ) : (
          <div className="text-center space-y-8 p-10 border border-white/10 bg-zinc-950/80 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            <div className="mx-auto bg-green-500/10 text-green-500 w-20 h-20 flex items-center justify-center rounded-full animate-bounce">
              <Mail size={40} />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Link Enviado!</h2>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Enviamos uma chave de acesso segura para <br/><strong className="text-white">{email}</strong>
              </p>
            </div>
            <div className="space-y-4 pt-6 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Ambiente de Teste</p>
              <p className="text-xs text-zinc-400">Sua sessão foi autenticada automaticamente no navegador.</p>
              <button 
                onClick={() => router.push('/dashboard')}
                className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                ACESSAR DASHBOARD
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
