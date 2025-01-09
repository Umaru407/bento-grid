'use client'
import Image from "next/image"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/navigation';
import { usePageNavigation } from "../contexts/PageContext";
import SplitText from "../components/SplitText";
import { Fade ,Slide} from "react-awesome-reveal";
import { GradualSpacing } from "../components/gradual-spacing";


export default function Home() {
  const { goToPage } = usePageNavigation();
  const router = useRouter();
  return (
    <>
      <div className="mx-auto px-16 py-12 w-screen h-screen overflow-hidden">
        <div className="grid grid-rows-7 grid-cols-12 gap-5 w-full h-full lg:gap-7">
          <div className="row-span-3 col-span-9  rounded-3xl px-16 py-10 bg-[#47a2df]">
            {/* <Fade
              delay={200} // Wait 200ms before starting
              duration={1000} // Animation lasts 1 second
              // triggerOnce // Only animate once
              fraction={0.5} // Start animation when element is 50% visible
            >
              <h1 className="text-6xl font-bold mb-8 lg:text-8xl">視覺語言設計</h1>
            </Fade > */}

            {/* <Slide direction="up" cascade damping={0.2} triggerOnce>
  {['dfdsfds','33343'].map((feature,index) => (
    <div key={index} className="feature-card">
      {feature.content}
    </div>
  ))}
</Slide> */}
            {/* <SplitText
              text="視覺語言設計"
              className="text-6xl font-bold mb-8 lg:text-8xl"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            // onLetterAnimationComplete={handleAnimationComplete}
            /> */}
            <GradualSpacing text="視覺語言設計" className="text-6xl font-bold mb-8 lg:text-8xl"/>
            <GradualSpacing text="BentoGrid" className="text-4xl font-bold lg:text-6xl" delay={6}/>

            {/* <SplitText
              text="BentoGrid"
              className="text-4xl font-bold lg:text-6xl"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={1}
              rootMargin="-50px"
            // onLetterAnimationComplete={handleAnimationComplete}
            /> */}
            {/* <h1 className="text-6xl font-bold mb-8 lg:text-8xl">視覺語言設計</h1> */}
            {/* <h2 className="">BentoGrid</h2> */}
          </div>

            

          <div className="row-span-3 col-span-3 defaultItemBackgrond rounded-3xl grid grid-cols-2 grid-rows-2 gap-1 md:gap-2 md:px-10 md:py-8 lg:px-12 lg:py-10"  >
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
            <h1 className="text-6xl font-bold  text-white lg:text-8xl">About Me</h1>
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
            <h1 className="text-6xl font-bold  text-white lg:text-8xl">My Works</h1>
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
            transform: scale(1.45);
        }
        100% {
            transform: scale(1);
        }
    }

    
`}</style>
    </>
  );
}
