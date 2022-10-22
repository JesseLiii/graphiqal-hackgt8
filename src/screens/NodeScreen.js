import ConnectionModal from './NodeScreenComponents/ConnectionModal';
import NodeConnections from './NodeScreenComponents/NodeConnections';
import NodeData from './NodeScreenComponents/NodeData';

const NodeScreen = ({ data }) => {
<<<<<<< HEAD
  return (
    <div style={{ padding: '5vh', display: 'flex', height: '100vh' }}>
      <NodeData></NodeData>
      <NodeConnections></NodeConnections>
    </div>
  );
=======
	return (
		<div style={{ padding: '5vh', display: 'flex', height: '100vh' }}>
			<NodeData></NodeData>
			<NodeConnections></NodeConnections>
			<ConnectionModal />
		</div>
	);
>>>>>>> refs/remotes/origin/testing
};

export default NodeScreen;
