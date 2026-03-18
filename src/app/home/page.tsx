'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight, Star, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const planos = [
    { nome: 'Starter', preco: '49', desc: 'Para quem está começando.', itens: ['Até 10 laudos/mês', 'Armazenamento offline', 'Exportação em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos vitoriadores.', itens: ['Laudos ilimitados', 'Fotos em alta resolução', 'Suporte prioritário', 'Personalização de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliárias e agências.', itens: ['Equipes de até 5 pessoas', 'Multilogin', 'API de integração', 'Dashboard de analytics'] },
  ];

  return (
    <div className="bg-konig-background text-konig-foreground selection:bg-white selection:text-black">
      {/* 1. HERO SECTION - IMPACTO IMEDIATO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 space-y-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest bg-white/5 text-gray-400">
            Micro-SaaS de Elite para Vistoriadores
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter max-w-5xl leading-tight">
            Recupere suas noites. <br/>
            <span className="text-gray-500 italic">Laudos em tempo real.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            O Laudo Express automatiza o trabalho sujo. Gere laudos profissionais de imóveis enquanto caminha pelo imóvel. Mesmo sem Wi-Fi.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 z-10"
        >
          <Link href="/login">
            <button className="bg-white text-black px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Começar Agora Grátis <ArrowRight size={24} />
            </button>
          </Link>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black" />)}
            </div>
            <p>+500 vitoriadores já economizam tempo.</p>
          </div>
        </motion.div>
      </section>

      {/* 2. O PROBLEMA - A DOR QUE CORRÓI */}
      <section className="py-32 bg-zinc-950 border-y border-white/5 p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">O "Segundo Turno" está matando sua produtividade.</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Chegar em casa às 19h e passar mais 3 horas digitando o que você já viu no imóvel é ineficiente. 
              Papel aceita tudo, mas o seu tempo não.
            </p>
            <div className="flex items-start gap-4 p-6 glass border-red-500/10 bg-red-500/5">
              <Zap className="text-red-500 shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-red-500">O Custo da Ineficiência</h4>
                <p className="text-sm text-gray-500">Cada laudo feito manualmente custa, em média, R$ 120 em tempo desperdiçado.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square glass border-white/5 p-8 flex flex-col justify-center space-y-6">
                <div className="space-y-2 opacity-30">
                  <div className="h-4 w-3/4 bg-white/20 rounded" />
                  <div className="h-4 w-full bg-white/20 rounded" />
                  <div className="h-4 w-1/2 bg-white/20 rounded" />
                </div>
                <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-400 font-mono text-xs">
                  ERROR: FOTO_FORA_DE_ORDEM.JPG <br/>
                  ERROR: NOTA_ILEGIVEL_MANUAL.TXT
                </div>
                <div className="text-center italic text-gray-600">O jeito antigo...</div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. A SOLUÇÃO - UTILIDADE BRUTA */}
      <section className="py-32 p-6">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black uppercase italic">Simplicidade de um Clique.</h2>
            <p className="text-gray-500 text-xl">Ferramentas que funcionam onde você estiver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: CloudOff, title: 'Zero Internet', desc: 'Vistorie subsolos e elevadores. O app salva tudo localmente e sincroniza quando o sinal volta.' },
              { icon: FileText, title: 'Laudo Instantâneo', desc: 'O PDF profissional é gerado no momento que você clica em "Finalizar". Sem edição posterior.' },
              { icon: Shield, title: 'Segurança Konig', desc: 'Login sem senha via Magic Link. Seus dados e fotos protegidos em nosso cofre criptografado.' }
            ].map((item, i) => (
              <div key={i} className="group p-8 glass border-white/5 hover:border-white/20 transition-all space-y-6">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLANOS - O CAMINHO DO INVESTIMENTO */}
      <section className="py-32 p-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">Pronto para escalar?</h2>
            <p className="text-gray-500 text-xl">Escolha o plano que melhor se adapta ao seu volume de vistorias.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((p) => (
              <div key={p.nome} className={`relative p-10 glass flex flex-col justify-between border-white/5 transition-all hover:scale-105 ${p.popular ? 'border-white/20 bg-white/[0.05]' : ''}`}>
                {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Mais Popular</span>}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{p.nome}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-gray-500">R$</span>
                    <span className="text-6xl font-black">{p.preco}</span>
                    <span className="text-lg text-gray-500">/mês</span>
                  </div>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                  <ul className="space-y-4 pt-8">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check size={18} className="text-white shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/login" className="w-full">
                  <button className={`mt-10 w-full py-4 rounded-full font-bold transition-all ${p.popular ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Assinar {p.nome}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 p-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl font-bold italic tracking-tighter">LAUDO EXPRESS</h4>
          <p className="text-gray-500 text-xs tracking-widest uppercase">Tecnologia de Elite para Imobiliárias</p>
        </div>
        <div className="flex gap-8 text-sm text-gray-500 font-medium">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos</a>
          <a href="#" className="hover:text-white">Suporte</a>
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">© 2026 IMPÉRIO KONIG</p>
      </footer>
    </div>
  );
}