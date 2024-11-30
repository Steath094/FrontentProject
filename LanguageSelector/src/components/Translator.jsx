import React ,{ useState, useEffect, useContext } from 'react'
import {useLanguage } from '../Context';

function Translator() {
    const {changeLanguage} = useLanguage();
    const [showSelector, setShowSelector] = useState(false);
    const [showlangs, setshowlangs] = useState(false)
    // Show the language selector when the page is fully loaded
    useEffect(() => {
    const timer = setTimeout(() => {
      setShowSelector(true);
    }, 500); // 500ms delay to simulate full page load

    return () => clearTimeout(timer);
  }, []);
    const toggleLangs = () =>{
        setshowlangs(prev=>!prev);
    }
    return (
        <div
          className={`fixed top-4 right-[11rem] transition-opacity duration-500 ease-in-out ${
            showSelector ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative inline-block">
            {/* Main Button */}
            <button onClick={()=>toggleLangs()} className="bg-gray-200 text-black px-4 py-2 rounded shadow-lg hover:bg-gray-300">
              🌐 Select Language
            </button>
    
            {/* Dropdown Menu */}
            <div className={`absolute right-0 mt-2 w-40 bg-white border rounded shadow-md ${
                    showlangs ? 'opacity-100' : 'opacity-0'
                  }`}>
              <button
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => changeLanguage('en')}
              >
                English
              </button>
              <button
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                onClick={() => changeLanguage('es')}
              >
                Español
              </button>
            </div>
          </div>
        </div>
    );
}

export default Translator