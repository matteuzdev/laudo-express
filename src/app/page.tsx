'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const planos = [
    { nome: 'Starter', preco: '49', desc: 'Para quem está começando.', itens: ['Até 10 laudos/mês', 'Armazenamento offline', 'Exportação em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos inspetores.', itens: ['Laudos ilimitados', 'Fotos em alta resolução', 'Suporte prioritário', 'Personalização de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliárias e agências.', itens: ['Equipes de até 5 pessoas', 'Multilogin', 'API de integração', 'Dashboard de analytics'] },
  ];

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      {/* 1. HERO SECTION - DESIGN DE ELITE */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 space-y-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 z-10"
        >
          <span className="px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest bg-white/5 text-gray-400">
            Micro-SaaS de Elite para Inspetores
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter max-w-5xl leading-tight">
            Recupere suas noites. <br/>
            <span className="text-gray-500 italic">Inspecoes em tempo real.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            O Inspectify automatiza o trabalho sujo. Gere relatorios profissionais de imoveis enquanto caminha pelo imovel. Mesmo sem Wi-Fi.
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
              Comecar Agora Gratis <ArrowRight size={24} />
            </button>
          </Link>
        </motion.div>
      </section>

      {/* 2. PLANOS - O CAMINHO DO LUCRO */}
      <section className="py-32 p-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">Pronto para escalar?</h2>
            <p className="text-gray-500 text-xl">Escolha o plano que melhor se adapta ao seu volume.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planos.map((p) => (
              <div key={p.nome} className={`relative p-10 border border-white/5 bg-white/5 rounded-3xl flex flex-col justify-between transition-all hover:scale-105 ${p.popular ? 'border-white/20' : ''}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{p.nome}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-gray-500">R$</span>
                    <span className="text-6xl font-black">{p.preco}</span>
                    <span className="text-lg text-gray-500">/mes</span>
                  </div>
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
    </div>
  );
}