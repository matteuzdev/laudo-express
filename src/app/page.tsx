'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight, Star, MousePointer2, ChevronDown, Play, MessageCircle, Layout, Camera, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';

export default function LandingPage() {
  const plans = [
    { nome: 'Starter', preco: '49', desc: 'Para quem esta comecando.', itens: ['Ate 10 inspeÃ§Ãµes/mes', 'Armazenamento offline', 'Exportacao em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos inspetores.', itens: ['InspeÃ§Ãµes ilimitadas', 'Fotos em alta resolucao', 'Suporte prioritario', 'Personalizacao de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliarias e agencias.', itens: ['Equipes de ate 5 pessoas', 'Multilogin', 'API de integracao', 'Dashboard de analytics'] },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans overflow-x-hidden">
      
      {/* --- HEADER IMPERIAL --- */}
      <header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">Inspectify</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">Duvidas</a>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-black uppercase tracking-widest hover:text-zinc-300 transition-colors">Entrar</Link>
            <Link href="/login">
              <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                CRIAR CONTA
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 pt-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-white/10 blur-[160px] rounded-full pointer-events-none opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-12 z-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Tecnologia de Elite
          </div>
          
          <h1 className="text-7xl md:text-[140px] font-black tracking-[-0.07em] leading-[0.8] max-w-6xl">
            Relatorios prontos <br/>
            <span className="text-zinc-700 italic font-thin">no campo.</span>
          </h1>
          
          <p className="text-2xl text-zinc-500 max-w-2xl mx-auto font-medium leading-tight">
            O Inspectify e o sistema definitivo para vistorias imobiliarias. Capture, analise e envie com um clique.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
            <Link href="/login">
              <button className="bg-white text-black px-14 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.25)] active:scale-95">
                Comecar Agora Gratis
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Imagem de Background Hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="mt-32 relative w-full max-w-6xl aspect-[21/9] rounded-[3rem] border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_120px_rgba(255,255,255,0.05)]"
        >
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
            alt="Inspectify Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* --- RECURSOS BENTO GRID --- */}
      <section id="features" className="py-48 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">Utilidade Bruta.</h2>
            <p className="text-zinc-500 text-2xl font-medium">Ferramentas de campo para vitorias rapidas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-16 border border-white/5 bg-zinc-950 rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
              <div className="space-y-8 z-10">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl">
                  <CloudOff size={32} />
                </div>
                <h3 className="text-5xl font-black tracking-tighter uppercase">100% Offline</h3>
                <p className="text-2xl text-zinc-500 max-w-md">Vistorie em qualquer lugar. O sistema sincroniza sozinho quando detectar Wi-Fi.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600" 
                className="absolute right-0 bottom-0 w-1/2 opacity-20 group-hover:opacity-40 transition-opacity" 
                alt="Predio" 
              />
            </div>
            
            <div className="p-16 border border-white/5 bg-zinc-950 rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl font-black">
                  <FileText size={32} />
                </div>
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">PDF Instantaneo</h3>
                <p className="text-xl text-zinc-500 font-medium">Relatorios profissionais gerados no ato.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLANOS --- */}
      <section id="pricing" className="py-48 px-6 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Investimento.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.nome} className={`relative p-12 border rounded-[3rem] flex flex-col justify-between transition-all duration-500 ${p.popular ? 'border-white/30 bg-white/[0.07] scale-105' : 'border-white/5 bg-black'}`}>
                <div className="space-y-10">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{p.nome}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl text-zinc-500 font-black">R$</span>
                    <span className="text-8xl font-black tracking-tighter">{p.preco}</span>
                  </div>
                  <ul className="space-y-5">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-zinc-400 font-bold text-sm">
                        <Check size={16} className="text-white" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/login" className="w-full pt-16">
                  <button className={`w-full py-6 rounded-2xl font-black text-xl transition-all ${p.popular ? 'bg-white text-black' : 'border border-white/10 bg-white/5'}`}>
                    ASSINAR AGORA
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <Logo className="w-12 h-12 text-white" />
          <div>
            <h4 className="text-2xl font-black italic uppercase tracking-tighter">INSPECTIFY</h4>
            <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 font-black">Imperio Konig</p>
          </div>
        </div>
        <p className="text-zinc-700 font-black text-xs uppercase tracking-[0.3em]">Â© 2026 Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
