import ConnectionModal from './NodeScreenComponents/ConnectionModal';
import NodeConnections from './NodeScreenComponents/NodeConnections';
import NodeData from './NodeScreenComponents/NodeData';

const NodeScreen = ({ data }) => {
	return (
		<div className='screen'>
			<NodeData></NodeData>
			<NodeConnections></NodeConnections>
			<ConnectionModal />
		</div>
	);
};

export default NodeScreen;
