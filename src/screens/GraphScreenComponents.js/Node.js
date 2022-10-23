import colours from '../../assets/colours';
import Draggable from 'react-draggable';
import { Checkbox } from '@mui/material';
import { useXarrow } from 'react-xarrows';

const Node = ({ parentNode, node, key, selectMode }) => {
	//   const [selected, setSelected] = useState(false);
	const boxStyle = {
		position: 'absolute',
		textAlign: 'center',
		width: '10%',
		height: 'auto',
		borderRadius: 100,
		borderWidth: parentNode === node.id ? 7 : 5,
		borderStyle: 'solid',
		borderColor: parentNode === node.id ? colours.accent1 : colours.p2,
		padding: 10,
		aspectRatio: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	};

	const updateXarrow = useXarrow();
	return (
		// <div>
		<Draggable bounds='parent' onDrag={updateXarrow} onStop={updateXarrow}>
			<div id={node.id} className='input' style={boxStyle}>
				{node.id}
			</div>
		</Draggable>
		// </div>
	);
};
export default Node;
