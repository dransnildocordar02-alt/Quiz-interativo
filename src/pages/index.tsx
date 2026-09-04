import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const productCategories = [
  {
    icon: "VL",
    title: "Vestidos",
    description: "Modelagens midi e longas, com acabamentos impecáveis para ocasiões sofisticadas.",
    highlight: "Vestido Elegante em renda francesa",
    style: "dresses",
  },
  {
    icon: "CP",
    title: "Camisas",
    description: "Camisas premium com cortes estruturados e tecidos suaves para um visual impecável.",
    highlight: "Camisa Premium em algodão egípcio",
    style: "shirts",
  },
  {
    icon: "BM",
    title: "Blusas",
    description: "Blusas modernas com detalhes minimalistas e cores neutras para combinar com tudo.",
    highlight: "Blusa Moderna com decote assimétrico",
    style: "tops",
  },
  {
    icon: "CA",
    title: "Calças",
    description: "Calças de alfaiataria com caimento perfeito e versatilidade do trabalho ao jantar.",
    highlight: "Calça de Alfaiataria em linho",
    style: "pants",
  },
  {
    icon: "CJ",
    title: "Conjuntos",
    description: "Coordenados elegantes que facilitam o look completo com harmonia e estilo.",
    highlight: "Conjunto Casual com acabamento acetinado",
    style: "sets",
  },
  {
    icon: "MF",
    title: "Moda feminina",
    description: "Curadoria feminina com peças statement, casacos estruturados e vestidos icônicos.",
    highlight: "Conjunto Feminino com recortes precisos",
    style: "women",
  },
  {
    icon: "MM",
    title: "Moda masculina",
    description: "Costuras precisas, camisas italianas e blazers com toque contemporâneo.",
    highlight: "Camisa Premium com punho duplo",
    style: "men",
  },
  {
    icon: "AC",
    title: "Acessórios",
    description: "Bolsas, cintos e joias minimalistas para finalizar qualquer produção com sofisticação.",
    highlight: "Pulseira com detalhes dourados",
    style: "accessories",
  },
];

const benefits = [
  "Peças selecionadas",
  "Moda moderna e elegante",
  "Ótimo custo-benefício",
  "Compra fácil e segura",
  "Envio para todo o país",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atelier Lumière | Loja de Moda e Roupas</title>
        <meta
          name="description"
          content="Moda feminina e masculina com vestidos, camisas premium, conjuntos modernos e acessórios sofisticados para todas as ocasiões."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.tag}>Coleção Atelier Luxe 2024</p>
            <h1>Vista-se bem. Sinta-se incrível. ✨</h1>
            <p className={styles.subtitle}>
              Descubra peças modernas e estilosas para renovar o seu guarda-roupa.
            </p>
            <div className={styles.heroActions}>
              <a href="#produtos" className={styles.primaryButton}>
                COMPRAR AGORA
              </a>
              <a href="#ofertas" className={styles.secondaryButton}>
                VER COLEÇÃO
              </a>
            </div>
            <ul className={styles.heroBadges}>
              <li>Novidades exclusivas toda semana</li>
              <li>Consultoria de estilo personalizada</li>
              <li>Entrega express para todo o Brasil</li>
            </ul>
          </div>
          <div className={styles.heroIllustration}>
            <div className={styles.heroBubbleOne}></div>
            <div className={styles.heroBubbleTwo}></div>
            <div className={styles.heroShowcase}>
              <div className={styles.lookCard}>
                <p className={styles.lookSeason}>Coleção Signature</p>
                <h3>Conjunto Tailleur</h3>
                <p className={styles.lookDetails}>Alfaiataria precisa, toque acetinado e caimento impecável.</p>
                <span className={styles.lookPrice}>R$ 1.290</span>
              </div>
              <div className={styles.lookHighlight}>
                <p>Curadoria Premium</p>
                <strong>Camadas que traduzem sofisticação cotidiana</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="ofertas" className={styles.offer}>
          <div className={styles.offerContent}>
            <p className={styles.offerTag}>OFERTA ESPECIAL</p>
            <h2>Renove seu guarda-roupa com peças selecionadas e preços especiais.</h2>
            <p>
              Itens em edição limitada, tecidos nobres e acabamentos impecáveis para elevar cada produção. Aproveite
              condições exclusivas por tempo limitado.
            </p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            QUERO O MEU
          </a>
        </section>

        <section id="produtos" className={styles.products}>
          <div className={styles.sectionHeader}>
            <h2>Coleções que traduzem o seu estilo</h2>
            <p>Seleção premium de moda feminina e masculina para compor looks urbanos, sofisticados e autorais.</p>
          </div>
          <div className={styles.grid}>
            {productCategories.map((category) => (
              <div key={category.title} className={`${styles.card} ${styles[category.style]}`}>
                <div className={styles.cardIcon}>{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className={styles.cardHighlight}>{category.highlight}</span>
                <a href="#ofertas" className={styles.cardButton}>
                  VER COLEÇÃO
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefits}>
          <div className={styles.sectionHeader}>
            <h2>Benefícios que elevam sua experiência</h2>
            <p>Cada detalhe foi pensado para oferecer uma jornada de compra sofisticada e prática.</p>
          </div>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit) => (
              <li key={benefit}>✓ {benefit}</li>
            ))}
          </ul>
        </section>

        <section className={styles.ctaBanner}>
          <div>
            <p className={styles.ctaTag}>Experiência premium</p>
            <h2>Experimente a curadoria de moda que inspira seus looks diários</h2>
            <p>Combine peças exclusivas, descubra novas texturas e receba tudo com embalagem impecável.</p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            VER COLEÇÃO
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Atelier Lumière - Moda & Lifestyle.</p>
        <p>Elegância contemporânea, atendimento personalizado e entrega para todo o Brasil.</p>
      </footer>
    </div>
  );
}
