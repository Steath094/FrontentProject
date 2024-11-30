import { useContext,createContext } from "react";

export const LanguageContext = createContext({
    lang: 'en',
    changeLanguage:()=>{}
})

export const useLanguage = ()=>{
    return useContext(LanguageContext);
}

export const LanguageProvider = LanguageContext.Provider;