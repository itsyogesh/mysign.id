import { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Analytics } from '@vercel/analytics/react'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { ToastConfig } from '@/app/toast-config'
import { TooltipProvider } from '@/components/ui/tooltip'
import { env } from '@/config/environment'
import { cn } from '@/lib/utils'

import './globals.css'
import { ClientProviders, ThemeProvider } from './providers'

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

const fontHeading = DM_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'ink!athon Boilerplate',
  description: 'Full-Stack DApp Boilerplate for ink! Smart Contracts',
  metadataBase: new URL(env.url),
  robots: env.isProduction ? 'all' : 'noindex,nofollow',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: env.url,
    siteName: 'ink!athon Boilerplate',
    images: [
      {
        url: '/images/inkathon-og-banner.jpg',
        width: 1280,
        height: 640,
      },
    ],
  },
  twitter: {
    site: '@scio_xyz',
    creator: '@scio_xyz',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable,
          fontHeading.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientProviders>
            <TooltipProvider>{children}</TooltipProvider>
            <ToastConfig />
          </ClientProviders>

          {!!env.isProduction && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
