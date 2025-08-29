"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./erp.module.css";

export default function Erp() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>
                            <br />
                            Soluções ERP Personalizadas da <span className={styles.highlight}>IAgora</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Gestão integrada, processos otimizados e decisões inteligentes para o seu negócio.
                        </p>
                    </div>
                </section>


                <section className={styles.presentation}>
                    <h2 className={styles.sectionTitle}>O Projeto</h2>
                    <div className={styles.presentationContent}>
                        <img src="/dsafari.png" alt="Logo ERP" className={styles.erpLogo}></img>
                        <p className={styles.presentationText}>
                            Sua empresa precisa de um sistema que funcione para você, e não o contrário.
                            É por isso que desenvolvemos sistemas ERP personalizáveis que otimizam o controle de estoque,
                            faturamento e gestão de pedidos. Nossas soluções garantem maior eficiência e permitem um controle total e 
                            em tempo real. Também somos especializados em Salesforce, oferecendo expertise para potencializar a gestão de 
                            seus clientes e vendas.


                        </p>
                    </div>
                </section>


                <section className={styles.features}>
                    <h2 className={styles.sectionTitle}>Diferenciais Técnicos</h2>
                    <ul className={styles.featuresList}>
                        <li>
                            <strong>Integração Completa:</strong> Conectamos o ERP aos sistemas existentes para sincronização automática.
                        </li>
                        <li>
                            <strong>Automação:</strong> Processos manuais foram automatizados, reduzindo erros e aumentando a produtividade.
                        </li>
                        <li>
                            <strong>Relatórios em Tempo Real:</strong> Visualize métricas atualizadas para tomadas de decisão rápidas.
                        </li>
                        <li>
                            <strong>Interface Intuitiva:</strong> Design responsivo e fácil de usar para todos os níveis de usuário.
                        </li>
                    </ul>
                </section>



                <section className={styles.testimonial}>
                    <blockquote>
                        "O ERP desenvolvido pela equipe da IAgora transformou nossa gestão e nos trouxe
                        resultados concretos em produtividade e controle."
                    </blockquote>
                    <cite> Valquíria, CEO da Distribuidora Safari</cite>
                </section>


                <section className={styles.cta}>
                    <h2>Quer transformar sua gestão com um ERP sob  medida?</h2>
                    <a
                        href="https://wa.me/5511956538444?text=Olá%2C%20quero%20solicitar%20uma%20demonstração"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Solicitar uma demonstração
                    </a>
                </section>
            </main>

            <Footer />
        </>
    );
}