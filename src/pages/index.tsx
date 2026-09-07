import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const testimonials = [
  {
    name: "Fernanda A.",
    location: "Curitiba/PR",
    text:
      "O Mapa do Catecismo me deu clareza do início ao fim. Em poucas semanas minha catequese ficou muito mais organizada e os encontros renderam muito!",
    avatar: "FA",
  },
  {
    name: "Pe. Ricardo",
    location: "Juiz de Fora/MG",
    text:
      "Uso com todos os catequistas da paróquia. As aulas prontas, os roteiros e os bônus nos fizeram ganhar o ano inteiro de planejamento.",
    avatar: "PR",
  },
  {
    name: "Tatiane Lopes",
    location: "Belo Horizonte/MG",
    text:
      "Finalmente encontrei um material completo, bonito e fácil de aplicar. As crianças se apaixonaram pelas dinâmicas.",
    avatar: "TL",
  },
];

const insideContent = [
  "Plano anual completo",
  "Roteiros detalhados",
  "Planilhas de acompanhamento",
  "Materiais visuais prontos",
  "Treinamento para catequistas",
  "Plantão de dúvidas",
];

const audiences = [
  {
    title: "Catequistas iniciantes",
    description: "Encontros prontos, passo a passo e apoio direto para conduzir com segurança.",
  },
  {
    title: "Coordenações paroquiais",
    description: "Organize toda a equipe com o mesmo roteiro, cronograma e indicadores.",
  },
  {
    title: "Catequistas experientes",
    description: "Atualize seus conteúdos, ganhe tempo com materiais modernos e impacte ainda mais as turmas.",
  },
];

