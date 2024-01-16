import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";
import NavbarComponent from '@/components/NavbarComponent';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      
      <body className={inter.className}>
        <Providers>
        <NavbarComponent/>
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  )
}
