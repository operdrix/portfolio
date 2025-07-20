import Link from 'next/link'

export default function Navigation() {
  return (
    <header className="w-full h-[113px] relative">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/e8519795ae675acbc0648bf150ea0d245a2ed9d1?width=3960"
        alt="Header background"
        className="w-full h-[113px] absolute left-0 top-0 shadow-[0px_6px_22px_-3px_rgba(0,0,0,0.10)]"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4e40075cf12ece3c082ca108c0fd2b6d4961d1c9?width=70"
        alt="Logo"
        className="w-[35px] h-[39px] absolute left-[497px] top-[37px]"
      />
      <nav className="flex gap-[58px] absolute left-[1111px] top-[43px]">
        <Link
          href="/"
          className="flex w-[66px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="flex w-[68px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="flex w-[49px] h-[27px] flex-col justify-center text-white text-center font-plus-jakarta-sans text-[20px] font-bold leading-normal tracking-[0.4px]"
        >
          Lab
        </Link>
      </nav>
    </header>
  )
}
