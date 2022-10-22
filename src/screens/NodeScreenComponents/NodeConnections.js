import EditablePage from '../../blocks/editablePage';
import ConnectionCard from './ConnectionCard';

const NodeConnections = () => {
	return (
		<div style={{ flex: 2, padding: '10px' }}>
			<h1>NodeConnections</h1>
			<ConnectionCard
				connection={{
					content: 'this is a connection',
					nodeTitle: 'nodeA',
				}}
			/>
			<EditablePage></EditablePage>
		</div>
	);
};

export default NodeConnections;
