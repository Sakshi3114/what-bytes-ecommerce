// src/app/layout.js (do NOT add 'use client')
import './globals.css';
import Header from '@/components/Header';
import ReduxProvider from '@/providers/ReduxProvider';
import { Toaster } from 'react-hot-toast';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Whatbytes E-commerce',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',          
  display: 'swap',
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ReduxProvider>
          <Header />
          {children}
          <Toaster position="top-right" />
        </ReduxProvider>
      </body>
    </html>
  );
}
