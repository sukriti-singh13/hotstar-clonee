import React from 'react'
import List1 from "../assets/list1.webp"
import List2 from "../assets/list2.webp"
import List3 from "../assets/list3.webp"
import List4 from "../assets/list4.webp"
import List5 from "../assets/list5.webp"
import List6 from "../assets/list6.webp"
import List7 from "../assets/list7.webp"
import List8 from "../assets/list8.webp"

const listItem=[
   {
    img:List1
   },
   {
    img:List2
   },
   {
    img:List3
   },
   {
    img:List4
   },
   {
    img:List5
   },
   {
    img:List6
   },
   {
    img:List7
   },
   {
    img:List8
   },
    
]
    
    

const List = () => {
  return (
    <div className="list-wrapper">
        <div className="list-innerwrapper">{
        
        listItem.map((item,index)=>(
<div className="list-component" key={index}>
    
            <img src={item.img} alt="shows-list"/>
        </div>
        ))
    }
        
      </div>  
    </div>
  )
}

export default List