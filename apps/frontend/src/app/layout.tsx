import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Seu evento começa aqui",
  description: "Facilitamos o seu trabalho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
