import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: 'Ceșcuța cu aprecieri | %s',
    default: 'Ceșcuța cu aprecieri',
  },
  description: 'Ceșcuța cu aprecieri - alege un cadou incurajator pentru persoana la care te-ai gandit',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
