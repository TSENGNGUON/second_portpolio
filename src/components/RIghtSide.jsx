import React from 'react'
import './styles.css'
import { LiaExternalLinkAltSolid } from "react-icons/lia";

function RIghtSide() {

    // array for loop content

    const contents = [
       { content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus laudantium quibusdam nemo perferendis. Facilis, fuga ipsum totam fugit repellendus iure ut quam omnis, at molestias atque minus explicabo magni numquam!",id:1},
       { content:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, consequatur. Beatae earum unde, totam aut eos voluptas accusantium rerum incidunt? Ad explicabo sunt illum facere quasi exercitationem ex officia aut tenetur, quae, ipsam blanditiis. Natus non eius esse, ut doloremque temporibus eligendi similique eum sunt, impedit aut minima voluptatem officiis assumenda asperiores nemo unde dolorem facilis? Ducimus porro rerum corrupti quis delectus quisquam repudiandae velit praesentium aperiam fugiat iure itaque, quam sit assumenda maxime dolor libero. Repellat asperiores quam quaerat repudiandae? Nihil nobis alias corrupti perspiciatis, eveniet similique. Reiciendis minima consequuntur doloribus debitis provident eaque! Tempora assumenda beatae quam aperiam?",id:2},
       { content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate ducimus tempora laborum quis, facilis consectetur dolore cumque. Debitis nesciunt placeat nihil repellendus tempora tenetur beatae amet cumque suscipit odio!",id:3},
    ]

    // array for modal blogs
    const items = [
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
  return (

    <div className='w-2/4 mt-[120px]  overflow-auto ml-[50%]'> 
      {/* about section */} 
        <div id='1' className='text-pright font-sans font-semibold text-lg'>
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
                    items.map((item)=>(
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
                            <h4 className='flex text-nowrap font-semibold text-lg items-center text-portfolio'><p className='pr-1'>{item.title}</p> <LiaExternalLinkAltSolid /></h4>

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
  )
}

export default RIghtSide