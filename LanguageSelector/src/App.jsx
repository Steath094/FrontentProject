import { useState } from 'react'
import Blog from './components/Blog'
import {LanguageProvider} from './Context'
import Translator from './components/Translator'


function App() {
  const [lang, setLang] = useState('en')

  const changeLanguage = (newLang) => {
    if (newLang === null || newLang === undefined) {
      throw new Error('newLang cannot be null or undefined')
    }
    setLang(newLang)
  }

  return (
    <LanguageProvider value={{lang,changeLanguage}}>
        <Translator/>
        <Blog></Blog>
    </LanguageProvider>
  )
}

export default App
