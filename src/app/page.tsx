'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight, Star, MousePointer2, ChevronDown, Play, MessageCircle, Camera } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { Spotlight } from '@/components/ui/Spotlight';
import { Suspense } from 'react';

export default function LandingPage() {
  const plans = [
    { nome: 'Starter', preco: '49', desc: 'Para quem está começando.', itens: ['Até 10 inspeções/mês', 'Armazenamento offline', 'Exportação em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos inspetores.', itens: ['Inspeções ilimitadas', 'Fotos em alta resolução', 'Suporte prioritário', 'Personalização de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliárias e agências.', itens: ['Equipes de até 5 pessoas', 'Multilogin', 'API de integração', 'Dashboard de analytics'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-2xl font-black tracking-tighter uppercase italic">Inspectify</span>
          </div>
          <nav className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
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
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-white/10 blur-[160px] rounded-full pointer-events-none opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-12 z-10 relative">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 backdrop-blur-md">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Tecnologia de Elite
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-7xl md:text-[140px] font-black tracking-[-0.07em] leading-[0.8] max-w-6xl">
            Relatórios prontos <br/>
            <span className="text-zinc-700 italic font-thin">no campo.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-2xl text-zinc-500 max-w-2xl mx-auto font-medium leading-tight">
            O Inspectify é o sistema definitivo para vistorias imobiliárias. Capture fotos, avalie e envie com um clique.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 justify-center pt-8">
            <Link href="/login">
              <ShimmerButton className="text-xl px-12 py-6 h-auto">
                Começar Agora Grátis <ArrowRight className="ml-2" size={24} />
              </ShimmerButton>
            </Link>
            <button className="px-12 py-6 rounded-full font-black text-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
              <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> Ver Demonstração
            </button>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }} className="mt-32 relative w-full max-w-6xl aspect-[21/9] rounded-[3rem] border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_120px_rgba(255,255,255,0.05)] group">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" alt="Hero" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* --- 2. PROVA SOCIAL --- */}
      <section className="py-20 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-black">Utilizado por profissionais das maiores redes</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale invert text-2xl font-black italic uppercase">
            <div>Re/max</div><div>Loft</div><div>QuintoAndar</div><div>Zap</div>
          </div>
        </div>
      </section>

      {/* --- 3. A DOR --- */}
      <section className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div {...fadeInUp} className="space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Sua noite <br/>pertence a você.</h2>
            <p className="text-2xl text-zinc-500 leading-tight">Chega de chegar em casa exausto e ter que encarar o computador. O Inspectify elimina o retrabalho manual.</p>
            <div className="space-y-6 flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-500/10 text-red-500 flex items-center justify-center rounded-xl shrink-0"><Zap size={24} /></div>
              <div><h4 className="font-black uppercase text-sm tracking-widest text-red-500">O Custo do Papel</h4><p className="text-zinc-500 font-medium">Cada inspeção manual rouba 2 horas do seu descanso.</p></div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" alt="Dor" className="relative rounded-[2.5rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* --- 4. RECURSOS BENTO GRID --- */}
      <section id="features" className="py-48 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">Utilidade Bruta.</h2>
            <p className="text-zinc-500 text-2xl font-medium">Ferramentas de campo para vistorias rápidas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-16 border border-white/5 bg-black rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
              <div className="space-y-8 z-10">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl"><CloudOff size={32} /></div>
                <h3 className="text-5xl font-black tracking-tighter uppercase">100% Offline</h3>
                <p className="text-2xl text-zinc-500 max-w-md leading-relaxed">Vistorie em elevadores, subsolos ou fazendas. O sistema sincroniza sozinho quando detectar Wi-Fi.</p>
              </div>
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600" className="absolute right-0 bottom-0 w-1/2 opacity-20 group-hover:opacity-40 transition-opacity" alt="Offline" />
            </div>
            <div className="p-16 border border-white/5 bg-black rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl font-black"><FileText size={32} /></div>
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">PDF Instantâneo</h3>
                <p className="text-xl text-zinc-500 font-medium">Relatórios profissionais gerados no ato.</p>
              </div>
            </div>
            <div className="p-16 border border-white/5 bg-black rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="space-y-8">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl font-black"><Camera size={32} /></div>
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">Lente Inteligente</h3>
                <p className="text-xl text-zinc-500 font-medium">Compressão automática de imagens.</p>
              </div>
            </div>
            <div className="md:col-span-2 p-16 border border-white/5 bg-black rounded-[3rem] flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
              <div className="space-y-8 z-10">
                <div className="w-16 h-16 bg-white text-black flex items-center justify-center rounded-2xl"><Shield size={32} /></div>
                <h3 className="text-5xl font-black tracking-tighter uppercase">Segurança Konig</h3>
                <p className="text-2xl text-zinc-500 max-w-md">Login sem senhas via Magic Link e dados criptografados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. PLANOS --- */}
      <section id="pricing" className="py-48 px-6 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
        <div className="max-w-7xl mx-auto space-y-32 z-10 relative">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase">Investimento.</h2>
            <p className="text-zinc-500 text-2xl font-medium">Recupere seu tempo, colha resultados.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.nome} className={`relative p-12 border rounded-[3rem] flex flex-col justify-between transition-all duration-500 ${p.popular ? 'border-white/30 bg-white/[0.07] scale-105 shadow-[0_0_80px_rgba(255,255,255,0.05)]' : 'border-white/5 bg-zinc-950 hover:border-white/10'}`}>
                {p.popular && <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em]">Recomendado</span>}
                <div className="space-y-10">
                  <h3 className="text-4xl font-black uppercase tracking-tighter">{p.nome}</h3>
                  <div className="flex items-baseline gap-2"><span className="text-xl text-zinc-500 font-black">R$</span><span className="text-8xl font-black tracking-tighter">{p.preco}</span></div>
                  <ul className="space-y-5">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-zinc-300 font-bold text-sm">
                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0"><Check size={14} className="text-white" /></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full pt-16">
                  {p.popular ? (
                    <Link href="/login" className="w-full block"><ShimmerButton className="w-full">ASSINAR AGORA</ShimmerButton></Link>
                  ) : (
                    <Link href="/login" className="w-full block"><button className="w-full py-6 rounded-2xl font-black text-xl transition-all border border-white/10 bg-white/5 hover:bg-white/10">ASSINAR AGORA</button></Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FAQ --- */}
      <section id="faq" className="py-40 px-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold tracking-tighter text-center uppercase">Perguntas Frequentes</h2>
          <div className="space-y-8">
            {[
              { q: 'Preciso de internet para vistoriar?', a: 'Não. O app funciona 100% offline e sincroniza quando detectar sinal.' },
              { q: 'Como o relatório é enviado?', a: 'O PDF é gerado automaticamente e enviado para o seu e-mail e para o dashboard.' },
              { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem multas ou letras miúdas. Transparência total.' }
            ].map((faq, i) => (
              <div key={i} className="space-y-3 p-8 bg-zinc-950/50 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-lg font-black tracking-tight">{faq.q}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CTA FINAL --- */}
      <section className="py-40 px-6 text-center">
        <motion.div {...fadeInUp} className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-6xl md:text-[100px] font-bold tracking-[-0.06em] leading-tight">A escala começa agora.</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/login">
              <ShimmerButton className="text-xl px-16 py-6 h-auto shadow-[0_20px_80px_rgba(255,255,255,0.2)]">
                CRIAR MINHA CONTA DE ELITE
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-6 flex flex-col md:flex-row justify-between items-center gap-12 bg-black">
        <div className="flex items-center gap-4">
          <Logo className="w-12 h-12 text-white" />
          <div>
            <h4 className="text-2xl font-black italic uppercase tracking-tighter">INSPECTIFY</h4>
            <p className="text-[10px] tracking-[0.5em] uppercase text-zinc-600 font-black">Império Konig</p>
          </div>
        </div>
        <div className="flex gap-8 text-[10px] uppercase font-black tracking-widest text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
        </div>
        <p className="text-zinc-700 font-black text-xs uppercase tracking-[0.3em]">© 2026 Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}