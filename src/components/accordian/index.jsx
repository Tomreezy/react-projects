import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian(){

const[select,setSelected]=useState(null)
const[enableSelect,setEnableSelected]=useState(false)
const[multiple,setMultiple]=useState([])



function handleMultiple(getId){
   let copy=[...multiple]

   const checkIndex=copy.indexOf(getId)

   checkIndex===-1?copy.push(getId):copy.splice(checkIndex,1)

   setMultiple(copy)

   console.log(multiple)

}


function handleClick(getId){
    let newId
    getId == select ? newId=null : newId=getId
    setSelected(newId)
}

    return <div className="wrapper">
        <button onClick={()=> setEnableSelected(!enableSelect)}>selected</button>
        <div className="data">
            {
                data && data.length ?
                data.map((item,index) =>
                    <div className="item" key={index}>
                     <div className="title" onClick={enableSelect ? ()=>handleMultiple(item.id) :  ()=>handleClick(item.id)} >
                        <h2>{item.question}</h2>
                        <p>+</p>
                    </div>
                   
                   
                    { select ===  item.id && !enableSelect?
                    <div>{
                        item.answer 
                    } </div> : (multiple.indexOf(item.id) !==-1 && enableSelect) ? <div>{item.answer}</div>:null
                    }
                    </div>
                )
                : <p> NO data found</p>


            }

        </div>
        
    </div>
}