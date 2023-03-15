import { useState } from "react";

import { createContext } from "react";


export const ThemeContext= createContext();

const ThemeContextProvider= ({children})=>{
    const [darkTheme, setdarkTheme]= useState("light");
    
    return <ThemeContext.Provider value={{darkTheme, setdarkTheme}}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;