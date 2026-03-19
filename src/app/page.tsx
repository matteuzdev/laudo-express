'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight, Star, MousePointer2, ChevronDown, Play, MessageCircle, Layout, Camera, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const plans = [
    { nome: 'Starter', preco: '49', desc: 'Para quem esta comecando.', itens: ['Ate 10 inspeções/mes', 'Armazenamento offline', 'Exportacao em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos inspetores.', itens: ['Inspeções ilimitadas', 'Fotos em alta resolucao', 'Suporte prioritario', 'Personalizacao de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliarias e agencias.', itens: ['Equipes de ate 5 pessoas', 'Multilogin', 'API de integracao', 'Dashboard de analytics'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans overflow-x-hidden">
      
      {/* --- HEADER IMPERIAL --- */}
      <header className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-xl font-black text-xl group-hover:rotate-12 transition-transform">
              I
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase italic">Inspectify</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="hover:text-white transition-colors">Duvidas</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold hover:text-zinc-300 transition-colors">Entrar</Link>
            <Link href="/login">
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-black hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                CRIAR CONTA
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- 1. HERO SECTION (ESTILO LINEAR COM LAMP EFFECT) --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 pt-32 overflow-hidden">
        {/* Lamp Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-white/10 blur-[140px] rounded-full pointer-events-none opacity-30" />
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-10 z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Disponivel para Vistoriadores de Elite
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-[120px] font-bold tracking-[-0.06em] leading-[0.85] max-w-6xl">
            Relatorios prontos <br/>
            <span className="text-zinc-600 italic font-thin">na palma da mao.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed">
            O Inspectify e o motor que faltava para sua produtividade. Capture, anote e envie relatorios de elite sem precisar de um PC.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center pt-6">
            <Link href="/login">
              <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] active:scale-95">
                Comecar Agora Gratis
              </button>
            </Link>
            <button className="px-12 py-5 rounded-full font-black text-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
              <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> Ver Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image / Video Placeholder com Glow */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 relative w-full max-w-5xl aspect-video rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] group"
        >
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
            alt="Inspectify Dashboard" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* --- 2. A DOR (VISUAL IMPACT) --- */}
      <section className="py-40 px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Sua noite <br/>pertence a voce.</h2>
            <p className="text-2xl text-zinc-500 leading-tight">
              Chega de chegar em casa exausto e ter que encarar o Word. 
              O Inspectify elimina o retrabalho manual.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-red-500/10 text-red-500 flex items-center justify-center rounded-xl shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm tracking-widest text-red-500">O Custo do Papel</h4>
                  <p className="text-zinc-500 font-medium">Cada inspeção manual rouba 2 horas do seu descanso.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" 
              alt="Cansaco" 
              className="relative rounded-[2.5rem] border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- 3. BENTO GRID RECURSOS --- */}
      <section id="features" className="py-40 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">Utilidade Bruta.</h2>
            <p className="text-zinc-500 text-xl font-medium">Ferramentas desenhadas para quem esta no trecho.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1 */}
            <div className="md:col-span-2 p-12 border border-white/5 bg-zinc-950 rounded-[2.5rem] flex flex-col justify-between group hover:border-white/20 transition-all overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <CloudOff size={200} />
              </div>
              <div className="space-y-6 z-10">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl">
                  <CloudOff size={28} />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter">Tecnologia Offline-First</h3>
                <p className="text-xl text-zinc-500 max-w-md leading-relaxed">Vistorie em elevadores, subsolos ou fazendas. O Inspectify salva tudo localmente e sincroniza quando o sinal volta.</p>
              </div>
            </div>
            
            {/* Bento Card 2 */}
            <div className="p-12 border border-white/5 bg-zinc-950 rounded-[2.5rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl font-black">
                  <FileText size={28} />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter">Relatorio Instantaneo</h3>
                <p className="text-lg text-zinc-500">Terminou o checklist? O PDF profissional ja esta no seu e-mail e do cliente.</p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="p-12 border border-white/5 bg-zinc-950 rounded-[2.5rem] flex flex-col justify-between group hover:border-white/20 transition-all">
              <div className="space-y-6">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl font-black">
                  <Camera size={28} />
                </div>
                <h3 className="text-3xl font-bold tracking-tighter">Lente Inteligente</h3>
                <p className="text-lg text-zinc-500">Compressão de imagem automatica para economizar seu armazenamento.</p>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="md:col-span-2 p-12 border border-white/5 bg-zinc-950 rounded-[2.5rem] flex flex-col justify-between group hover:border-white/20 transition-all relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-[3s]">
                <Shield size={300} />
              </div>
              <div className="space-y-6 z-10">
                <div className="w-14 h-14 bg-white text-black flex items-center justify-center rounded-2xl">
                  <Shield size={28} />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter">Segurança do Imperio</h3>
                <p className="text-xl text-zinc-500 max-w-md">Login sem senhas via Magic Link. Seus dados protegidos com criptografia de ponta a ponta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. PLANOS (PRICING ELITE) --- */}
      <section id="pricing" className="py-40 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none opacity-20" />
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter italic uppercase">Investimento.</h2>
            <p className="text-zinc-500 text-2xl font-medium">Recupere seu tempo, colha resultados.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.nome} className={`relative p-12 border rounded-[3rem] flex flex-col justify-between transition-all duration-500 ${p.popular ? 'border-white/30 bg-white/[0.07] scale-105 shadow-[0_0_80px_rgba(255,255,255,0.05)]' : 'border-white/5 bg-zinc-950 hover:border-white/10'}`}>
                {p.popular && <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em]">Recomendado</span>}
                <div className="space-y-10">
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter">{p.nome}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl text-zinc-500 font-bold uppercase">R$</span>
                    <span className="text-8xl font-black tracking-tighter">{p.preco}</span>
                    <span className="text-xl text-zinc-500">/mes</span>
                  </div>
                  <ul className="space-y-5">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-4 text-zinc-300 font-bold text-sm">
                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0"><Check size={14} /></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/login" className="w-full pt-16">
                  <button className={`w-full py-6 rounded-[1.5rem] font-black text-xl transition-all ${p.popular ? 'bg-white text-black hover:bg-zinc-200' : 'border border-white/10 bg-white/5 hover:bg-white/10 text-white'}`}>
                    ASSINAR AGORA
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FAQ (MINIMALISTA) --- */}
      <section id="faq" className="py-40 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold tracking-tighter text-center uppercase">Perguntas Frequentes</h2>
          <div className="space-y-8">
            {[
              { q: 'Preciso de internet para vistoriar?', a: 'Nao. O app funciona 100% offline e sincroniza quando detectar sinal.' },
              { q: 'Como o relatorio e enviado?', a: 'O PDF e gerado automaticamente e enviado para o seu e-mail e para o dashboard.' },
              { q: 'Posso cancelar quando quiser?', a: 'Sim. Sem multas ou letras miudas. Transparencia total.' }
            ].map((faq, i) => (
              <div key={i} className="space-y-3 p-8 bg-zinc-950/50 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-lg font-black tracking-tight">{faq.q}</h4>
                <p className="text-zinc-500 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-40 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <h2 className="text-6xl md:text-[100px] font-bold tracking-[-0.06em] leading-tight">Escala e agora.</h2>
          <Link href="/login">
            <button className="bg-white text-black px-16 py-6 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-[0_20px_80px_rgba(255,255,255,0.2)] active:scale-95">
              CRIAR MINHA CONTA DE ELITE
            </button>
          </Link>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 bg-zinc-950/50">
        <div className="space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-md font-black text-xs">I</div>
            <h4 className="text-xl font-bold italic tracking-tighter uppercase">INSPECTIFY</h4>
          </div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 font-black">Tecnologia de Elite • Imperio Konig</p>
        </div>
        <div className="flex gap-10 text-[10px] uppercase font-black tracking-widest text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-bold">© 2026 Todos os Direitos Reservados.</p>
      </footer>
    </div>
  );
}