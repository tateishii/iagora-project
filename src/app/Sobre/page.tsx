"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sobre() {
    return (
        <main>
            <Header />

            <section className ="top-section">
                <div className="overlay">
                    <div className="content">
                        <h1 className="title">Sobre nós</h1>
                        <p className="description">
                            Texto sobre a empresa
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="about-content">
                    <div className="left-side">
                        <h2 className="bottom-title"> Quem Somos</h2>
                        <p className="bottom-text">
                            Texto do que somos
                        </p>
                    </div>
                    <div className="right-sie">
                        <h2 className="bottom-title">Nossos Valores</h2>
                        <ul className="topics">
                            <li>exemplo 1</li>
                            <li>exemplo 2</li>
                            <li>wxwmplo 3</li>
                            <li>exemplo 4</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                main {
                    scroll-behavior: smooth;
                }

                .top-section {
                    position: relative;
                    height: 50vh;
                    background: none;
                }

                .overlay {
                    background-imgagge: url("/sobre.png");
                    bbackground-size: cover;
                    background-position: center;
                    width: 100%;
                    height: 100%;
                    padding: 0 80px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    position: relative;
                }

                .overlay::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    backgroudn-color: rgba(62, 52, 52, 0.6);
                    z-index: 0;
                }

                .title {
                    font-size: 32px;
                    font-weight: bold;
                    color: #0074bb;
                    margin-bottom: 20px;
                }

                .description {
                    font-size: 24px;
                    coolor: #FFFFFF;
                }

                .about-content {
                    displat: flex;
                    justify-content: space-between;
                    width: 100%;
                    margin: 0 auto;
                    gap: 40px;
                    flex-wrap: wrap;
                }

                .left-side
                .righ-side {
                    flex: 1;
                    min-width: 280px;
                }

                .bottom-title {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bbottom: 20px;
                    color: #0074bb;
                }

                .bottom-text {
                    font-size: 24px;
                    color: #000000;
                }

                .topics {
                    list-sstyle: none;
                    padding: 0;
                    margin: 0;
                }

                .topics li {
                    font-size: 22px;
                    margin-bottom: 12px;
                    position: relative;
                    padding-left: 24px;
                    color: #000000;
                }

                .topics li::before {
                    content: "";
                    width: 8px;
                    height: 8px;
                    background-color: #000000;
                    boorder-raadius; 50%;
                    postion: absolute;
                    left: 0;
                    top: 9px;
                }
            `}</style>
        </main>
    );
}