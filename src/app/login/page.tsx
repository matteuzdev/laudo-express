'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // SimulaÃ§Ã£o de envio de Magic Link
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-konig-background text-konig-foreground">
      <div className="glass p-8 max-w-md w-full space-y-8 border-black/5 dark:border-white/10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Acesso de Elite</h1>
          <p className="text-gray-500 text-sm">Insira seu e-mail para receber seu link de acesso seguro.</p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
              />
            </div>
            <button
              disabled={loading}
              className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : 'Enviar Link de Acesso'}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-6 py-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mx-auto bg-green-100 text-green-700 w-16 h-16 flex items-center justify-center rounded-full">
              <Mail size={32} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Verifique seu e-mail</h2>
              <p className="text-sm text-gray-500">
                Enviamos um link de acesso para <strong>{email}</strong>. 
                Clique no link para entrar no Inspectify.
              </p>
            </div>
            <button 
              onClick={() => setSent(false)}
              className="text-sm text-gray-400 underline underline-offset-4 hover:text-white"
            >
              Tentar outro e-mail
            </button>
          </div>
        )}

        <p className="text-center text-xs text-gray-500">
          Ao entrar, vocÃª concorda com nossos Termos de Uso e PolÃ­tica de Privacidade.
        </p>
      </div>
    </main>
  );
}
