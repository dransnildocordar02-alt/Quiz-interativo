import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const productCategories = [
  {
    icon: "🧸",
    title: "Pelúcias abraçáveis",
    description: "Ursinhos, unicórnios e personagens suaves para acompanhar cada cochilo.",
    highlight: "A partir de R$ 59,90",
    style: "plush",
  },
  {
    icon: "🚗",
    title: "Carrinhos velozes",
    description: "Modelos esportivos, pistas coloridas e miniaturas com luz e som.",
    highlight: "Coleções exclusivas",
    style: "cars",
  },
  {
    icon: "🧩",
    title: "Jogos e quebra-cabeças",
    description: "Desafios criativos para estimular memória, lógica e trabalho em equipe.",
    highlight: "Novos lançamentos",
    style: "puzzles",
  },
  {
    icon: "🎨",
    title: "Brinquedos educativos",
    description: "Blocos de montar, pinturas mágicas e experimentos cheios de descobertas.",
    highlight: "Favoritos das escolas",
    style: "educational",
  },
  {
    icon: "👧",
    title: "Brinquedos para meninas",
    description: "Casas de boneca, acessórios fashion e kits de histórias encantadas.",
    highlight: "Kits personalizados",
    style: "girls",
  },
  {
    icon: "👦",
    title: "Brinquedos para meninos",
    description: "Super-heróis, jogos de aventura e ferramentas para imaginação sem limites.",
    highlight: "Diversão garantida",
    style: "boys",
  },
];

const benefits = [
  "Brinquedos selecionados",
  "Diversão para toda a família",
  "Opções educativas e criativas",
  "Compra fácil e segura",
  "Envio para todo o país",
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mundo da Diversão | Loja de Brinquedos Infantis</title>
        <meta
          name="description"
          content="Brinquedos divertidos, educativos e cheios de cores para transformar cada momento em alegria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.tag}>Coleção Colorida 2024</p>
            <h1>Brinquedos que transformam momentos em diversão! 🎁</h1>
            <p className={styles.subtitle}>
              Encontre brinquedos divertidos, educativos e criativos para deixar a brincadeira ainda mais especial.
            </p>
            <div className={styles.heroActions}>
              <a href="#produtos" className={styles.primaryButton}>
                QUERO MEU BRINQUEDO 🎁
              </a>
              <a href="#ofertas" className={styles.secondaryButton}>
                VER BRINQUEDOS
              </a>
            </div>
            <ul className={styles.heroBadges}>
              <li>Entrega rápida</li>
              <li>Presentes personalizados</li>
              <li>Frete para todo o Brasil</li>
            </ul>
          </div>
          <div className={styles.heroIllustration}>
            <div className={styles.heroBubbleOne}></div>
            <div className={styles.heroBubbleTwo}></div>
            <div className={styles.heroToy}>
              <span role="img" aria-label="blocos coloridos">
                🧱
              </span>
              <span role="img" aria-label="ursinho">
                🧸
              </span>
              <span role="img" aria-label="aviãozinho">
                ✈️
              </span>
            </div>
          </div>
        </section>

        <section id="ofertas" className={styles.offer}>
          <div className={styles.offerContent}>
            <p className={styles.offerTag}>OFERTA ESPECIAL 🎉</p>
            <h2>Brinquedos selecionados com preços especiais por tempo limitado!</h2>
            <p>
              Combine educação e diversão com kits criativos, pelúcias exclusivas e carrinhos cheios de energia. Estoque
              limitado para aproveitar agora mesmo!
            </p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            COMPRAR AGORA
          </a>
        </section>

        <section id="produtos" className={styles.products}>
          <div className={styles.sectionHeader}>
            <h2>Categorias para todas as brincadeiras</h2>
            <p>Escolha o universo que mais combina com a imaginação das crianças.</p>
          </div>
          <div className={styles.grid}>
            {productCategories.map((category) => (
              <div key={category.title} className={`${styles.card} ${styles[category.style]}`}>
                <div className={styles.cardIcon}>{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span className={styles.cardHighlight}>{category.highlight}</span>
                <a href="#ofertas" className={styles.cardButton}>
                  VER BRINQUEDOS
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefits}>
          <div className={styles.sectionHeader}>
            <h2>Por que escolher a nossa loja?</h2>
            <p>Um universo de alegria pensado para surpreender crianças e famílias.</p>
          </div>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit) => (
              <li key={benefit}>✓ {benefit}</li>
            ))}
          </ul>
        </section>

        <section className={styles.ctaBanner}>
          <div>
            <p className={styles.ctaTag}>Diversão garantida</p>
            <h2>Pronto para encher o dia de cor e criatividade?</h2>
            <p>Garanta já brinquedos cheios de personalidade com entrega rápida e compra segura.</p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            QUERO MEU BRINQUEDO 🎁
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mundo da Diversão - Loja de Brinquedos Infantis.</p>
        <p>Colorindo memórias com brinquedos educativos, criativos e seguros.</p>
      </footer>
    </div>
  );
}
