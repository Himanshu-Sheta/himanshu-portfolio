import type { Metadata } from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Himanshu Sheta | Software & Data Engineer',
  description:
    'Portfolio of Himanshu Sheta, an advanced software engineer and data engineer.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}