const productSteps = [
  {
    title: "Planejamento anual",
    description: "Calendário completo, objetivos e metas para cada etapa do ano catequético.",
  },
  {
    title: "Roteiros semanais",
    description: "Cada encontro explicado passo a passo, com dinâmicas, referências bíblicas e atividades.",
  },
  {
    title: "Ferramentas de acompanhamento",
    description: "Planilhas, checklists e templates para mensurar o progresso dos catequizandos.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1472162314594-eca3c3d90df1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80",
];

const benefits = [
  "Aulas prontas do 1º ao 4º ano de catequese",
  "Materiais visuais editáveis",
  "Treinamento gravado + encontros ao vivo",
  "Checklist para cada encontro",
  "Planilha de presença e acompanhamento",
  "Acesso imediato e vitalício ao portal",
];

const bonuses = [
  {
    number: "01",
    title: "Caderno com 75 dinâmicas católicas",
    description: "Sugestões prontas para aplicar em encontros presenciais e on-line.",
    value: "R$ 197",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "02",
    title: "Kit de artes para redes sociais",
    description: "Mais de 120 artes editáveis no Canva para divulgar os encontros.",
    value: "R$ 147",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "03",
    title: "Calendário litúrgico interativo",
    description: "Material visual que explica cada tempo litúrgico para crianças.",
    value: "R$ 97",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "04",
    title: "Treinamento Jornada do Catequista",
    description: "Aulas extras com suporte da equipe para alinhar toda a coordenação.",
    value: "R$ 297",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "05",
    title: "Biblioteca de músicas e áudios",
    description: "Playlist organizada para cada momento da catequese.",
    value: "R$ 97",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    number: "06",
    title: "Guia de encontros especiais",
    description: "Celebrações temáticas prontas para Páscoa, Advento e Pentecostes.",
    value: "R$ 167",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  },
];

const faq = [
  {
    question: "Como recebo o acesso ao Mapa do Catecismo?",
    answer:
      "Assim que a sua compra é confirmada, você recebe automaticamente no e-mail e no WhatsApp o link para o portal. Basta criar sua senha e acessar de qualquer dispositivo.",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer:
      "O acesso é vitalício. Você pode assistir e baixar os materiais quantas vezes quiser, inclusive nas próximas turmas.",
  },
  {
    question: "Posso dividir o acesso com minha equipe?",
    answer:
      "Sim! Disponibilizamos até 5 logins adicionais para catequistas da mesma paróquia sem custo extra.",
  },
  {
    question: "Há suporte em caso de dúvidas?",
    answer:
      "Temos plantões mensais ao vivo e um canal direto pelo WhatsApp para tirar dúvidas diariamente.",
  },
  {
    question: "O material serve para catequese de adultos?",
    answer:
      "Sim, adaptamos o roteiro para turmas de jovens, adultos e crianças. Você recebe orientações em cada módulo.",
  },
];

export default function Home() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (question: string) => {
    setOpenItem((prev) => (prev === question ? null : question));
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Mapa do Catecismo | Formação completa para catequistas</title>
        <meta name="description" content="Reprodução visual do site Mapa do Catecismo com toda a estrutura de oferta, bônus e conteúdos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.offerBar}>
        <strong>Últimas vagas com bônus liberados</strong>
        <span>Inscreva-se hoje e receba 6 bônus + acesso vitalício</span>
      </div>
      <main className={styles.wrapper}>
        <section className={styles.heroSection}>
          <div className={styles.heroText}>
            <p className={styles.heroTag}>Formação completa • Catequese 2024</p>
            <h1>Mapa do Catecismo</h1>
            <p className={styles.heroSubtitle}>
              Um passo a passo visual, moderno e aprovado por mais de 4.800 catequistas para conduzir catequeses vivas, profundas e organizadas durante todo o ano.
            </p>
            <ul className={styles.heroHighlights}>
              <li>Roteiros semanais + encontros especiais</li>
              <li>Planilhas de acompanhamento</li>
              <li>Suporte direto com a equipe</li>
            </ul>
            <div className={styles.heroButtons}>
              <a href="#ofertas" className={styles.primaryButton}>
                Quero fazer parte
              </a>
              <a href="#tudo-receber" className={styles.secondaryButton}>
                Ver tudo o que recebo
              </a>
            </div>
            <div className={styles.safeInfo}>
              <span>Pagamento 100% seguro • Acesso imediato</span>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardImage}>
              <img src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?auto=format&fit=crop&w=900&q=80" alt="Mockup do Mapa do Catecismo" />
            </div>
            <div className={styles.heroCardInfo}>
              <p>Plano anual completo</p>
              <strong>+ de 120 aulas prontas</strong>
              <span>Planilhas, materiais visuais e suporte contínuo</span>
            </div>
          </div>
        </section>

        <section className={styles.productImageSection}>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80" alt="Visual geral do produto" />
        </section>

        <section className={styles.ctaStrip}>
          <div>
            <h2>Garanta seu acesso com todos os bônus liberados</h2>
            <p>Oferta exclusiva para quem confirmar a inscrição nesta semana.</p>
          </div>
          <a href="#ofertas" className={styles.primaryButton}>
            Quero garantir agora
          </a>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.sectionHeader}>
            <p>Depoimentos reais</p>
            <h2>Resultados de quem aplicou o Mapa</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <article key={item.name} className={styles.testimonialCard}>
                <div className={styles.avatar}>{item.avatar}</div>
                <p className={styles.testimonialText}>“{item.text}”</p>
                <div className={styles.testimonialMeta}>
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.insideSection}>
          <div className={styles.sectionHeader}>
            <p>Veja por dentro</p>
            <h2>Tudo organizado em um portal intuitivo</h2>
          </div>
          <div className={styles.insideGrid}>
            {insideContent.map((item) => (
              <div key={item} className={styles.insideItem}>
                <span>✔</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.audienceSection}>
          <div className={styles.sectionHeader}>
            <p>Para quem é</p>
            <h2>O Mapa atende todo tipo de catequista</h2>
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map((item) => (
              <article key={item.title} className={styles.audienceCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.productExplain}>
          <div className={styles.sectionHeader}>
            <p>Como funciona</p>
            <h2>O passo a passo que guia toda a sua catequese</h2>
          </div>
          <div className={styles.steps}>
            {productSteps.map((step) => (
              <div key={step.title} className={styles.stepCard}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.gallery}>
          <div className={styles.sectionHeader}>
            <p>Por dentro do portal</p>
            <h2>Material visual pensado para catequistas</h2>
          </div>
          <div className={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <div key={image} className={styles.galleryItem}>
                <img src={image} alt="Material interno" />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <p>Benefícios</p>
            <h2>Você recebe ferramentas completas para aplicar agora</h2>
          </div>
          <div className={styles.benefitGrid}>
            {benefits.map((item) => (
              <div key={item} className={styles.benefitCard}>
                <span>•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tudo-receber" className={styles.receiveSection}>
          <div className={styles.sectionHeader}>
            <p>Tudo o que você vai receber</p>
            <h2>Pacote completo do Mapa do Catecismo</h2>
          </div>
          <div className={styles.receiveContent}>
            <ul>
              <li>Plano anual com + de 120 encontros detalhados</li>
              <li>Treinamento completo gravado + atualizações</li>
              <li>Planilhas de presença, progresso e sacramentos</li>
              <li>Kit de materiais visuais editáveis</li>
              <li>Plantões de dúvidas e suporte pelo WhatsApp</li>
              <li>Comunidade exclusiva com catequistas do Brasil inteiro</li>
            </ul>
            <div className={styles.receiveImage}>
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80" alt="Mockup do pacote" />
            </div>
          </div>
        </section>

        <section className={styles.productMain}>
          <div className={styles.sectionHeader}>
            <p>Produto principal</p>
            <h2>Mapa do Catecismo 2024</h2>
          </div>
          <div className={styles.productMainContent}>
            <div>
              <h3>Plano anual + portal completo</h3>
              <p>
                Estruturamos cada etapa da catequese com objetivos claros, atividades práticas, recursos audiovisuais e roteiros prontos para você aplicar imediatamente.
              </p>
              <ul>
                <li>+ de 70 vídeos explicativos</li>
                <li>Modelos editáveis e checklists</li>
                <li>Suporte e atualizações futuras</li>
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80" alt="Mockup principal" />
          </div>
        </section>

        {bonuses.map((bonus) => (
          <section key={bonus.number} className={styles.bonusSection}>
            <div className={styles.bonusNumber}>Bônus {bonus.number}</div>
            <div className={styles.bonusContent}>
              <div>
                <h3>{bonus.title}</h3>
                <p>{bonus.description}</p>
                <span className={styles.bonusValue}>Valor: {bonus.value} • Você recebe gratuito</span>
              </div>
              <div className={styles.bonusImage}>
                <img src={bonus.image} alt={bonus.title} />
              </div>
            </div>
          </section>
        ))}

        <section className={styles.midCta}>
          <h2>Entre agora e receba todos os bônus</h2>
          <p>Oferta válida enquanto as vagas desta turma estiverem abertas.</p>
          <a href="#ofertas" className={styles.primaryButton}>
            Quero garantir meu acesso
          </a>
        </section>

        <section id="ofertas" className={styles.offerSection}>
          <div className={styles.sectionHeader}>
            <p>Escolha sua oferta</p>
            <h2>Decida como quer acessar o Mapa</h2>
          </div>
          <div className={styles.offerGrid}>
            <article className={styles.basicOffer}>
              <h3>Oferta Básica</h3>
              <p className={styles.offerTag}>Acesso ao Mapa do Catecismo</p>
              <ul>
                <li>Portal completo</li>
                <li>Materiais PDF e Canva</li>
                <li>Suporte por 3 meses</li>
              </ul>
              <div className={styles.priceBlock}>
                <span>De R$ 997</span>
                <strong>Por 12x de R$ 48,70</strong>
                <small>ou R$ 497 à vista</small>
              </div>
              <a href="https://pay.hotmart.com" className={styles.secondaryButton}>
                Quero a oferta básica
              </a>
            </article>
            <article className={styles.superOffer}>
              <div className={styles.mostChosen}>Mais escolhida</div>
              <h3>Super Oferta</h3>
              <p className={styles.offerTag}>Mapa + 6 bônus exclusivos</p>
              <ul>
                <li>Acesso vitalício ao portal</li>
                <li>Todos os bônus liberados</li>
                <li>Suporte por 12 meses</li>
                <li>Atualizações futuras</li>
              </ul>
              <div className={styles.priceBlock}>
                <span>De R$ 1.597</span>
                <strong>Por 12x de R$ 64,90</strong>
                <small>ou R$ 647 à vista</small>
              </div>
              <a href="https://pay.hotmart.com" className={styles.primaryButton}>
                Quero a super oferta
              </a>
              <p className={styles.secureNote}>Pagamento seguro • Acesso imediato</p>
            </article>
          </div>
        </section>

        <section className={styles.guarantee}>
          <div className={styles.sectionHeader}>
            <p>Garantia</p>
            <h2>7 dias para testar sem risco</h2>
          </div>
          <p>
            Se você entrar, acessar as aulas e perceber que o Mapa do Catecismo não é para você, basta enviar uma mensagem em até 7 dias e devolvemos 100% do valor investido. Sem letras miúdas.
          </p>
        </section>

        <section className={styles.faq}>
          <div className={styles.sectionHeader}>
            <p>Perguntas frequentes</p>
            <h2>Tire suas dúvidas antes de entrar</h2>
          </div>
          <div className={styles.accordion}>
            {faq.map((item) => (
              <div key={item.question} className={`${styles.accordionItem} ${openItem === item.question ? styles.open : ''}`}>
                <button onClick={() => toggleItem(item.question)}>
                  <span>{item.question}</span>
                  <span>{openItem === item.question ? '-' : '+'}</span>
                </button>
                <div className={styles.accordionContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <h2>Pronto para transformar sua catequese?</h2>
          <p>Garanta o Mapa do Catecismo e conduza encontros inesquecíveis com segurança e organização.</p>
          <a href="https://pay.hotmart.com" className={styles.primaryButton}>
            Quero entrar agora
          </a>
          <span>Pagamento seguro • Acesso imediato liberado</span>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mapa do Catecismo. Todos os direitos reservados.</p>
        <p>Material independente. Não é afiliado a nenhuma diocese específica.</p>
      </footer>
    </div>
  );
}
