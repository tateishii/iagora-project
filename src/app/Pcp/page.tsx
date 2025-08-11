"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./pcp.module.css";

export default function Pcp() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Manutenção e Suporte para o Sistema PCP <br />
              usado pela <span className={styles.highlight}>Negreira</span>
            </h1>
            <p className={styles.subtitle}>
              Garantimos que seu sistema PCP esteja sempre disponível, atualizado e adaptado às suas necessidades.
            </p>
          </div>
        </section>

        <section className={styles.presentation}>
          <h2 className={styles.sectionTitle}>Nossa Parceria com a Negreira</h2>
          <div className={styles.presentationContent}>
            <img src="/negreira.png" alt="Logo Negreira" className={styles.pcpLogo} />
            <p className={styles.presentationText}>
              Atuamos como parceiro técnico da Negreira, oferecendo serviços de manutenção, suporte e customização para o sistema PCP adquirido por eles.
              Nosso compromisso é manter sua produção fluindo com segurança e eficiência.
            </p>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
          <ul className={styles.featuresList}>
            <li><strong>Manutenção preventiva e corretiva:</strong> monitoramento constante para evitar falhas.</li>
            <li><strong>Suporte dedicado:</strong> atendimento rápido para solucionar problemas.</li>
            <li><strong>Customizações:</strong> adaptação do sistema para atender suas necessidades específicas.</li>
            <li><strong>Treinamento e capacitação:</strong> preparando sua equipe para usar o sistema com eficiência.</li>
          </ul>
        </section>

        <section className={styles.cta}>
          <h2>Quer contar com suporte especializado para seu sistema PCP?</h2>
          <a
            href="https://wa.me/5511956538444?text=Olá,%20quero%20saber%20mais%20sobre%20manutenção%20e%20suporte%20do%20PCP"
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
