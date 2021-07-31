import React,{useState} from 'react'
import Dropdown from './Components/Dropdown';
import Hero from './Components/Hero';
import InfoSection from './Components/InfoSection';
import Navbar from './Components/Navbar';
import { Infodata } from './data/InfoData';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalstyle';


function App() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () =>{
    setisOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero Slides={SliderData} />
      <InfoSection {...Infodata}/>
    </>
  );
}

export default App;
