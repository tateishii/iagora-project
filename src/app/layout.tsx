import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Landing Page",
  description: "Página institucional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
