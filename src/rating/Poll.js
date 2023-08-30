import React from "react";
import { FaPoll } from "react-icons/fa";
import likeThumb from "img/like-thumb.png";


export default function Poll({ likeCnt=0, styleFromParent = {}, onLike = f => f }) {
    return <span style={{ marginLeft: "20px", ...styleFromParent}}
              onClick={()=>{onLike(likeCnt+1)}}>
              <img src={likeThumb} width='30' height='30' alt="profile" />
              <FaPoll />
              <span>{likeCnt}</span>
           </span>
}
