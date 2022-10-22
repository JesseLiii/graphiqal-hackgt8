import NodeScreen from '../screens/NodeScreen';
import TabBar from '../components/TabBar';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';
import { useState, useRef } from 'react';
import GraphScreen from '../screens/GraphScreen';
import colours from '../assets/colours';

const View = () => {
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
  const parentNode = 'parentNode';
  const [nodes, setNodes] = useState([
    {
      id: 'parentNode',
      x: 50,
      y: 20,
      reference: useRef(null),
    },
    { id: 'box1', x: 50, y: 20, reference: useRef(null) },
    { id: 'box2', x: 20, y: 250, reference: useRef(null) },
    { id: 'box3', x: 350, y: 80, reference: useRef(null) },
  ]);
  const [connections, setConnections] = useState([
    arrowObj('parentNode', 'box1'),
    arrowObj('box1', 'box2'),
    arrowObj('box2', 'box3'),
    arrowObj('box3', 'box1'),
  ]);

  const changeState = (newState) => {
    setActiveState(newState);
  };

  return (
    <div>
      <TabBar
        changeState={(newState) => changeState(newState)}
        activeState={activeState}
      />
      {activeState == 1 && <NodeScreen />}
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
