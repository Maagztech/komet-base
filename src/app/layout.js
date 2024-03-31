import { Inter } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@/context/Web3Modal";
import { cookieToInitialState } from 'wagmi'
import { headers } from 'next/headers'

import { config } from '@/blockchain/config'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">

      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
