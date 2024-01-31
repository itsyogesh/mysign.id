'use client'

import Link from 'next/link'

import { Icons } from '@/components/shared/icons'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Button, buttonVariants } from '@/components/ui/button'
import { CryptoCard } from '@/components/ui/crypto-card'
import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'

import { CompareSlider } from '../components/compare-slider'

export default function IndexPage() {
  return (
    <>
      <section className="pt-16 lg:pt-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-12 text-center md:gap-6">
          <Link
            href="https://twitter.com/miickasmt/status/1719892161095745801"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'animate-fade-up opacity-0',
            )}
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
            target="_blank"
          >
            Introducing on <Icons.twitter className="ml-2 size-3" />
          </Link>

          <h1
            className="animate-fade-up text-balance font-heading text-4xl font-bold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Its time to change the way <span className="font-extrabold opacity-90">you sign</span>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up text-balance leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            A new era of digital signatures – secure, verifed, and uniquely yours. Sign anywhere
            with your <span className="font-bold">&quot;real&quot;</span> signature, powered by ML,
            NFT and ZK-Proofs.
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-4 opacity-0 md:space-x-4 md:py-2"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <BackgroundGradient className="rounded-[22px] bg-white p-2 sm:p-2">
              <CompareSlider className="group/card max-w-[44rem] rounded-md border border-zinc-500 border-opacity-10" />
            </BackgroundGradient>
          </div>
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <Button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="font-heading text-base font-semibold">Mint Your Signature Now</span>{' '}
              <Icons.arrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
