export const metadata = {
  title: 'Piyush Mani Chaubey | Senior Frontend Developer',
  description: 'Portfolio of Piyush Mani Chaubey, specializing in React.js, Next.js, and scalable frontend architecture.',
}

import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-violet-500/30 selection:text-violet-200`}>
        {children}
      </body>
    </html>
  )
}
