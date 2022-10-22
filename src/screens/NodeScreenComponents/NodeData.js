import colours from '../../assets/colours';
import React, { useState } from 'react';

const NodeData = () => {
	const [content, setcontent] = useState('');

	return (
		<div
			style={{
				flex: 3,
				borderBottom: '0px',
				borderLeft: '0px',
				borderTop: '0px',
				borderRight: '1px',
				borderStyle: 'solid',
				borderColor: colours.lining,
			}}
		>
			<h1>NodeData</h1>
			<div
				className='input'
				type='text'
				value={content}
				onChange={(e) => setcontent(e.target.value)}
			/>
		</div>
	);
};

export default NodeData;
