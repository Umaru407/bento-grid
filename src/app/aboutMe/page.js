'use client'
import Image from "next/image"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useRouter } from 'next/navigation';
import myLocate from "./myLocate.json";
import adventurer from "./adventurer.json";
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePageNavigation } from '../contexts/PageContext';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false }); // Dynamic import with ssr: false


export default function AboutMe() {
  const { goToPage } = usePageNavigation();
  const router = useRouter();
  const lottieRef = useRef(null);
  const handleMouseEnter = () => {
    lottieRef.current.play(); // 當滑鼠進入時播放動畫
  };

  const handleMouseLeave = () => {
    lottieRef.current.stop(); // 當滑鼠離開時停止動畫
  };


  return (
    <>
      <div className="mx-auto p-8 w-screen h-screen overflow-hidden">
        <div className="grid grid-rows-7 grid-cols-12 gap-8 w-full h-full">
          <div className="row-span-2 col-span-3 rounded-3xl px-10 py-6 flex flex-col justify-end group hover:cursor-pointer bg-[#47a2df]" onClick={() => {
            goToPage(0)
          }} >

            <div className="flex flex-col mt-auto">
              <h1 className="text text-4xl font-bold mt-auto mb-3">Home</h1>
              <KeyboardDoubleArrowLeftIcon
                className="border-transparent rounded-full border-2 group-hover:border-white group-hover:border-2 transition-all duration-200 ease-in-out"
                style={{
                  fontSize: 40,
                  animation: 'pulse 1s infinite alternate'
                }}
              />
            </div>
          </div>
          <div className="row-span-2 col-span-6 defaultItemBackgrond rounded-3xl px-10 py-6 flex flex-col justify-end "  >
            <h1 className="text text-4xl font-bold mb-4">Contact Me</h1>
            <div className="flex flex-row gap-6">
              <Image src={'/adobe-express-qr-code.png'} width={64} height={64} alt="qrcode"></Image>
              <div>
                <p dangerouslySetInnerHTML={{ __html: "< name > 游上鋒 < /name >" }} />
                <p dangerouslySetInnerHTML={{ __html: "< email > turtle910407@gmail.com < /email >" }} />
                <p dangerouslySetInnerHTML={{ __html: "< phone > 0912345678 < /phone >" }} />
              </div>
            </div>




          </div>

          <div className="row-span-5  col-span-3 defaultItemBackgrond rounded-3xl px-10 py-6 flex flex-col justify-center items-center" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <h2 className="text text-4xl font-bold mb-4 text-center">ISFP</h2>
            <div className="mb-4">
              <Lottie animationData={adventurer} lottieRef={lottieRef} autoPlay={false} style={{ objectFit: 'contain', width: '100%' }} />

            </div>

          </div>



          <div className="row-span-3 col-span-3 rounded-3xl px-10 py-6 bg-[#91D3FF]" >
            <Lottie animationData={myLocate} loop={true} style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="row-span-3 col-span-6 rounded-3xl px-10 py-6 defaultItemBackgrond flex flex-col items-center" >
            <div className="mb-4 grow h-full">
              <Image src={'/logo.svg'} width={32} height={32} alt="Logo" className="object-contain h-full w-min" />
            </div>
            <h2 className="text text-4xl font-bold mb-4 text-center">Shang-Feng Yu</h2>

          </div>
          <div
            className="row-span-2 col-span-3 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer"
          >
            <Image
              src={'/NCUE.png'}
              width={480}
              height={480}
              alt="NCUE"
              className="object-contain h-[calc(100%-2rem)] w-min transform rotate-0 transition-all duration-500 group-hover:scale-[1.4] group-hover:rotate-[360deg]"
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer" >
            <Image
              src={'/Javascript.svg'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer" >
            <Image
              src={'/react.svg'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer" >
            <Image
              src={'/Figma.png'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-3 rounded-3xl px-10 py-6 flex flex-col justify-end group hover:cursor-pointer bg-[#ffc934]" onClick={() => {
            goToPage(2)
          }} >

            <div className="flex flex-col mt-auto items-end">
              <h1 className="text text-4xl font-bold mt-auto mb-3">My works</h1>
              <KeyboardDoubleArrowRightIcon
                className="border-transparent rounded-full border-2 group-hover:border-white group-hover:border-2 transition-all duration-200 ease-in-out"
                style={{
                  fontSize: 40,
                  animation: 'pulse 1s infinite alternate'
                }}
              />
            </div>
          </div>
        </div>
      </div>  <style jsx>{`
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    
`}</style>

    </>
  );
}
