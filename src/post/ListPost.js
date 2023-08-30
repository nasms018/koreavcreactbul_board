/* eslint-disable */

import React, { useState } from "react";
import dataFromServer from 'post/model/post-data.json';
import PostAbstract from './PostAbstract';
import CreatePostForm from './CreatePostForm';

export default function ListPost() {
    const meta = dataFromServer.meta;
    //propName, propCaption

    const [arrPost, setArrPost] = useState(dataFromServer.posts);
    const [showPostModal, setShowPostModal] = useState(false);

    return (<>
        {showPostModal ? (
            <CreatePostForm createPostCallBack={(newPost) => {
                setArrPost([...arrPost, { ...newPost, likeCnt: 0 }]);
                setShowPostModal(false);
            }} />)
            : (<button onClick={() => { setShowPostModal(true); }}>글등록</button>)
        }
        <table>
            <thead>
                <tr>
                    {meta.map((column, idx) => <th>{column.propCaption}</th>)}
                </tr>
            </thead>
            <tboby>
                {arrPost.map((post, i) =>
                    <PostAbstract key={post.id} data={post} meta={meta}
                        onUpdate={(updatedPost)=>{
                            const modifiedPost = arrPost.map(post => {post.id === updatedPost.id ? updatedPost : post});
                            setArrPost(modifiedPost);
                        }}
                        onRemove={id => {
                            const modifiedPost = arrPost.filter(post => post.id !== id);
                            setArrPost(modifiedPost);
                        }}
                    />)
                }
            </tboby>
        </table>

    </>)
}
