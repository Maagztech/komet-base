import { Inter } from "next/font/google";
import './globals.css'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import Web3ModalProvider from '@/context'
import { DataContextProvider } from "@/context/dataContext";
import { UserContextProvider } from "@/context/userContext"
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Komet Base',
  description: 'Partner side app by komet.'
}

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <GoogleOAuthProvider clientId="277296107198-d50chhens1hleigr5kdi9evbpv99oacg.apps.googleusercontent.com">
      <UserContextProvider>
        <Web3ModalProvider initialState={initialState}>
          <DataContextProvider>
            <html lang="en">
              <body>
                {children}
              </body>
            </html>
          </DataContextProvider>
        </Web3ModalProvider>
      </UserContextProvider>
    </GoogleOAuthProvider >
  )
}