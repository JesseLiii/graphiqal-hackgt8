import colours from '../../assets/colours';
import React, { useEffect, useState, useId } from 'react';
import EditablePage from '../../blocks/editablePage';

// const id = useId();

const NodeData = () => {
	const [content, setcontent] = useState([
		{ id: useId(), html: '', tag: 'p' },
	]);

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
			<EditablePage></EditablePage>
		</div>
	);
};

export default NodeData;
