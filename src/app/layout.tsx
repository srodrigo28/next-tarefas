import { Header } from "@/components/header";
import type { Metadata } from "next";
// import styles from "../styles/globals.module.css";
// import Image from "next/image";


export const metadata: Metadata = {
  title: "App Controle de Tarefas",
  description: "Gerenciador de tarefas com NextJS",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
