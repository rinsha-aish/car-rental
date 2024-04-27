import { useEffect, useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


const App = () => {
  //creating variable
  let heroData =[

    {text1:"Dive in to",text2:"What you love"},
    {text1:"Indulge",text2:"Your passion"},
    {text1:"Give in to",text2:"Your passions"},
  ]


  //creating userstate
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
  
    return () => clearInterval(intervalId); // Cleanup function to clear the interval on component unmount
  }, []);
  

  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar/>
    <Hero 
    setPlayStatus={setPlayStatus}
    heroData={heroData [heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    />
    </div>
  )
}

export default App
