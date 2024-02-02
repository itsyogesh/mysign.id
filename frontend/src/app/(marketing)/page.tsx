'use client'

import Link from 'next/link'

import { Icons } from '@/components/shared/icons'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn, nFormatter } from '@/lib/utils'

import { CompareSlider } from '../components/compare-slider'

export default function IndexPage() {
  return (
    <>
      <section className="pt-16 lg:py-24">
        <div className="container flex max-w-[64rem] flex-col items-center gap-10 text-center sm:gap-6">
          <Link
            href="https://twitter.com/itsyogesh18"
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
            className="max-w-[42rem] animate-fade-up text-balance pb-0 leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8 md:pb-6"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            A new era of digital signatures - secure, verified, and uniquely yours. Sign anywhere
            with your <span className="font-bold">&quot;real&quot;</span> signature, powered by ML,
            NFT and Aleph Zero.
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-4 py-1 opacity-0 md:space-x-4"
            style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
          >
            <BackgroundGradient className="rounded-[22px] bg-white p-1.5 sm:p-1.5">
              <CompareSlider className="group/card max-w-3xl rounded-md border border-zinc-500 border-opacity-10" />
            </BackgroundGradient>
          </div>
          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
          >
            <Button className="inline-flex h-14 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="font-heading text-base font-semibold">Mint Your Signature Now</span>{' '}
              <Icons.arrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
