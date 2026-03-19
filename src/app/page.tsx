'use client';

import { Shield, Zap, CloudOff, FileText, Check, ArrowRight, Star, MousePointer2, ChevronDown, Play, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const plans = [
    { nome: 'Starter', preco: '49', desc: 'Para quem esta comecando.', itens: ['Ate 10 inspeções/mes', 'Armazenamento offline', 'Exportacao em PDF'] },
    { nome: 'Pro', preco: '97', desc: 'O favorito dos inspetores.', itens: ['Inspeções ilimitadas', 'Fotos em alta resolucao', 'Suporte prioritario', 'Personalizacao de logo'], popular: true },
    { nome: 'Empire', preco: '197', desc: 'Para imobiliarias e agencias.', itens: ['Equipes de ate 5 pessoas', 'Multilogin', 'API de integracao', 'Dashboard de analytics'] },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen font-sans">
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center p-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/10 to-transparent blur-[120px] pointer-events-none opacity-50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Star size={12} className="text-white" /> O Futuro das Inspecoes Imobiliarias
          </div>
          <h1 className="text-6xl md:text-[100px] font-bold tracking-[-0.04em] leading-[0.9] max-w-5xl">
            Relatorios prontos <br/>
            <span className="text-zinc-500 italic font-light">antes de sair do imovel.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            O Inspectify automatiza a parte chata. Capture fotos, registre notas offline e gere relatorios de elite em segundos. 
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <Link href="/login">
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95">
                Comecar Agora Gratis
              </button>
            </Link>
            <button className="px-10 py-4 rounded-full font-bold text-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" /> Ver Demonstracao
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-black">Utilizado por profissionais das maiores redes</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale invert">
            <div className="text-2xl font-black italic uppercase">Re/max</div>
            <div className="text-2xl font-black italic uppercase">Loft</div>
            <div className="text-2xl font-black italic uppercase">QuintoAndar</div>
            <div className="text-2xl font-black italic uppercase">Zap</div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">O fim do seu <br/>"segundo turno".</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Voce passa o dia no sol, vitoriando imoveis, e quando chega em casa as 19h, sua jornada continua. 
              Passar fotos do celular pro PC e digitar observacoes no Word e um dreno de energia e tempo.
            </p>
            <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl space-y-4">
              <div className="flex items-center gap-3 text-red-500">
                <Zap size={24} />
                <span className="font-black uppercase tracking-widest text-sm">O Custo do Papel</span>
              </div>
              <p className="text-zinc-500 text-sm italic">"Eu perdia 2 horas por noite apenas organizando fotos. O Inspectify me devolveu minha familia."</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800" 
              alt="Inspetor" 
              className="w-full h-full object-cover grayscale opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)]">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                alt="Produto" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <div className="text-center p-8 bg-black border border-white/10 rounded-2xl">
                  <FileText className="mx-auto mb-4" size={48} />
                  <p className="text-xs uppercase tracking-widest font-black">Relatorio Gerado</p>
                  <p className="text-xl font-bold">100% Digital</p>
                </div>
              </div>
            </div>
            <motion.div {...fadeInUp} className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Potencia em <br/>cada clique.</h2>
              <p className="text-xl text-zinc-400">
                Nossa tecnologia Offline-First permite que voce trabalhe em qualquer lugar. Elevadores, subsolos ou areas rurais. 
              </p>
              <ul className="grid grid-cols-1 gap-4 pt-4">
                {[
                  { icon: CloudOff, text: 'Trabalho 100% Offline' },
                  { icon: FileText, text: 'PDFs Profissionais Instantaneos' },
                  { icon: Shield, text: 'Seguranca de Nivel Bancario' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl">
                    <item.icon size={20} className="text-zinc-400" />
                    <span className="font-bold">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold tracking-tight italic uppercase">Utilidade Bruta.</h2>
            <p className="text-zinc-500 text-xl">Tudo o que voce precisa para dominar o campo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Camera Inteligente', desc: 'Captura rapida com compressao automatica.', icon: MousePointer2 },
              { title: 'Checklist Dinamico', desc: 'Adapte o relatorio conforme o tipo de inspecao.', icon: Zap },
              { title: 'Sincronizacao Nuvem', desc: 'Blindagem de dados em nosso servidor.', icon: Shield }
            ].map((feature, i) => (
              <div key={i} className="p-10 border border-white/5 bg-white/5 rounded-3xl transition-all space-y-6">
                <feature.icon size={32} className="text-white" />
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold tracking-tight">Investimento em Tempo.</h2>
            <p className="text-zinc-500 text-xl">Escolha o plano ideal para a sua escala de trabalho.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p) => (
              <div key={p.nome} className={`relative p-12 border flex flex-col justify-between transition-all rounded-[2rem] ${p.popular ? 'border-white/20 bg-white/[0.05] scale-105' : 'border-white/5 bg-white/5'}`}>
                {p.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Recomendado</span>}
                <div className="space-y-8">
                  <h3 className="text-3xl font-black italic uppercase tracking-tighter">{p.nome}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-zinc-500 font-bold uppercase tracking-widest">R$</span>
                    <span className="text-7xl font-black">{p.preco}</span>
                    <span className="text-lg text-zinc-500">/mes</span>
                  </div>
                  <ul className="space-y-4">
                    {p.itens.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                        <Check size={12} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/login" className="w-full pt-12">
                  <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${p.popular ? 'bg-white text-black hover:bg-zinc-200' : 'border border-white/10 bg-white/5 hover:bg-white/10'}`}>
                    ASSINAR AGORA
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Pronto para a <br/>transformacao digital?</h2>
          <p className="text-xl text-zinc-500">Junte-se a mais de 500 profissionais.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/login">
              <button className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.2)]">
                CRIAR MINHA CONTA
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
        <div className="space-y-2 text-center md:text-left">
          <h4 className="text-xl font-bold italic tracking-tighter uppercase">INSPECTIFY</h4>
          <p className="text-[10px] tracking-[0.3em] uppercase">Tecnologia de Elite • Imperio Konig</p>
        </div>
        <p className="text-[10px] uppercase tracking-widest">© 2026 Todos os Direitos Reservados.</p>
      </footer>
    </div>
  );
}