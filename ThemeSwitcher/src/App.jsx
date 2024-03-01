import React, {useEffect, useState} from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme.js";
import Card from "./components/Card.jsx";
import ThemeBtn from "./components/ThemeBtn.jsx";

function App() {   

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-black">
        <div className=" w-1/4 bg-gray-900 rounded-lg p-4">
          <div className=" w-full mx-auto">
            <ThemeBtn/>
          </div>
          <div className=" w-full h-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
