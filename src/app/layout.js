import { Inter } from 'next/font/google'
import Head from "next/head";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatRise - Your Interactive Client-Side Chat Web App',
  description: 'Engage in real-time conversations with ChatRise, the client-side chat web app. Enjoy seamless communication, privacy, and an interactive user experience. No server needed!',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="shortcut icon" href={metadata.icons.icon} type="image/x-icon" />
        </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
