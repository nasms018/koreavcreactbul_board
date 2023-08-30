/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import modalMode from 'consts/crudMode.js';

import PostModal from './PostModal';

export default function PostAbstract({ data, meta, onRemove = f => f ,onUpdate=f=>f}) {
	return <tr>
		{/* 메타로 받은 항목을 바탕으로 정보객체에서 속성값 꺼내어 TD 만들기 */}
		{meta.map((column, idx) => <td>{data[column.propName]}</td>)}
		<td>
			<PostModal postInfo={data} modalMode= {modalMode.DETAIL} onRemove={onRemove} onUpdate={onUpdate}></PostModal>
		</td>
	</tr>;

}