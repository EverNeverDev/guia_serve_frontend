import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Styles
import "./globals.css";
// Components
import { Providers } from "./common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Guia serve",
  description:
    "A Guia Serve é a maior plataforma de conexão de serviços do Brasil.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
