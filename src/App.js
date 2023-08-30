import 'App.css';
import Header from 'layout/Header';
import React from 'react';
import ListPost from 'post/ListPost';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
	return (
		<div className="App">
			<Header />
			<div className='box'>
			<ListPost />

			</div>
		</div>
	);
}



/*
export default function App() {
  return (
	<div className="App">
	  <Header />
	  {[...Array].map((_,i) =>(
	  <ListPost key={i}/>))}

	</div>
  );
}
*/