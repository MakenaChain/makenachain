import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const header = Inter({ subsets: ['latin'], weight: "600" })
const panelHeader = Inter({ subsets: ['latin'], weight: "700" })

export default function Home() {
  return (
    <>
      <nav className="bg-white w-full border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className={`text-[1.5rem] ${header.className}`}>MakenaChain</div>
          <div className="flex">
            <button type="button" className={`text-white bg-[#31c77f] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${inter.className}`}>Connect</button>
          </div>
        </div>
      </nav>
      <main className="max-w-screen-xl mx-auto py-[1.5rem] px-[1rem]">
        <div className="p-[2rem] border border-gray-200 rounded-md bg-white shadow-md">
          <div className={`text-[1.875rem] ${panelHeader.className}`}>Hail2Earn</div>
          <div className="text-[1rem] text-gray-500">An innovative way of staking</div>
          <div className="flex pt-[1rem]">
            <div className="py-[1.5rem] px-[1.875rem] border border-gray-200 rounded-md shadow-sm mr-[1rem]">
              <div className={`${panelHeader.className} text-[1.5rem]`}>100 MAKENA</div>
              <div className="text-[1rem] text-gray-500">Total Value Locked</div>
            </div>
            <div className="py-[1.5rem] px-[1.875rem] border border-gray-200 rounded-md shadow-sm">
              <div className={`${panelHeader.className} text-[1.5rem]`}>APY 10.3%</div>
              <div className="text-[1rem] text-gray-500">Rewards</div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
