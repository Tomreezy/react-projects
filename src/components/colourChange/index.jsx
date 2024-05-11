import { useState } from "react"


export default function Colour(){
const[colour,setColour]=useState("hex")
const[mode,setMode]=useState(null)

function randomNumber(length){
    return Math.floor(Math.random() * length)
}



function RGBA(){

    let first=randomNumber(255)
    let second=randomNumber(255)
    let third=randomNumber(255)

    console.log(first,second,third)

    setMode(`rgb(${first},${second},${third})`)


}

function HEX(rand){

    let bah=["#"]
    const alpha=["A","a","B","a","C","c","E","e","F","f"]
    for(let i=0; i<2; i++){
        let number=randomNumber(alpha.length-1)
        bah.push(alpha[number])
    }

    for(let i=0;i<4;i++){
        let number=randomNumber(9)
        bah.push(number)
    }

    setMode(bah.join(""))

}




return (
<div style={{"backgroundColor":mode,"width":"100vw","height":"100vh"}}>
    
        <button onClick={()=>setColour("hex")} >hex</button>
        <button onClick={()=>setColour("rgb")} >rgba</button>


        <button onClick={ colour=== "hex"? ()=>HEX(): ()=>RGBA() }>  generate</button>


        { mode ? <div>color is {mode} and mode is {colour}</div> : null}

    </div>
)
}