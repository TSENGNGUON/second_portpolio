import React from 'react'
import { useState } from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import EcommerceImg from "../assets/ecomerce.png"
import MyCv from '../assets/Tun_SengNguon.pdf'
import './styles.css'


function LeftSide() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    // array for loop content

    const contents = [
        { content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laudantium quibusdam nemo perferendis. Facilis, fuga ipsum totam fugit repellendus iure ut quam omnis, at molestias atque minus explicabo magni numquam!",id:1},
        { content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, consequatur. Beatae earum unde, totam aut eos voluptas accusantium rerum incidunt? Ad explicabo sunt illum facere quasi exercitationem ex officia aut tenetur, quae, ipsam blanditiis. Natus non eius esse, ut doloremque temporibus eligendi similique eum sunt, impedit aut minima voluptatem officiis assumenda asperiores nemo unde dolorem facilis? Ducimus porro rerum corrupti quis delectus quisquam repudiandae velit praesentium aperiam fugiat iure itaque, quam sit assumenda maxime dolor libero. Repellat asperiores quam quaerat repudiandae? Nihil nobis alias corrupti perspiciatis, eveniet similique. Reiciendis minima consequuntur doloribus debitis provident eaque! Tempora assumenda beatae quam aperiam?",id:2},
        { content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate ducimus tempora laborum quis, facilis consectetur dolore cumque. Debitis nesciunt placeat nihil repellendus tempora tenetur beatae amet cumque suscipit odio!",id:3},
     ]
 
     
 
     // array for modal blogs
     const modal = [
         {
         id:1,
         startYear:"2023",
         endYear:"2023",
         title:"Junior Frontend HTML CSS JavaScript",
         content:"Buid a small ecommerce static project frontend test what,I've learned",
         technologies:[
             {id:1,subjectList:"JavaScript"},
             {id:2,subjectList:"HTML"},
             {id:3,subjectList:"CSS"}
         ]
         },

         {
         id:2,
         startYear:"2023",
         endYear:"2024",
         title:"Junior React",
         content:"Buid a small ecommerce static project frontend test what,I've learned",
         technologies:[
             {id:1,subjectList:"TypeScript"},
             {id:2,subjectList:"Phython"},
             {id:3,subjectList:"Tailwind"},
         ]
         },
     ]

        // data of project 
        const modalProject = [
            {
            id:1,
            img:`${EcommerceImg}`,
            url:"http://127.0.0.1:5501/docs/index.html",
            title:"Ecommerce FrontEnd Static Project",
            content:"Buid a small ecommerce static project frontend test what,I've learned",
            technologies:[
                {id:1,subjectList:"JavaScript"},
                {id:2,subjectList:"HTML"},
                {id:3,subjectList:"CSS"}
            ]
            },
   
            {
            id:2,
            img:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            url:"",
            title:"My Portfolios",
            content:"Buid a small ecommerce static project frontend test what,I've learned",
            technologies:[
                {id:1,subjectList:"TypeScript"},
                {id:2,subjectList:"Phython"},
                {id:3,subjectList:"Tailwind"},
            ]
            },
        ]
    
 

        // array of items for demonstration
        const items = [
            { text:'ABOUT',id:1,link:"#about"},
            { text:'EXPERIENCE',id:2,link:"#experience"},
            { text:'PROJECTS',id:3,link:"#project"},
         ]

    // handle click event to set the  selected  index
    const handleClick = (index) => {
        setSelectedIndex(index);
    }


  return (
    <div id='about' className='w-full main'>
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

                    <a className={`text-[15px] font-semibold ${selectedIndex === index ? 'text-portfolio':'text-normal '}`} href={item.link}>{item.text}</a>

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
    {/* right side */}
    <div  className='w-2/4 mt-[120px] rightside overflow-auto ml-[50%]'> 
      {/* about section */} 
        <div className='text-pright font-sans font-semibold text-lg'>
        {
            contents.map((content)=>(
                <p key={content.id} className='w-9/12 pb-4'>{content.content}</p>
            ))
        }
        </div>
    {/* experience section */}
        <div id='experience' className='text-normal'>
            <ul >
                {
                    modal.map((item)=>(
                    <li key={item.id}>
                    <a href="#">
                    {/* modal */}
                    <div id='box' className='w-[75%] rounded-md p-3 flex flex-row'>
                        {/* header */}
                        <div className='w-2/4'>
                        <p className='w-full text-normal flex items-center'>{item.startYear} <div className='w-5 h-[1px] bg-normal rounded-full mx-1'></div> {item.endYear}</p>
                        </div>
                        {/* body */}
                        <div className='w-[70%]'>
                            <h4 className='flex text-nowrap font-semibold text-lg items-center text-portfolio'><p className='pr-1'>{item.title}</p> <FiExternalLink/></h4>

                            <p className='mt-2 content'>{item.content}</p>
                        
                        {/* footer */}
                        
                            <ul className='flex mt-8'>

                            {item.technologies.map((child)=>(
                                <li key={child.id} className='subject py-2 px-3 bg-btn rounded-full li-btn mr-1'>

                                <a className='text-titlebtn font-semibold text-sm a-btn'
                                href="#">
                                    {child.subjectList}
                                </a>

                                </li>   
                            ))}

                            </ul>
                        </div>
                    </div>
                    </a>
                </li>
                    ))
                }
            </ul>
        </div>
        {/* view full resume */}
       <div className='resume mt-5'>
       <a href={`${MyCv}`} id='resume' className='text-white flex items-center text-xl'><p className='mr-2'>View Full CV</p> <p> <FiExternalLink/></p></a>
       </div>

       {/* Project Section */}
       <div id='project' className='text-normal mt-40'>
            <ul >
                {
                    modalProject.map((item)=>(
                    <li key={item.id}>
                    <a target='_blank' href={item.url}>
                    {/* modal */}
                    <div id='box' className='w-[75%] rounded-md p-3 flex flex-row'>
                        {/* header */}
                        <div className='w-2/4'>
                        <p className='w-full text-normal flex items-center'><img className='w-50 rounded-md' src={item.img}  /></p>
                        </div>
                        {/* body */}
                        <div className='w-[70%]'>
                            <h4 className='flex text-nowrap font-semibold text-lg items-center text-portfolio'><p className='pr-1'>{item.title}</p> <FiExternalLink/></h4>

                            <p className='mt-2 content'>{item.content}</p>
                        
                        {/* footer */}
                        
                            <ul className='flex mt-8'>

                            {item.technologies.map((child)=>(
                                <li key={child.id} className='subject py-2 px-3 bg-btn rounded-full li-btn mr-1'>

                                <a className='text-titlebtn font-semibold text-sm a-btn'
                                href="#">
                                    {child.subjectList}
                                </a>

                                </li>   
                            ))}

                            </ul>
                        </div>
                    </div>
                    </a>
                </li>
                    ))
                }
            </ul>
        </div>
    </div>
    </div>

  )
}

export default LeftSide



