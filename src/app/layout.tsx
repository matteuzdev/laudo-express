import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inspectify | Relatorios de Elite',
  description: 'Gerador de relatorios imobiliarios offline-first.',
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
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}