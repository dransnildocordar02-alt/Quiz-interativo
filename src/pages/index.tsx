import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

const featuredProducts = [
  {
    name: "Vestido Stella Crepe",
    price: "R$ 489",
    details: "Midi fluido com decote suave e cintura marcada para valorizar a silhueta.",
    badge: "Favorito da semana",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Conjunto Maris Pólen",
    price: "R$ 649",
    details: "Top estruturado e saia envelope em linho com toque acetinado.",
    badge: "Edição limitada",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Macacão Lune Preto",
    price: "R$ 559",
    details: "Decote reto, alças finas e caimento impecável para noites especiais.",
    badge: "Nova chegada",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
];

const heroHighlight = featuredProducts[0]!;

const categories = [
  {
    title: "Vestidos de Festa",
    description: "Brilhos sutis, rendas francesas e caimentos perfeitos.",
    theme: "dressCategory",
  },
  {
    title: "Essenciais do Dia",
    description: "Camisas, blusas e tops leves para qualquer agenda.",
    theme: "essentialsCategory",
  },
  {
    title: "Casual Chic",
    description: "Peças confortáveis com acabamento premium.",
    theme: "casualCategory",
  },
  {
    title: "Noite & Jantar",
    description: "Looks elegantes para encontros especiais.",
    theme: "eveningCategory",
  },
];

const catalogProducts = [
  {
    name: "Vestido Aurora Rosé",
    description: "Crepe leve com recortes delicados.",
    price: "R$ 459",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    discount: "10% OFF",
  },
  {
    name: "Blusa Lise Seda",
    description: "Toque acetinado e gola laço.",
    price: "R$ 289",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Saia Sofia Midi",
    description: "Cintura alta, pregas e fluidez.",
    price: "R$ 339",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Blazer Olivia Linho",
    description: "Estrutura slim em linho italiano.",
    price: "R$ 389",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80",
    discount: "15% OFF",
  },
  {
    name: "Calça Mila Pregas",
    description: "Alfaiataria leve com barra cenoura.
",
    price: "R$ 329",
    image: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Macacão Luna Preto",
    description: "Silhueta reta com amarração traseira.",
    price: "R$ 559",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vestido Noemi Floral",
    description: "Estampa exclusiva com manga bufante.",
    price: "R$ 499",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Top Eva Nó",
    description: "Detalhe frontal e tecido acetinado.",
    price: "R$ 219",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Conjunto Lia Pérola",
    description: "Cardigã cropped e saia mini em tricô fino.",
    price: "R$ 549",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kimono Ivy Areia",
    description: "Sobreposição fluida com faixa na cintura.",
    price: "R$ 299",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  },
];

const productDetail = {
  name: "Vestido Aura Terracota",
  price: "R$ 520",
  description:
    "Modelagem envelope com fenda delicada, tecido com caimento perolado e amarração lateral ajustável.",
  sizes: ["PP", "P", "M", "G", "GG"],
  colors: ["Terracota", "Champagne", "Preto"],
  images: [
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1475180092312-5a4b2a3d81ca?auto=format&fit=crop&w=800&q=80",
  ],
};

const cartItems = [
  {
    name: "Vestido Serenity Tule",
    size: "P",
    color: "Champagne",
    price: 420,
    quantity: 1,
  },
  {
    name: "Blazer Olivia Linho",
    size: "M",
    color: "Creme",
    price: 389,
    quantity: 1,
  },
];

const formatCurrency = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function Home() {
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = 25;
  const cartTotal = cartSubtotal + deliveryFee;

  return (
    <div className={styles.container}>
      <Head>
        <title>Lumière Boutique | Mini Loja de Moda Feminina</title>
        <meta
          name="description"
          content="Mini boutique feminina com vestidos, conjuntos e peças autorais para comprar de forma rápida e elegante."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.logo}>
          Lumière
          <small>Boutique</small>
        </div>
        <nav className={styles.nav}>
          <a href="#catalogo">Catálogo</a>
          <a href="#produto">Produto</a>
          <a href="#carrinho">Carrinho</a>
          <a href="#finalizacao">Finalizar</a>
        </nav>
        <a href="#catalogo" className={styles.primaryButton}>
          Comprar
        </a>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>Boutique cápsula • 2024</p>
            <h1>Mini loja de peças femininas com curadoria impecável</h1>
            <p className={styles.heroSubtitle}>
              Seleção enxuta de vestidos, blusas e conjuntos premium pensados para mães, empreendedoras e mulheres que
              buscam beleza sem excesso.
            </p>
            <div className={styles.heroActions}>
              <a href="#catalogo" className={styles.primaryButton}>
                Ver catálogo
              </a>
              <a href="#produto" className={styles.secondaryButton}>
                Produto em destaque
              </a>
            </div>
            <ul className={styles.heroHighlights}>
              <li>Envio rápido para todo o Brasil</li>
              <li>Pagamentos seguros</li>
              <li>Atendimento pelo WhatsApp</li>
            </ul>
          </div>
          <div className={styles.heroMedia}>
            <div className={styles.heroMediaText}>
              <span>Coleção Petite Lumière</span>
              <strong>Peças limitadas e acabamentos autorais</strong>
            </div>
            <div className={styles.heroMediaCard} style={{ backgroundImage: `url(${heroHighlight.image})` }}>
              <div className={styles.heroMediaOverlay}>
                <p>{heroHighlight.badge}</p>
                <strong>{heroHighlight.name}</strong>
                <span className={styles.heroMediaPrice}>{heroHighlight.price}</span>
                <a href="#catalogo" className={styles.heroMediaButton}>
                  Comprar agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.intro}>
          <h2>Uma boutique pequena, charmosa e autoral</h2>
          <p>
            Trabalhamos com lotes reduzidos para garantir exclusividade e cuidado em cada detalhe: tecidos leves, tons
            femininos e modelagens pensadas para realçar a autoestima.
          </p>
        </section>

        <section className={styles.featured}>
          <div className={styles.sectionHeader}>
            <h2>Produtos em destaque</h2>
            <p>Escolhemos três peças imperdíveis para você se apaixonar agora.</p>
          </div>
          <div className={styles.featuredGrid}>
            {featuredProducts.map((product) => (
              <article key={product.name} className={styles.featuredCard}>
                <span className={styles.featuredBadge}>{product.badge}</span>
                <div className={styles.productImage} style={{ backgroundImage: `url(${product.image})` }}></div>
                <h3>{product.name}</h3>
                <p>{product.details}</p>
                <div className={styles.featuredMeta}>
                  <span>{product.price}</span>
                  <a href="#catalogo" className={styles.secondaryButton}>
                    Comprar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.categories}>
          <div className={styles.sectionHeader}>
            <h2>Categorias principais</h2>
            <p>Descubra o que combina com o seu momento.</p>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <div key={category.title} className={`${styles.categoryCard} ${styles[category.theme]}`}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a href="#catalogo">Ver peças</a>
              </div>
            ))}
          </div>
        </section>

        <section id="catalogo" className={styles.catalog}>
          <div className={styles.sectionHeader}>
            <h2>Catálogo de produtos</h2>
            <p>8 a 12 peças selecionadas para você montar o look completo.</p>
          </div>
          <div className={styles.catalogGrid}>
            {catalogProducts.map((product) => (
              <article key={product.name} className={styles.catalogCard}>
                <div className={styles.catalogImage} style={{ backgroundImage: `url(${product.image})` }}>
                  {product.discount && <span className={styles.discountTag}>{product.discount}</span>}
                </div>
                <div className={styles.catalogInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className={styles.catalogPrice}>
                    <strong>{product.price}</strong>
                    <button className={styles.catalogButton}>Comprar</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="produto" className={styles.productFocus}>
          <div className={styles.productGallery}>
            {productDetail.images.map((image) => (
              <div key={image} className={styles.galleryImage} style={{ backgroundImage: `url(${image})` }}></div>
            ))}
          </div>
          <div className={styles.productInfo}>
            <p className={styles.productTag}>Produto em destaque</p>
            <h2>{productDetail.name}</h2>
            <p className={styles.productDescription}>{productDetail.description}</p>
            <strong className={styles.productPrice}>{productDetail.price}</strong>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Tamanhos</span>
              <div className={styles.optionPills}>
                {productDetail.sizes.map((size) => (
                  <span key={size} className={styles.pill}>
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.optionGroup}>
              <span className={styles.optionLabel}>Cores</span>
              <div className={styles.optionPills}>
                {productDetail.colors.map((color) => (
                  <span key={color} className={styles.pill}>
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <a href="#finalizacao" className={styles.primaryButton}>
              Comprar agora
            </a>
          </div>
        </section>

        <section id="carrinho" className={styles.cart}>
          <div className={styles.sectionHeader}>
            <h2>Carrinho</h2>
            <p>Revise suas escolhas antes de finalizar.</p>
          </div>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={`${item.name}-${item.size}`} className={styles.cartItem}>
                <div className={styles.cartItemDetails}>
                  <h4>{item.name}</h4>
                  <p className={styles.cartMeta}>
                    {item.size} • {item.color}
                  </p>
                </div>
                <span>
                  {formatCurrency(item.price)} x {item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.cartTotals}>
            <p>
              <span>Subtotal</span>
              <strong>{formatCurrency(cartSubtotal)}</strong>
            </p>
            <p>
              <span>Entrega expressa</span>
              <strong>{formatCurrency(deliveryFee)}</strong>
            </p>
            <p className={styles.cartTotalRow}>
              <span>Total</span>
              <strong>{formatCurrency(cartTotal)}</strong>
            </p>
            <a href="#finalizacao" className={styles.primaryButton}>
              Finalizar pedido
            </a>
          </div>
        </section>

        <section id="finalizacao" className={styles.checkout}>
          <div className={styles.sectionHeader}>
            <h2>Finalização do pedido</h2>
            <p>Preencha os dados para receber o link rápido pelo WhatsApp.</p>
          </div>
          <form className={styles.checkoutForm}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="nome">Nome completo</label>
                <input type="text" id="nome" placeholder="Ex: Ana Costa" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="whatsapp">WhatsApp</label>
                <input type="tel" id="whatsapp" placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label htmlFor="endereco">Endereço de entrega</label>
                <input type="text" id="endereco" placeholder="Rua, número, complemento" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="produto">Produto escolhido</label>
                <input type="text" id="produto" placeholder="Ex: Vestido Aura Terracota" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="tamanho">Tamanho</label>
                <input type="text" id="tamanho" placeholder="PP / P / M / G / GG" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="cor">Cor</label>
                <input type="text" id="cor" placeholder="Informe a cor desejada" />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label htmlFor="observacoes">Observações</label>
                <textarea id="observacoes" rows={3} placeholder="Preferências adicionais, horário para entrega..."></textarea>
              </div>
            </div>
            <button type="submit" className={styles.primaryButton}>
              Finalizar agora
            </button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Lumière Boutique.</p>
        <p>Boutique feminina, atendimento humano e peças em curadoria especial.</p>
      </footer>
    </div>
  );
}
