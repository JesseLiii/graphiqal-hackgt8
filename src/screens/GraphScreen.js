import Connection from './GraphScreenComponents.js/Connection';
import Node from './GraphScreenComponents.js/Node';
import CheckBox from '@mui/material';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable from 'react-draggable';
import colours from '../assets/colours';

const GraphScreen = ({
  parentNode,
  nodes,
  views,
  connections,
  selectedNodes,
  selectMode,
  changeView,
  changeConnections,
  changeNodes,
}) => {
  // const [nodes, setNodes] = useState([
  //   {
  //     id: 'parentNode',
  //     x: 50,
  //     y: 20,
  //     reference: useRef(null),
  //   },
  //   { id: 'box1', x: 50, y: 20, reference: useRef(null) },
  //   { id: 'box2', x: 20, y: 250, reference: useRef(null) },
  //   { id: 'box3', x: 350, y: 80, reference: useRef(null) },
  // ]);

  // const renderNode = () => {
  //   return
  // }

  const moveNode = (node, position) => {
    let modified = views[parentNode][1].content;
    if (!(node.id in modified)) {
      modified[node.id] = {};
    }
    modified[node.id].pos = position;
    changeView({ ...views });
  };

  const editConnection = (connection, newTitle) => {
    connections[connection.id].title = newTitle;
    changeConnections({ ...connections });
  };

  const editNodeTitle = (node, newTitle) => {
    nodes[node.id].title = newTitle;
    changeNodes({ ...nodes });
  };
  let deltaXY = -150;
  const findPos = (node) => {
    if (node.title === '') {
      return { x: 0, y: 650 };
    }
    let modified = views[parentNode][1].content;
    if (node.id in modified) {
      return modified[node.id].pos;
    } else {
      deltaXY += 150;
      return { x: 2 * deltaXY, y: deltaXY };
    }
  };
  return (
    <div className='screen'>
      <Xwrapper>
        {Object.values(nodes).map((box, i) => {
          return (
            <Node
              pos={findPos(box)}
              selectMode={selectMode}
              parentNode={parentNode}
              node={box}
              key={i}
              moveNode={(position) => moveNode(box, position)}
              editNodeTitle={(title) => editNodeTitle(box, title)}
            />
          );
        })}
        {Object.values(connections).map((line, i) => (
          <Connection
            editConnection={(title) => editConnection(line, title)}
            key={i}
            line={line}
          />
        ))}
      </Xwrapper>
      {/* <SelectNodeModal /> */}
    </div>
  );
};
export default GraphScreen;
