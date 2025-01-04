'use client'
import Image from "next/image"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useRouter } from 'next/navigation';

export default function BentoGridPage() {

  const router = useRouter();
  return (
    <>
      <div className="mx-auto p-8 w-screen h-screen overflow-hidden">
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

          <div className="row-span-4 col-span-6 rounded-3xl px-16 py-10 flex flex-col justify-between group hover:cursor-pointer bg-[#ff5f4e]" onClick={() => {
            router.push('/aboutMe')
          }} >
            <h1 className="text-8xl font-bold mb-8">About me</h1>
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

          <div className="row-span-4 col-span-6 rounded-3xl px-16 py-10 flex flex-col justify-between group hover:cursor-pointer bg-[#ffc934]" onClick={() => {
            router.push('/myWorks')
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
