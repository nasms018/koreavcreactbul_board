import React from "react";
import { FaStar } from "react-icons/fa"

function StarRating({ id, rate, 총별개수, styleFromParent = {}, onChgRate = f => f }) {
  const createArray = (len) => [...Array(len)]
  return <div style={{ padding: "5px", ...styleFromParent }}>
    {createArray(총별개수).map(
      (_, i) => <FaStar key={i}
        color={i < rate ? "red" : "grey"}
        onClick={() => { onChgRate(id, i + 1); }} />
    )}
  </div>;
}

export default StarRating


/*
import React, {useState} from "react";
import { FaStar } from "react-icons/fa"

function StarRating({총별개수 = 7, styleFromParent = {}}) {
    const [starRate, 별개수변경함수] = useState(1);
    //const userRate = 4 되는데.?

    const Star = ({selected = false, onSelect = f => f}) => (
        <FaStar color={selected ?"red":"grey"} onClick={onSelect} />
    )
    const createArray = (length) => [...Array(length)]

    return <div style ={{padding:"5px", ...styleFromParent}}>
         
        {createArray(총별개수).map(
        (_,i)=><Star key={i} 
                     selected={starRate > i} 
                     onSelect={()=>별개수변경함수(i+1)} />)}
        
        </div>;

}
  
  export default StarRating
  */