'use client'
import Image from "next/image"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useRouter } from 'next/navigation';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { usePageNavigation } from "../../contexts/PageContext";
// import { Typography } from "@mui/material";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false }); // Dynamic import with ssr: false

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  minWidth: 400,
  // border: '2px solid #000',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: 24,

};
export default function MyWorks() {
  const { goToPage } = usePageNavigation();
  const [open, setOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const handleOpen = (url) => {
    setOpen(true);
    setModalImage(url);
  }
  const handleClose = () => setOpen(false);

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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
            <Image src={modalImage} width={'1000'} height={'1000'} alt="Logo" className="object-cover h-full w-full" />
          </Box>
        </Fade>
      </Modal>
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


          <div
            className="relative group row-span-4 col-span-3 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/ncuetext.png'); }}
          >
            <Image
              src={'/ncuetext.png'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">NCUE</h2>
              <p className="text-white text-xl">文字設計</p>
            </div>
          </div>


          <div
            className="relative group row-span-4 col-span-3 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/game.svg'); }}
          >
            <Image
              src={'/game.svg'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">Game Boy</h2>
              <p className="text-white text-xl">名片設計</p>
            </div>
          </div>


          <div
            className="relative group row-span-5 col-span-3 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/post2.png'); }}
          >
            <Image
              src={'/post2.png'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">Grid System</h2>
              <p className="text-white text-xl">海報設計</p>
            </div>
          </div>
          <div
            className="relative group row-span-3 col-span-3 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/lineart.png'); }}
          >
            <Image
              src={'/lineart.png'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">太陽和山</h2>
              <p className="text-white text-xl">禪繞畫</p>
            </div>
          </div>

          <div className="col-start-1 col-end-4 row-span-2  rounded-3xl px-10 py-6 flex flex-col 
           group hover:cursor-pointer bg-[#ff5f4e]" onClick={() => { goToPage(1) }}>

            <div className="flex flex-col mt-auto items-start ">
              <h1 className="text text-4xl font-bold mt-auto mb-3">About Me</h1>
              <KeyboardDoubleArrowLeftIcon
                className="border-transparent rounded-full border-2 group-hover:border-white group-hover:border-2 transition-all duration-200 ease-in-out"
                style={{
                  fontSize: 40,
                  animation: 'pulse 1s infinite alternate'
                }}
              />
            </div>
          </div>




          <div
            className="relative group col-start-4 row-start-5 row-span-3 col-span-2 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/textart2.png'); }}
          >
            <Image
              src={'/textart2.png'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">虎山巖</h2>
              <p className="text-white text-xl">文字設計</p>
            </div>
          </div>

          <div
            className="relative group col-start-6 row-start-5 row-span-3 col-span-4 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/post1.png'); }}
          >
            <Image
              src={'/post1.png'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">Grid System</h2>
              <p className="text-white text-xl">海報設計</p>
            </div>
          </div>


          <div
            className="relative group row-span-2 col-span-3 defaultItemBackgrond rounded-3xl overflow-hidden hover:cursor-pointer"
            onClick={() => { handleOpen('/ncueim.svg'); }}
          >
            <Image
              src={'/ncueim.svg'}
              width={1000}
              height={1000}
              alt="Logo"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-3xl ">寶山校門</h2>
              <p className="text-white text-xl">名片設計</p>
            </div>
          </div>



        </div></div>




    </>
  );
}
