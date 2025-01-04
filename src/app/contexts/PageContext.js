// context/PageContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';



export const PageContext = createContext (undefined);



export const PageProvider = ({ children, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (direction) => {
    
      setCurrentPage(direction);
    
    console.log(direction,currentPage)
  };

  return (
    <PageContext.Provider value={{ currentPage, goToPage, totalPages }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageNavigation = () => {
  const context = useContext(PageContext);
  // if (!context) {
  //   throw new Error('usePageNavigation must be used within a PageProvider');
  // }
  return context;
};