'use client'


import { PageProvider, usePageNavigation } from './contexts/PageContext';

import MyWorks from './slides/myWorks';
import AboutMe from './slides/aboutMe';

import Home from './slides/home';
import { useState ,useRef} from 'react';
import { motion } from 'framer-motion';


const Page = ({ color, children, position }) => (
    <div
        className={`absolute  flex items-center justify-center transition-transform duration-500 ease-in-out`}
        style={{ transform: `translateX(${position}%)` }}
    >
        {children}
    </div>
);

const FullscreenPages = ({ pages }) => {
    //   const [currentPage, setCurrentPage] = useState(0);

    const { currentPage } = usePageNavigation();

    return (

        <div className="relative overflow-hidden h-screen">
          
                {pages.map((page, index) => (
                    <Page key={index} position={(index - currentPage) * 100}>
                        {page}
                    </Page>
                ))}
           
        </div>

    );
};



export default function page() {
    const pages = [
        
       <Home />
        ,
        <AboutMe />
        ,
        < MyWorks />
    ];

    return (
        <PageProvider totalPages={pages.length}>

            <FullscreenPages pages={pages} />

        </PageProvider>
    )
}

