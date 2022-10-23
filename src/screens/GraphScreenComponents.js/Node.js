import colours from '../../assets/colours';
import Draggable from 'react-draggable';
import { Checkbox } from '@mui/material';
import { useXarrow } from 'react-xarrows';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const Node = ({ parentNode, node, pos, moveNode, editNodeTitle }) => {
  const [position, setPosition] = useState(pos);

  const handleChange = (event) => {
    editNodeTitle(event.target.value);
  };

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
    zIndex: 0,
  };

  const onStart = () => {};
  const onStop = () => {};

  const dragHandlers = { onStart: onStart, onStop: onStop };

  const onControlledDrag = (e, position) => {};

  const onControlledDragStop = (e, position) => {
    onControlledDrag(e, position);
    const { x, y } = position;
    onStop();
    moveNode({ x: x, y: y });
    setPosition({ x: x, y: y });
  };

  const updateXarrow = useXarrow();
  return (
    <Draggable
      position={position}
      {...dragHandlers}
      onStop={onControlledDragStop}
      bounds='parent'
      onDrag={updateXarrow}
    >
      <div id={node.id} style={boxStyle}>
        <TextField
          inputProps={{
            style: {
              padding: 5,
              textAlign: 'center',
            },
          }}
          id='outlined-name'
          placeholder='Node Title'
          value={node.title}
          onChange={handleChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& > fieldset': {
                border: 'none',
              },
            },
            bgcolor: colours.p1,
            padding: 0,
          }}
        />
      </div>
    </Draggable>
  );
};
export default Node;
