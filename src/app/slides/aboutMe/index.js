'use client'
import Image from "next/image"

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';
import myLocate from "./myLocate.json";
import adventurer from "./adventurer.json";
import logo from "./sunlogo.json";
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePageNavigation } from '../../contexts/PageContext';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false }); // Dynamic import with ssr: false


export default function AboutMe() {
  const { goToPage } = usePageNavigation();
  const router = useRouter();
  const lottieRef = useRef(null);
  const lottieRef2 = useRef(null);
  const handleMouseEnter = () => {
    lottieRef.current.play(); // 當滑鼠進入時播放動畫
  };

  const handleMouseLeave = () => {
    lottieRef.current.stop(); // 當滑鼠離開時停止動畫
  };

  const handleMouseEnter2 = () => {
    lottieRef2.current.setDirection(1);
    lottieRef2.current.play(); // 當滑鼠進入時播放動畫
  };

  const handleMouseLeave2 = () => {
    console.log('set -1')
    lottieRef2.current.setDirection(-1);
    lottieRef2.current.play();
    // lottieRef2.current.stop(); // 當滑鼠離開時停止動畫
  };


  return (
    <>
      <div className="mx-auto p-8 w-screen h-screen overflow-hidden">
        <div className="grid grid-rows-7 grid-cols-12 gap-4 w-full h-full lg:gap-6">
          <div className="row-span-2 col-span-3 rounded-3xl px-10 py-6 flex flex-col justify-end group hover:cursor-pointer bg-[#47a2df] hover:bg-[#3694d3] transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#3694d3]/35" onClick={() => {
            goToPage(0)
          }} >

            <div className="flex flex-col mt-auto">
              <h1 className="text text-4xl font-bold mt-auto mb-3">Home</h1>
              <KeyboardArrowLeftIcon
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

          <div className="row-span-5  col-span-3 defaultItemBackgrond rounded-3xl px-10 py-6 flex flex-col justify-center items-center hover:cursor-pointer" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} onClick={() => {
              window.open("https://www.16personalities.com/tw/isfp-%E6%80%A7%E6%A0%BC", "_blank")
            }}>
            <h2 className="text text-3xl font-bold mb-4 text-center lg:text-4xl">ISFP</h2>
            <div className="mb-4">
              <Lottie animationData={adventurer} lottieRef={lottieRef} autoplay={false} style={{ objectFit: 'contain', width: '100%' }} />

            </div>

          </div>



          <div className="row-span-3 col-span-3 rounded-3xl px-10 py-6 locateBackgrond " >
            <Lottie animationData={myLocate} loop={true} style={{ width: '100%', height: '100%' }} />
          </div>

          <div className="row-span-3 col-span-6 rounded-3xl px-10 py-6 defaultItemBackgrond flex flex-col items-center" onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>
            <div className="grow mb-2 h-3/5">
              <Lottie animationData={logo} lottieRef={lottieRef2} autoplay={false} loop={false} style={{ objectFit: 'contain' ,height:'100%'}} />
              {/* <Image src={'/logo.svg'} width={32} height={32} alt="Logo" className="object-contain h-full w-min" /> */}
            </div>
            <h2 className="text text-3xl font-bold mb-2 text-center lg-4xl">Shang-Feng Yu</h2>

          </div>
          <div
            className="row-span-2 col-span-3 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.ncue.edu.tw/", "_blank")
            }}
          >
            <Image
              src={'/NCUE.png'}
              width={480}
              height={480}
              alt="NCUE"
              className="object-contain h-[calc(100%-2rem)] w-min transform rotate-0 transition-all duration-500 group-hover:scale-[1.4] group-hover:rotate-[360deg]"
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.javascript.com/", "_blank")
            }}
          >
            <Image
              src={'/Javascript.svg'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer"
            onClick={() => {
              window.open("https://reactjs.org/", "_blank")
            }}>
            <Image
              src={'/react.svg'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-2 rounded-3xl px-10 py-6 defaultItemBackgrond flex items-center justify-center group overflow-hidden hover:cursor-pointer"
            onClick={() => {
              window.open("https://www.figma.com/design/OtBjAmUNOirG6dZwT3zrmh/Bento-Grid-Maker-(Community)?node-id=0-1&t=dSpOjdUE7iJKUNLH-1", "_blank")
            }}>
            <Image
              src={'/Figma.png'}
              width={360}
              height={360}
              alt="NCUE"
              className="object-contain h-[calc(100%-3rem)] w-min transform  transition-all duration-500 group-hover:scale-[1.2] "
            />
          </div>
          <div className="row-span-2 col-span-3 rounded-3xl px-10 py-6 flex flex-col justify-end group hover:cursor-pointer bg-[#ffc934] hover:bg-[#ffae34] transition-all duration-300 ease-in-out hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffae34]/35" onClick={() => {
            goToPage(2)
          }} >

            <div className="flex flex-col mt-auto items-end">
              <h1 className="text text-4xl font-bold mt-auto mb-3">My works</h1>
              <KeyboardArrowRightIcon
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
