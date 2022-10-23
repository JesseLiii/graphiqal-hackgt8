import NodeScreen from '../screens/NodeScreen';
import TabBar from '../components/TabBar';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';
import { useState, useRef, useEffect } from 'react';
import GraphScreen from '../screens/GraphScreen';
import colours from '../assets/colours';

import { mockdata, mockconnections, mockviewnodes } from '../helpers/mockdata';

const View = ({ data }) => {
	const arrowObj = (start, end) => {
		return {
			start: start,
			end: end,
			labels: {
				middle: (
					<div
						style={{ backgroundColor: colours.p1 }}
						contentEditable
						suppressContentEditableWarning={true}
					>
						Editable label
					</div>
				),
			},
			headSize: 0,
			strokeWidth: 5,
			//   dashness: { animation: 1 },
			color: colours.p2,
		};
	};

	const [activeState, setActiveState] = useState(1);
	const [selectMode, setSelectMode] = useState(true);
	const [selectedNodes, setSelectedNodes] = useState([]);
	const [parentNode, setparentNode] = useState('id1');

	const [nodes, setNodes] = useState(mockdata);

	const changeNodes = (newNodes) => {
		setNodes(newNodes);
	};

	const [connections, setConnections] = useState(mockconnections);

	const changeConnections = (newConnections) => {
		setConnections(newConnections);
	};

	const [views, setViews] = useState(mockviewnodes);

	const changeViews = (newView) => {
		setViews(newView);
	};

	const changeState = (newState) => {
		setActiveState(newState);
	};

	const changeParentNode = (newParent) => {
		setparentNode(newParent);
	};

	return (
		<div>
			<TabBar
				changeState={(newState) => changeState(newState)}
				activeState={activeState}
			/>
			{activeState == 1 && (
				<NodeScreen
					parentNode={parentNode}
					nodes={nodes}
					connections={connections}
					viewnodes={mockviewnodes}
					setparentNode={changeParentNode}
					setNodes={changeNodes}
					setConnections={changeConnections}
					setViewNodes={changeViews}
				/>
			)}
			{activeState == 2 && (
				<GraphScreen
					parentNode={parentNode}
					nodes={nodes}
					connections={connections}
					selectMode={selectMode}
					selectedNodes={selectedNodes}
				/>
			)}
			<div
				style={{
					position: 'absolute',
					bottom: '5%',
					right: '5%',
					flexDirection: 'row',
					display: 'flex',
					width: '10%',
					justifyContent: 'space-around',
				}}
			>
				<AddNodeButton
					addNode={(newNode) => {
						setNodes([...nodes, newNode]);
					}}
				/>
				<AddConnectionButton
					addConnection={(newConnection) => {
						setConnections([...connections, newConnection]);
					}}
				/>
			</div>
		</div>
	);
};

export default View;
