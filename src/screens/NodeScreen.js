import { useState, useEffect } from 'react';
import colours from '../assets/colours';

import ConnectionCard from './NodeScreenComponents/ConnectionCard';
import ConnectionModal from './NodeScreenComponents/ConnectionModal';
import Card from '@mui/material/Card';

import NodeConnections from './NodeScreenComponents/NodeConnections';
import NodeData from './NodeScreenComponents/NodeData';

import EditablePage from '../blocks/editablePage';
import isDeepEqual from '../utils/deepEqual';
const uid = () => {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const NodeScreen = ({
	parentNode,
	nodes,
	connections,
	viewnodes,
	setNodes,
	setConnections,
	setViewNodes,
}) => {
	const nodeToContent = (i, blocks) => {
		let node = blocks[i];
		let nodeData = nodes[node.node_id];

		console.log(i, nodeData);
		console.log(blocks[i]);
		console.log(blocks);

		nodeData = [
			{ ...node, html: nodeData.title, imageUrl: '' },
			...nodeData.content.map((e) => {
				return { ...e, node_parent: node.node_id };
			}),
		];
		return [
			...blocks.slice(0, i),
			...nodeData,
			...blocks.slice(i + 1, blocks.length),
		];
	};

	const refactorNodes = () => {
		let content = nodes[parentNode].content;
		let newBlocks;

		for (const i in content) {
			if ('node_id' in content[i]) newBlocks = nodeToContent(i, content);
		}

		newBlocks.unshift({
			_id: 'l9kqq7kytgj7gqpsf2',
			html: nodes[parentNode].title,
			tag: 'h1',
			imageUrl: '',
		});
		return newBlocks;
	};

	const [blocks, setBlocks] = useState(refactorNodes());

	useEffect(() => {
		console.log('blocks');
		console.log(blocks);
	}, [blocks]);

	useEffect(() => {
		let bool = false;

		for (const x of blocks) {
			if ('node_id' in x) {
				if (!(x.node_id in nodes)) {
					nodes[x.node_id] = {};

					bool = true;
					// add node to nodes
					nodes[x.node_id] = {
						title: x.html,
						content: [],
						connections: {},
						id: x.node_id,
					};
					// add connection to parentNode
					nodes[parentNode].connections[x.node_id] =
						'connection ' + parentNode + ' ' + x.node_id;

					// add connections to connections
					connections['connection ' + parentNode + ' ' + x.node_id] =
						{
							title:
								'connection between ' +
								parentNode +
								' and ' +
								x.html,
							content: ['default content'],
							type: 'parent',
							nodes: [parentNode, x.node_id],
							id: 'connection ' + parentNode + ' ' + x.node_id,
						};
				} else if (x.html !== nodes[x.node_id].title) {
					bool = true;
					// add node to nodes
					nodes[x.node_id] = {
						title: x.html,
						content: [],
						connections: {},
						id: x.node_id,
					};

					// add connection to parentNode
					nodes[parentNode].connections[x.node_id] =
						'connection ' + parentNode + ' ' + x.node_id;

					// add connections to connections
					connections['connection ' + parentNode + ' ' + x.node_id] =
						{
							title:
								'connection between ' +
								parentNode +
								' and ' +
								x.html,
							content: ['default content'],
							type: 'parent',
							nodes: [parentNode, x.node_id],
							id: 'connection ' + parentNode + ' ' + x.node_id,
						};
				}
			}
		}

		if (bool) {
			setNodes({ ...nodes });
			setConnections({ ...connections });
		}
	}, [blocks]);

	const changeBlocks = (newBlocks) => {
		setBlocks(newBlocks);
	};

	const changeConnections = () => {};

	const renderConnections = () => {
		const out = [];
		for (const x in nodes[parentNode].connections) {
			let c = nodes[parentNode].connections[x];
			let connected_node = nodes[x];
			out.push(
				<ConnectionCard
					parentNode={parentNode}
					nodes={nodes}
					setNodes={setNodes}
					connected_node={connected_node}
					connection={{
						nodeTitle: connected_node.title,
						content: connections[c].title,
					}}
					blocks={blocks}
					setBlocks={changeBlocks}
				/>
			);
		}
		return out;
	};

	return (
		<div className='screen'>
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
				<EditablePage
					blocks={blocks}
					setBlocks={changeBlocks}
				></EditablePage>
			</div>
			<div style={{ flex: 2, padding: '10px' }}>
				<h1>Connections</h1>
				{renderConnections()}
			</div>
			{/* <ConnectionModal /> */}
		</div>
	);
};

export default NodeScreen;
