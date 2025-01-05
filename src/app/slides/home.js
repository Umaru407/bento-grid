'use client'
import Image from "next/image"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';
import { usePageNavigation } from "../contexts/PageContext";

export default function Home() {
  const { goToPage } = usePageNavigation();
  const router = useRouter();
  return (
    <>
      <div className="mx-auto px-16 py-12 w-screen h-screen overflow-hidden">
        <div className="grid grid-rows-7 grid-cols-12 gap-8 w-full h-full">
          <div className="row-span-3 col-span-9  rounded-3xl px-16 py-10 bg-[#47a2df]">
            <h1 className="text-8xl font-bold mb-8">視覺語言設計</h1>
            <h2 className="text-6xl font-bold">BentoGrid</h2>
          </div>
          <div className="row-span-3 col-span-3 defaultItemBackgrond rounded-3xl px-16 py-10 grid grid-cols-2 grid-rows-2 gap-4"  >
            <div className="w-full h-full">
              <Image src={'/chocolate.svg'} width={32} height={32} alt="foods" className="object-contain w-full h-full" />
            </div>
            <div className="w-full h-full">
              <Image src={'/chips.svg'} width={32} height={32} alt="foods" className="object-contain w-full h-full" />
            </div>
            <div className="w-full h-full">
              <Image src={'/fries.svg'} width={32} height={32} alt="foods" className="object-contain w-full h-full" />
            </div>
            <div className="w-full h-full">
              <Image src={'/cola.svg'} width={32} height={32} alt="foods" className="object-contain w-full h-full" />
            </div>
          </div>

          <div
            className="row-span-4 col-span-6 rounded-3xl px-16 py-10 flex flex-col justify-between group hover:cursor-pointer bg-[#FF7262] hover:bg-[#fc614f] transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#fc614f]/35"
            onClick={() => {
              console.log('go page1')
              goToPage(1)
            }}
          >
            <h1 className="text-8xl font-bold mb-8 text-white">About me</h1>
            <div className="flex justify-end mt-auto">
              <KeyboardArrowRightIcon
                className="border-transparent rounded-full border-3 group-hover:border-white group-hover:border-4 transition-all duration-200 ease-in-out text-white"
                style={{
                  fontSize: 50,
                  animation: 'pulse 1s infinite alternate'
                }}
              />
            </div>
          </div>

          <div className="row-span-4 col-span-6 rounded-3xl px-16 py-10 flex flex-col justify-between group hover:cursor-pointer bg-[#ffc934] hover:bg-[#ffae34] transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffae34]/35" onClick={() => {
            goToPage(2)
          }} >
            <h1 className="text-8xl font-bold mb-8">My Works</h1>
            <div className="flex justify-end mt-auto">

              <KeyboardDoubleArrowRightIcon
                className="border-transparent rounded-full border-3 group-hover:border-white group-hover:border-4 transition-all duration-200 ease-in-out"
                style={{
                  fontSize: 50,

                  animation: 'pulse 1s infinite alternate'
                }}
              />


            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }

    
`}</style>
    </>
  );
}
