import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inspectify | Relatórios de Inspeção',
  description: 'Sistema profissional de vistorias imobiliárias offline-first.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Inspectify',
  },
};

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
