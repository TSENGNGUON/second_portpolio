import React from 'react'
import { useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import RIghtSide from './RIghtSide';
import './styles.css'

function LeftSide() {
    const [selectedIndex, setSelectedIndex] = useState(0);

        // array of items for demonstration
        const items = [
            { text:'ABOUT',id:1,section:"#about"},
            { text:'EXPERIENCE',id:2,section:"#experience"},
            { text:'PROJECTS',id:3,section:"#project"},
         ]

    // handle click event to set the  selected  index
    const handleClick = (index) => {
        setSelectedIndex(index);
    }


  return (
    <div className='w-2/4 flex fixed flex-col items-center justify-center h-screen  text-lg overflow-hidden'>
      
        <div className='absolute top-[120px]'>
        <h1 className='font-bold text-5xl text-portfolio mb-4'>Tun Seng Nguon</h1>
        <h4 className='font-semibold text-2xl text-portfolio mb-4'>Junior Frontend Developer</h4>
        <p className='text-normal'>I build a Frontend project, and <br />
        accessible digital experiences.
        </p>
        </div>
        <div className='absolute left-48 mt-48'>
            <ul>

                {items.map((item, index) => (

                    <li key={item.id} className={`flex items-center ${selectedIndex === index ? 'selected' : ''}`} onClick={() => handleClick(index)}>

                    <div className={`${selectedIndex === index ? 'w-[60px] h-[2px] bg-line rounded-full mr-5' : 'w-[40px] h-[2px] bg-notselected rounded-full mr-5'}`}></div>

                    <a className={`text-[15px] font-semibold ${selectedIndex === index ? 'text-portfolio':'text-normal '}`} href="#">{item.text}</a>

                    </li>
                
                ))}


            </ul>
        </div>
        <div className='absolute bottom-16 left-48'>
            <ul className='flex'>
                <li className='pr-5'><a href="#" className='text-normal text-2xl' title="Github"><FaGithub/></a></li>
                <li className='pr-5'><a href="#" className='text-normal text-2xl' title="Instagram" ><FaSquareInstagram/></a></li>
                <li className='pr-5'><a href="#" className='text-normal text-2xl' title="Linkedin" ><SiLinkedin/></a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default LeftSide



