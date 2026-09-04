import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const productCategories = [
  {
    icon: "🧸",
    title: "Pelúcias abraçáveis",
    description: "Ursinhos arco-íris, unicórnios cintilantes e amigos fofinhos para acompanhar cada abraço.",
    highlight: "Coleção abraço quentinho",
    style: "plush",
  },
  {
    icon: "🚗",
    title: "Carrinhos velozes",
    description: "Corridas neon, pistas magnéticas e mini motores para quem ama velocidade.",
    highlight: "Pistas com luzes LED",
    style: "cars",
  },
  {
    icon: "🧩",
    title: "Jogos e quebra-cabeças",
    description: "Peças gigantes, desafios progressivos e puzzles 3D para brincar aprendendo.",
    highlight: "Dificuldades por idade",
    style: "puzzles",
  },
  {
    icon: "🎨",
    title: "Brinquedos educativos",
    description: "Laboratórios criativos, blocos sensoriais e tintas laváveis para pequenas grandes descobertas.",
    highlight: "Aprender brincando",
    style: "educational",
  },
  {
    icon: "👧",
    title: "Brinquedos para meninas",
    description: "Bonecas articuladas, salões de fantasia e kits para criar histórias encantadas.",
    highlight: "Looks trocáveis",
    style: "girls",
  },
  {
    icon: "👦",
    title: "Brinquedos para meninos",
    description: "Heróis articuláveis, sets de missão e gadgets para explorar cada aventura.",
    highlight: "Missões colecionáveis",
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
          content="Loja de brinquedos infantis com pelúcias, carrinhos, jogos educativos e ofertas especiais o ano todo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.tag}>Coleção Encantada 2024</p>
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
              <li>Brincadeiras para todas as idades</li>
              <li>Embalagens prontas para presente</li>
              <li>Sugestões personalizadas</li>
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
              Descubra kits com pelúcias limitadas, oficinas criativas e carrinhos turbo. Estoque colorido válido apenas
              durante a semana de lançamento!
            </p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            COMPRAR AGORA
          </a>
        </section>

        <section id="produtos" className={styles.products}>
          <div className={styles.sectionHeader}>
            <h2>Universos incríveis para cada brincadeira</h2>
            <p>Do aconchego das pelúcias às aventuras sobre rodas, escolha o que desperta mais sorrisos.</p>
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
            <h2>Benefícios que encantam famílias</h2>
            <p>Cuidamos de cada detalhe para que a experiência de compra seja tão divertida quanto brincar.</p>
          </div>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit) => (
              <li key={benefit}>✓ {benefit}</li>
            ))}
          </ul>
        </section>

        <section className={styles.ctaBanner}>
          <div>
            <p className={styles.ctaTag}>Brincadeira nonstop</p>
            <h2>Encha o carrinho com os brinquedos mais desejados do momento</h2>
            <p>Escolha modelos exclusivos, receba rápido e surpreenda com presentes cheios de magia.</p>
          </div>
          <a href="#produtos" className={styles.primaryButton}>
            QUERO MEU BRINQUEDO 🎁
          </a>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Mundo da Diversão - Brinquedos Infantis.</p>
        <p>Transformando casas em parques de diversão desde 2014.</p>
      </footer>
    </div>
  );
}
