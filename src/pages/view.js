import NodeScreen from '../screens/NodeScreen';
import TabBar from '../components/TabBar';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';
import { useState } from 'react';
import GraphScreen from '../screens/GraphScreen';

const View = () => {
  const [activeState, setActiveState] = useState(1);

  const addConnection = () => {
    if (activeState == 1) {
    }
  };

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
      {activeState == 2 && <GraphScreen />}
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
        <AddNodeButton activeState={activeState} />
        <AddConnectionButton />
      </div>
    </div>
  );
};

export default View;
