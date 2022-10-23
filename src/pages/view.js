import NodeScreen from '../screens/NodeScreen';
import TabBar from '../components/TabBar';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';
import { useState, useRef } from 'react';
import GraphScreen from '../screens/GraphScreen';
import colours from '../assets/colours';

import { mockdata, mockconnections, mockviewnodes } from '../helpers/mockdata';

const View = ({ data }) => {
  console.log('mock');
  console.log(mockconnections);
  console.log(mockdata);
  console.log(mockviewnodes);

  const [activeState, setActiveState] = useState(0);
  const [selectMode, setSelectMode] = useState(true);
  const [selectedNodes, setSelectedNodes] = useState([]);
  const parentNode = 'id1';

  const [nodes, setNodes] = useState(mockdata);
  const changeNodes = (newNodes) => {
    setNodes(newNodes);
  };

  const [connections, setConnections] = useState(mockconnections);

  const changeConnections = (newConnections) => {
    setConnections(newConnections);
  };

  const [views, setViews] = useState(mockviewnodes);

  const changeView = (newView) => {
    console.log('old' + JSON.stringify(views));

    console.log('new' + JSON.stringify(newView));
    setViews(newView);
  };

  const changeState = (newState) => {
    setActiveState(newState);
  };

  return (
    <div>
      <TabBar
        views={views[parentNode]}
        changeState={(newState) => changeState(newState)}
        activeState={activeState}
      />
      {activeState == 0 && <NodeScreen />}
      {activeState == 1 && (
        <GraphScreen
          views={views}
          parentNode={parentNode}
          nodes={nodes}
          connections={connections}
          selectMode={selectMode}
          selectedNodes={selectedNodes}
          changeView={(newView) => changeView(newView)}
          changeConnections={(newConnections) =>
            changeConnections(newConnections)
          }
          changeNodes={(newNodes) => changeNodes(newNodes)}
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
          nodes={nodes}
          addNode={(newNodes) => {
            changeNodes(newNodes);
            console.log('new nodes' + JSON.stringify(newNodes));
          }}
          parentNode={parentNode}
          connections={connections}
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
