'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function VerifyTokenPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }

    const verify = async () => {
      try {
        // Chamada real para o Backend Python (FastAPI)
        const res = await fetch(`http://localhost:8000/auth/verify?token=${token}`);
        if (res.ok) {
          const data = await res.json();
          // Salva o e-mail/session localmente (em prod usaria um cookie seguro)
          localStorage.setItem('user_email', data.email);
          setStatus('success');
          // Redireciona para o app após 2 segundos
          setTimeout(() => router.push('/'), 2000);
        } else {
          setStatus('error');
        }
      } catch (err) {
        setStatus('error');
      }
    };

    verify();
  }, [token, router]);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-konig-background text-konig-foreground">
      <div className="glass p-12 max-w-md w-full text-center space-y-6">
        {status === 'loading' && (
          <>
            <Loader2 className="animate-spin mx-auto text-gray-400" size={48} />
            <h1 className="text-2xl font-bold">Verificando Acesso...</h1>
            <p className="text-gray-500">Aguarde um instante enquanto validamos sua entrada.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle2 className="mx-auto text-green-500 animate-bounce" size={48} />
            <h1 className="text-2xl font-bold text-green-500">Acesso Concedido!</h1>
            <p className="text-gray-500">Bem-vindo ao Laudo Express. Redirecionando...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="mx-auto text-red-500" size={48} />
            <h1 className="text-2xl font-bold text-red-500">Link Inválido</h1>
            <p className="text-gray-500">Este link expirou ou já foi utilizado. Solicite um novo link de acesso.</p>
            <button 
              onClick={() => router.push('/login')}
              className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold"
            >
              Voltar para Login
            </button>
          </>
        )}
      </div>
    </main>
  );
}