export default async function Verify() {
  return (
    <>
      <section className="border-b px-4 pb-12 pt-16 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] sm:px-6 lg:px-8 lg:py-24">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="container flex max-w-[64rem] flex-col items-center gap-10 text-center sm:gap-6">
          <h1
            className="max-w-[52rem] animate-fade-up text-balance font-heading text-4xl font-bold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            Verify A Mysign Signature
          </h1>
          <p
            className="max-w-[42rem] animate-fade-up text-balance pb-6 leading-normal text-muted-foreground opacity-0 sm:pb-2 sm:text-xl sm:leading-8"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            A new era of digital signatures - secure, verified, and uniquely yours. Sign anywhere
            with your <span className="font-bold">&quot;real&quot;</span> signature, powered by ML,
            NFT and Aleph Zero.
          </p>
        </div>
      </section>
    </>
  )
}
