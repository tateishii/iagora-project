"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import styles from "./produtos.module.css";
import Link from "next/link";

export default function Produtos() {
  const cards = [
    {
      imgSrc: "/landing.png",
      title: "Landing Pages Personalizados",
      description:
        "Criamos landing pages totalmente personalizadas para impulsionar as vendas e maximizar a conversão. Desenvolvemos páginas com design responsivo, foco na experiência do usuário e integração com sistemas de estoque, catálogo de produtos e painel administrativo. Ideal para empresas que desejam divulgar seus produtos ou serviços com eficiência, atrair leads qualificados e automatizar processos.",
      href: "/Landing",
    },
    {
      imgSrc: "/erp.png",
      title: "Integração com ERP",
      description:
        "Desenvolvemos sistemas ERP completos, capazes de integrar todas as áreas da empresa, como financeiro, estoque, vendas e logística. Automatizamos processos para reduzir erros, aumentar a produtividade e garantir uma gestão mais estratégica e eficiente.Nossas soluções incluem integração com meios de pagamento, emissão de notas fiscais e logística automatizada, proporcionando mais controle e segurança para o seu negócio.",
      href: "/Erp",
    },
    {
      imgSrc: "/pcp.png",
      title: "Soluções",
      description:
        "Criamos sistemas de Planejamento e Controle da Produção (PCP) sob medida, ideais para empresas que precisam otimizar a gestão da produção e alcançar maior eficiência operacional. Nossas soluções incluem módulos de BI com dashboards interativos, relatórios detalhados, gráficos e acompanhamento em tempo real dos principais indicadores (KPIs). Tudo isso para apoiar uma tomada de decisão rápida e baseada em dados concretos.",
      href: "/Pcp",
    },
  ];

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.topSection}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <motion.h1
              style={{ color: "#0074bb", fontSize: 32, fontWeight: "bold", marginBottom: 20 }}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
            >
              Conheça Nossos Produtos
            </motion.h1>
            <motion.p
              style={{ color: "#fff", fontSize: 24 }}
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.6 }}
            >
              Imagine ter em suas mãos ferramentas que não apenas otimizam, mas
              catalisam o crescimento, que não só respondem às demandas, mas
              antecipam o sucesso.
            </motion.p>
          </div>
        </div>
      </section>

      <div className={styles.cardsContainer}>
        {cards.map(({ imgSrc, title, description, href }, idx) => (
          <Link href={href} key={idx} className={styles.cardLink}>
            <div
              key={idx}
              className={styles.card}
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <div className={styles.cardOverlay}>
                <div className={styles.overlayContent}>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </main>
  );
}
