"use client"
import React, { createContext} from 'react';



export const CheckContext = createContext({check:false,mail:""});
export const CheckPay = createContext({join:[],service:[],Activate:false})


const PayProvider = ({ children, join, service, Activate }) => {
  

  return (
    <CheckContext.Provider value={{join, service, Activate}}>
      {children}
    </CheckContext.Provider>
  );
}

 const CheckProvider = ({ children, check, mail }) => {
  

  return (
    <CheckContext.Provider value={{check,mail}}>
      {children}
    </CheckContext.Provider>
  );
};

export {PayProvider,CheckProvider}





