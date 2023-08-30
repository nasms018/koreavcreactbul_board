import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import PostDetail from './PostDetail'


function PostModal({postInfo, modalMode, onRemove=f=>f,onUpdate=f=>f}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <Button className="btn" variant="outline-primary" onClick={handleShow}>상세</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>게시글</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <PostDetail postInfo={postInfo} modalMode={modalMode}/>
                    
                    </Modal.Body>
                <Modal.Footer>

                    <Button className="btn btn-outline-success" variant="outline-success" onClick={()=>{}}>
                        수정
                    </Button>

                    <Button className="btn" variant="outline-danger" onClick={()=>{onRemove(postInfo.id)}}>
                        삭제
                    </Button>

                    <Button className="btn_close" variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default PostModal;