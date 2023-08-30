import 'bootstrap/dist/css/bootstrap.min.css';
import Poll from 'rating/Poll';
import modalMode from 'consts/crudMode.js';

export default function PostDetail({ modalMode, postInfo, onRemove = f => f,onLike = f => f, onUpdate =f =>f }) {
	
	return (
		<section>
			<h3>{postInfo.title}</h3>
			<p>{postInfo.id} : {postInfo.content}</p>
			<div>
				<Poll likeCnt={postInfo.likeCnt} id={postInfo.id} onLike={onLike} styleFromParent={{ backgroundColor: "yellow" }} />
				
			</div>
			
		</section>
	);
}

/*
                    { modalMode===modalMode.DETAIL?
                    <PostDetail postInfo={postInfo} />:""
                }
				*/