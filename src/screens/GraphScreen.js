import Connection from './GraphScreenComponents.js/Connection';
import Node from './GraphScreenComponents.js/Node';
import CheckBox from '@mui/material';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
const GraphScreen = ({
  parentNode,
  nodes,
  connections,
  selectedNodes,
  selectMode,
}) => {
  console.log('NODES' + JSON.stringify(nodes));
  return (
    <div className='screen'>
      <Xwrapper>
        {nodes.map((box, i) => {
          return (
            <Node
              selectMode={selectMode}
              parentNode={parentNode}
              node={box}
              key={i}
            />
          );
        })}
        {connections.map((line, i) => (
          <Connection key={i} line={line} />
        ))}
      </Xwrapper>
      {/* <SelectNodeModal /> */}
    </div>
  );
};
export default GraphScreen;
