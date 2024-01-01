import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// Styles
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
// Components
import { CustomNavbar, Providers, WrapperContainer } from "./common";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={poppins.className}>
        <Providers>
          <CustomNavbar />
          <WrapperContainer>{children}</WrapperContainer>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
