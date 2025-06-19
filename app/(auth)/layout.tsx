import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';
export const metadata = {
  title: 'ThreadSync',
  description: 'A Next.js App',
};

const fontss = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontss.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
