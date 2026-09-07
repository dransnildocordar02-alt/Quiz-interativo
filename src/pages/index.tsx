import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const categories = [
  {
    name: "Vestidos",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    description: "Silhuetas fluidas e elegantes para todas as ocasiões.",
  },
  {
    name: "Camisetas",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    description: "Malhas premium, cortes minimalistas e toque macio.",
  },
  {
    name: "Calças",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description: "Modelagens modernas com caimento impecável.",
  },
  {
    name: "Conjuntos",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    description: "Looks completos com harmonias perfeitas.",
  },
  {
    name: "Camisas",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
    description: "Alfaiataria contemporânea para elevar o visual.",
  },
  {
    name: "Acessórios",
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80",
    description: "Detalhes em couro e metais sofisticados.",
  },
];

const featuredCollections = [
  {
    id: "feminino",
    title: "Coleção Feminina",
    description: "Texturas leves e cortes precisos pensados para a rotina premium.",
    products: [
      {
        name: "Vestido Elegance",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
        oldPrice: "4.990 MT",
        price: "3.490 MT",
        rating: 5,
        description: "Crepe importado, cintura marcada e fluidez impecável.",
      },
      {
        name: "Conjunto Casual",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        oldPrice: "5.490 MT",
        price: "3.990 MT",
        rating: 4.5,
        description: "Blazer leve + calça reta com toque de linho natural.",
      },
    ],
  },
  {
    id: "masculino",
    title: "Coleção Masculina",
    description: "Peças urbanas com alfaiataria e conforto absoluto.",
    products: [
      {
        name: "Camisa Urban Premium",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
        oldPrice: "2.990 MT",
        price: "2.290 MT",
        rating: 4,
        description: "Algodão egípcio, gola estruturada e acabamento interno.",
      },
      {
        name: "Calça Premium",
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
        oldPrice: "3.990 MT",
        price: "2.990 MT",
        rating: 4.5,
        description: "Sarja italiana com elasticidade inteligente.",
      },
    ],
  },
];

const benefits = [
  "Produtos selecionados",
  "Compra segura",
  "Atendimento rápido",
  "Entrega disponível",
  "Qualidade garantida",
];

const testimonials = [
  {
    name: "Laura Mendes",
    comment: "Recebi meu vestido em dois dias e a qualidade é idêntica às fotos. Atendimento impecável!",
    rating: 5,
  },
  {
    name: "Ricardo Afonso",
    comment: "As camisas têm caimento perfeito, dá para sentir o cuidado desde a embalagem até os detalhes.",
    rating: 4.5,
  },
  {
    name: "Camila Duarte",
    comment: "Finalmente encontrei uma loja premium com experiência mobile fluida e peças realmente autorais.",
    rating: 5,
  },
];

const contactInfo = [
  { label: "Email", value: "contato@lumieremoda.com" },
  { label: "Telefone", value: "+55 (11) 4002-8922" },
  { label: "Endereço", value: "Av. Paulista, 1500 - São Paulo/SP" },
];

const socialLinks = ["Instagram", "Pinterest", "Facebook", "YouTube"];

