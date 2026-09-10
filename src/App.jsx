import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  BriefcaseBusiness,
  Mail,
  Code,
  Database,
  Server,
  ChevronRight,
  Download,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

const profileImage = './perfil.png';

function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const skills = [
    'Python',
    'C',
    'Java',
    'JavaScript',
    'NodeJs',
    'SQL Avançado',
    'AWS Cloud',
    'Git / GitHub',
    'Arquitetura de Redes',
    'Power BI',
  ];

  const projects = [
    {
      title: 'Sistema de Oficina Mecânica',
      description:
        'Aplicação em Java com foco em modelagem orientada a objetos, regras de negócio e automação do fluxo de clientes, peças e ordens de serviço.',
      tags: ['Java', 'POO', 'Back-end'],
      link: 'https://github.com/JuanRodrigues-Dev/Projeto_OS_Mecanica',
    },
    {
      title: 'Banco de Dados - Delivery',
      description:
        'Modelagem conceitual, lógica e física de um sistema de delivery com foco em organização de dados, consultas e estrutura de banco relacional.',
      tags: ['SQL', 'Modelagem', 'Dados'],
      link: 'https://github.com/JuanRodrigues-Dev/Projeto_Banco_Dados_Lanchonete',
    },
  ];

  const highlights = [
    { icon: GraduationCap, title: 'Formação', text: 'Tecnólogo em Análise e Desenvolvimento de Sistemas' },
    { icon: Sparkles, title: 'Especialidade', text: 'Back-end, Java, SQL e desenvolvimento de soluções práticas' },
    { icon: Server, title: 'Foco', text: 'Código organizado, funcional e orientado a resultados' },
  ];

  return (
    <div className="min-h-screen bg-darker text-white selection:bg-primary selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-darker/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <span className="text-xl font-bold tracking-tighter text-white">
            Juan<span className="text-primary">.dev</span>
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
            <a href="#sobre" className="transition-colors hover:text-white">Sobre</a>
            <a href="#habilidades" className="transition-colors hover:text-white">Habilidades</a>
            <a href="#projetos" className="transition-colors hover:text-white">Projetos</a>
            <a href="#experiencia" className="transition-colors hover:text-white">Experiência</a>
          </div>
        </div>
      </nav>

      <section id="sobre" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Disponível para oportunidades profissionais
            </div>
            <p className="mb-4 text-base font-medium tracking-[0.2em] text-primary uppercase">Olá, eu sou</p>
            <h1 className="mb-6 max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
              Juan Rodrigues Gomes.
            </h1>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-300 md:text-5xl">
              Desenvolvedor de Software.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              Estudante de Análise e Desenvolvimento de Sistemas pelo IFPB, com interesse em desenvolvimento back-end, arquitetura de dados, Java, JavaScript e soluções orientadas a desempenho, organização e qualidade.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={18} />
                  </div>
                  <p className="mb-1 text-sm font-semibold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-gray-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/Curriculo_09.2026.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30"
              >
                <Download size={18} />
                Baixar currículo
              </a>
              <a
                href="mailto:juanjrg1427@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/20"
              >
                Contato
                <Mail size={18} />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary/40 hover:text-primary"
              >
                Ver projetos
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="https://github.com/JuanRodrigues-Dev" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
                <Globe size={22} />
              </a>
              <a href="https://www.linkedin.com/in/juanrgomes" target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
                <BriefcaseBusiness size={22} />
              </a>
              <a href="mailto:juanjrg1427@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="order-1 rounded-[2rem] border border-white/10 bg-[#0d0d0f] p-5 shadow-[0_20px_80px_rgba(59,130,246,0.12)] lg:order-2"
          >
            <div className="overflow-hidden rounded-[1.8rem] border border-primary/20 bg-gradient-to-br from-primary/10 via-[#0d0d0f] to-transparent p-3 shadow-[0_12px_40px_rgba(59,130,246,0.15)]">
              <img
                src={profileImage}
                alt="Juan Rodrigues Gomes"
                className="h-[420px] w-full rounded-[1.5rem] object-cover object-center ring-2 ring-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="sobre-mim" className="bg-[#0d0d0f] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 flex items-center gap-3 text-3xl font-bold text-white"
          >
            <Sparkles className="text-primary" /> Sobre mim
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-darker p-8">
              <p className="mb-4 text-lg leading-relaxed text-gray-300">
                Sou uma pessoa curiosa, organizada e apaixonada por transformar ideias em soluções úteis. Desde cedo, me interesso por lógica, tecnologia e aprendizado contínuo, e isso me levou a buscar cada vez mais conhecimento em desenvolvimento de software, banco de dados e arquitetura de sistemas.
              </p>
              <p className="leading-relaxed text-gray-400">
                O que me move é a possibilidade de criar soluções que resolvem problemas reais, melhorar processos e entregar resultados com qualidade, clareza e atenção aos detalhes. Acredito que tecnologia deve ser prática, eficiente e pensada para facilitar a vida das pessoas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(59,130,246,0.18)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Perfil</p>
                <p className="mt-3 text-xl font-bold text-white">Curioso</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111214] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,255,255,0.08)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Estilo</p>
                <p className="mt-3 text-xl font-bold text-white">Organizado</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-[#111214] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(255,255,255,0.08)]">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Objetivo</p>
                <p className="mt-3 text-xl font-bold text-white">Impactar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="habilidades" className="bg-[#0d0d0f] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 flex items-center gap-3 text-3xl font-bold text-white"
          >
            <Code className="text-primary" /> Habilidades Técnicas
          </motion.h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-darker px-5 py-4 text-center font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary hover:shadow-[0_14px_30px_rgba(59,130,246,0.12)]"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 flex items-center gap-3 text-3xl font-bold text-white"
        >
          <Database className="text-primary" /> Projetos e Experiências Relevantes
        </motion.h3>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map(({ title, description, tags, link }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[2rem] border border-white/10 bg-[#0d0d0f] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_45px_rgba(59,130,246,0.12)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Projeto 0{index + 1}</span>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                  em destaque
                </span>
              </div>

              <h4 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-primary">{title}</h4>
              <p className="mb-6 text-gray-400">{description}</p>

              <div className="mb-8 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-white transition-all duration-300 hover:text-primary group-hover:translate-x-1">
                Ver no GitHub <ChevronRight size={16} className="ml-1" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="bg-[#0d0d0f] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 flex items-center gap-3 text-3xl font-bold text-white"
          >
            <Server className="text-primary" /> Experiência
          </motion.h3>

          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-[2rem] border border-white/10 bg-darker p-8 pl-10"
            >
              <div className="absolute left-5 top-8 h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <h4 className="text-xl font-bold text-white">Assistente Administrativo</h4>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Emprego recente
                </span>
              </div>
              <h5 className="mb-2 text-lg text-gray-400">EMPAER-PB</h5>
              <p className="mb-4 text-sm font-mono text-primary">Agosto 2024 - Dezembro 2024</p>
              <ul className="ml-4 list-disc space-y-2 text-gray-400">
                <li>Desenvolvimento de planilhas para controle e armazenamento de dados de agricultores do Seguro Safra.</li>
                <li>Reestruturação do fluxo de documentos institucionais físicos e digitais, melhorando a eficiência.</li>
                <li>Apoio na execução de rotinas administrativas e da resolução de problemas operacionais.</li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-[#0d0d0f] p-8"
            >
              <h4 className="mb-4 text-xl font-bold text-white">Perfil profissional</h4>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-darker p-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Foco</p>
                  <p className="text-gray-300">Desenvolvimento de soluções organizadas, práticas e de alto impacto para negócios e sistemas.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-darker p-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Competências</p>
                  <p className="text-gray-300">Back-end, Java, SQL, JavaScript, banco de dados, organização de dados e automação de processos.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-10 text-center text-sm text-gray-500">
        <p className="text-base text-gray-300">Projetado e desenvolvido para Juan Rodrigues Gomes.</p>
        <p className="mt-3 text-gray-400">(83) 99675-0471 | juanjrg1427@gmail.com</p>
        <div className="mt-5 flex justify-center gap-3">
          <a href="mailto:juanjrg1427@gmail.com" className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20">Email</a>
          <a href="https://github.com/JuanRodrigues-Dev" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">GitHub</a>
          <a href="https://www.linkedin.com/in/juanrgomes" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;