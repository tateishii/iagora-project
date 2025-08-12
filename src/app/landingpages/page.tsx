"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./landing.module.css";

export default function LandoingPageProduto() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>
                            Landing Pagess Profissionais <br />
                            feitas pelo time  <span className={styles.highlight}>IAgora Tecnologia</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Criamos páginas otimizadas para transformar visitantes em clientes e fortalecer sua marca.
                        </p>
                    </div>
                </section>

                <section className={styles.presentation}>
                    <h2 className={styles.sectionTitle}>Nosso Projeto</h2>
                    <div className={styles.presentationContent}>
                        <img
                        src="/logo.png"
                        alt="Landing Page IAgora Tecnologia"
                        className={styles.erpLogo}
                        />
                        <p className={styles.presentationText}>
                            Desenvolvemos landing pages modernas, responsivas e personalizadas para destacar
                            seus produtos e serviços, garantindo maior conversão e presença digital.
                        </p>
                    </div>
                </section>

                <section className={styles.features}>
                    <h2 className={styles.sectionTitle}>Por que escolher a IAgora?</h2>
                    <ul className={styles.featuresList}>
                        <li><strong>Design Responsivo:</strong> perfeito em qualquer dispositivo.</li>
                        <li><strong>Foco em Conversão:</strong> técnicas para aumentar suas vendas.</li>
                        <li><strong>SEO Integrado:</strong> para você ser encontrado no Google.</li>
                        <li><strong>Suporte e Atualizações:</strong> acompanhamos seu crescimento.</li>
                    </ul>
                </section>

                <section className={styles.cta}>
                    <h2>Quer uma landing page que gere resultados reais?</h2>
                    <a
                        href="https://wa.me/5511956538444?text=Olá,%20quero%20saber%20mais%20sobre%20landing%20pages%20da%20IAgora%20Tecnologia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Solicitar  uma demonstração
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}