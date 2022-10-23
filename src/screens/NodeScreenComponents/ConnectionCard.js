import { useEffect, useState } from 'react';
import colours from '../../assets/colours';
import { objectId } from '../../utils';
import Card from '@mui/material/Card';

const ConnectionCard = ({
	connection,
	nodes,
	setNodes,
	blocks,
	setBlocks,
	connected_node,
	parentNode,
}) => {
	const { content, nodeTitle } = connection;

	const inContent = () => {
		for (const x of nodes[parentNode].content) {
			if (connected_node.id === x._id) return true;
		}

		return false;
	};

	const [added, setAdded] = useState(inContent());

	// useEffect(() => {
	// 	setAdded(inContent());
	// }, [nodes]);

	const colour = added ? '#7fdb74' : colours.lining;

	return (
		<Card
			className='card'
			style={{
				marginTop: '5px',
				marginBottom: '5px',
				padding: '8px',
				display: 'flex',
				flexDirection: 'column',
				borderColor: colour,
			}}
			onClick={() => {
				if (!added) {
					setAdded(true);
					nodes[parentNode].content.push({
						_id: objectId(),
						html: connected_node.title,
						tag: 'h1',
						imageUrl: '',
					});
					blocks.push({
						_id: objectId(),
						html: connected_node.title,
						tag: 'h1',
						imageUrl: '',
					});
					setNodes({ ...nodes });
					// setBlocks({ ...blocks });
				}
			}}
		>
			<div>{nodeTitle}</div>
			<div>{content}</div>
		</Card>
	);
};

export default ConnectionCard;
