import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sarılar Boya ve İnşaat',
  description: 'Sarılar Boya ve İnşaat - Yapı malzemeleri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
