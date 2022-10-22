import ConnectionModal from './NodeScreenComponents/ConnectionModal';
import NodeConnections from './NodeScreenComponents/NodeConnections';
import NodeData from './NodeScreenComponents/NodeData';

const NodeScreen = ({ data }) => {
	return (
		<div style={{ padding: '5vh', display: 'flex', height: '100vh' }}>
			<NodeData></NodeData>
			<NodeConnections></NodeConnections>
			<ConnectionModal />
		</div>
	);
};

export default NodeScreen;
