import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">MakenaChain</div>
          <div className="flex">
            <button type="button" className={`text-white bg-[#31c77f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${inter.className}`}>Connect Wallet</button>
          </div>
        </div>
      </nav>
      <main>
        <div>Overview</div>
        <div>Total Assets $0.00</div>
        <div>Estimated Yearly Yield $0.00</div>
      </main>
    </>
  )
}