export default function Home() {
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [highlightedCategory, setHighlightedCategory] = useState<string>(categories[0].name);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (productName: string) => {
    setCartItems((prev) => [...prev, productName]);
  };

  const handleBuyNow = (productName: string) => {
    setSelectedProduct(productName);
  };

  const handleViewProducts = (categoryName: string) => {
    setHighlightedCategory(categoryName);
    scrollToSection("feminino");
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Lumière Moda | Loja premium de roupas</title>
        <meta name="description" content="Página de vendas moderna e elegante para moda feminina e masculina." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>Lumière</span>
          <small>Moda</small>
        </div>
        <nav className={styles.navMenu}>
          <a href="#inicio">Início</a>
          <a href="#novidades">Novidades</a>
          <a href="#feminino">Feminino</a>
          <a href="#masculino">Masculino</a>
          <a href="#promocoes">Promoções</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className={styles.headerActions}>
          <button type="button" className={styles.iconButton} aria-label="Pesquisar">
            🔍
          </button>
          <button type="button" className={styles.iconButton} aria-label="Carrinho" onClick={() => scrollToSection("contacto")}>
            🛒
            <span className={styles.cartCount}>{cartItems.length}</span>
          </button>
          <button type="button" className={styles.headerCta} onClick={() => scrollToSection("feminino")}>
            Comprar Agora
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <section id="inicio" className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>Coleção premium • FW 24</p>
            <h1>Vista o seu estilo. Sinta a diferença.</h1>
            <p className={styles.heroSubtitle}>
              Descubra peças modernas, confortáveis e selecionadas para deixar o seu visual ainda mais incrível.
            </p>
            <div className={styles.heroButtons}>
              <button type="button" className={styles.primaryButton} onClick={() => scrollToSection("novidades")}> 
                Ver Coleção
              </button>
              <button type="button" className={styles.secondaryButton} onClick={() => scrollToSection("promocoes")}>
                Comprar Agora
              </button>
            </div>
            <div className={styles.heroHighlights}>
              <span>Envio em até 24h</span>
              <span>Parcelamento sem juros</span>
              <span>Qualidade garantida</span>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="https://images.unsplash.com/photo-1495121605193-b116b5b09c73?auto=format&fit=crop&w=1100&q=80" alt="Modelo usando roupas premium" />
            <div className={styles.heroBadge}>
              <strong>Nova linha cápsula</strong>
              <p>Texturas em linho e couro vegetal</p>
            </div>
          </div>
        </section>

        <section className={styles.cartPreview}>
          <div>
            <h4>Carrinho ({cartItems.length})</h4>
            {cartItems.length ? (
              <ul className={styles.cartList}>
                {cartItems.slice(-3).map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Seu carrinho está vazio. Adicione seus favoritos.</p>
            )}
          </div>
          {selectedProduct && (
            <div className={styles.checkoutPlaceholder}>
              <span>Preparando checkout para:</span>
              <strong>{selectedProduct}</strong>
              <small>Integração futura com checkout seguro.</small>
            </div>
          )}
        </section>

        <section id="novidades" className={styles.categoriesSection}>
          <div className={styles.sectionHeader}>
            <p>Encontre o seu estilo</p>
            <h2>Categorias com curadoria exclusiva</h2>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <article
                key={category.name}
                className={`${styles.categoryCard} ${highlightedCategory === category.name ? styles.categoryActive : ""}`}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className={styles.categoryContent}>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <button type="button" onClick={() => handleViewProducts(category.name)}>
                    Ver produtos
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.categoryNote}>Destaque atual: {highlightedCategory}</p>
        </section>

        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <p>Produtos em destaque</p>
            <h2>Mais vendidos</h2>
          </div>
          <div className={styles.featuredGroups}>
            {featuredCollections.map((collection) => (
              <div key={collection.id} id={collection.id} className={styles.featuredGroup}>
                <div className={styles.groupHeader}>
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                </div>
                <div className={styles.productGrid}>
                  {collection.products.map((product) => (
                    <article
                      key={product.name}
                      className={styles.productCard}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleBuyNow(product.name)}
                    >
                      <img src={product.image} alt={product.name} />
                      <div className={styles.productInfo}>
                        <div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                        <div className={styles.priceRow}>
                          <span className={styles.oldPrice}>{product.oldPrice}</span>
                          <strong className={styles.currentPrice}>{product.price}</strong>
                        </div>
                        <div className={styles.rating}>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <span key={`${product.name}-star-${index}`}>{index < Math.round(product.rating) ? "★" : "☆"}</span>
                          ))}
                        </div>
                        <div className={styles.productButtons}>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleAddToCart(product.name);
                            }}
                          >
                            Adicionar ao carrinho
                          </button>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              handleBuyNow(product.name);
                            }}
                          >
                            Comprar agora
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="promocoes" className={styles.promotionalBlock}>
          <div>
            <p>Nova coleção disponível</p>
            <h2>Peças escolhidas para quem gosta de estilo, conforto e personalidade.</h2>
          </div>
          <button type="button" onClick={() => scrollToSection("masculino")}>
            Explorar coleção
          </button>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <p>Benefícios da loja</p>
            <h2>Experiência premium do clique à entrega</h2>
          </div>
          <div className={styles.benefitGrid}>
            {benefits.map((benefit) => (
              <div key={benefit} className={styles.benefitCard}>
                <span>✓</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.testimonialsSection}>
          <div className={styles.sectionHeader}>
            <p>O que nossos clientes dizem</p>
            <h2>Feedback real de quem já comprou</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${testimonial.name}-rate-${index}`}>
                      {index < Math.round(testimonial.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p>{testimonial.comment}</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaFinal}>
          <div>
            <p>Seu próximo look está aqui.</p>
            <h2>Escolha as suas peças favoritas e renove o seu estilo hoje.</h2>
          </div>
          <button type="button" onClick={() => scrollToSection("feminino")}>Comprar Agora</button>
        </section>

        <section id="contacto" className={styles.contactSection}>
          <div className={styles.sectionHeader}>
            <p>Fale conosco</p>
            <h2>Canais de contacto e redes sociais</h2>
          </div>
          <div className={styles.contactGrid}>
            {contactInfo.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <button key={link} type="button">
                {link}
              </button>
            ))}
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="#inicio">Sobre nós</a>
          <a href="#contacto">Contactos</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Termos e condições</a>
          <a href="#">Política de trocas e devoluções</a>
        </div>
        <p>© {new Date().getFullYear()} Lumière Moda. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
