import { useState } from "react"
import { FaStar } from "react-icons/fa"



export default function Stars({stars=10}){

    const[rating,setRating]=useState(null)
    const[hover,setHover]=useState(null)


    console.log(rating)
    console.log(hover)
    return (<div>
    {[...Array(stars)].map((_, index) => {
        const starValue = index + 1;
        return (
            <FaStar
                key={index}
                style={{ "color": (rating || hover) >= starValue ? "red" : "black" }}
                size={30}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                onMouseDown={() => setRating(starValue)}
            />
        );
    })}
</div>
);
}