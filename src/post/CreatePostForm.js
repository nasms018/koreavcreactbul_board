import React, { useState } from 'react';

export default function CreatePostForm({ createPostCallBack = f => f}) {
    const[title, setTitle] =useState("");
    const[content, setContent] =useState("");
    const[color, setColor] =useState("#bbaabb");
    const submitArrowFunc = e => {
        e.preventDefault();
        createPostCallBack({title, content, color});
        setTitle("");
        setContent("");
        setColor("#888888");
    };

  return <form onSubmit={submitArrowFunc}>
    <input type='text' placeholder='게시글제목' value={title} 
        onChange={e=>setTitle(e.target.value)} required/><br />
    <textarea cols={30} rows={10} placeholder='게시글내용' 
        value={content} onChange={e=>setContent(e.target.value)} required/><br />
    <input type='color' placeholder='게시글제목' value={color}
        defaultValue='#eeeee'  onChange={e=>setColor(e.target.value)} required/><br />
    <button>ADD</button>
  </form>
  
  
  ;
}