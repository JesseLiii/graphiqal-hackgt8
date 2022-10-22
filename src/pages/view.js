import NodeScreen from '../screens/NodeScreen';
import TabBar from '../components/TabBar';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';

const View = () => {
  return (
    <div>
      <TabBar />
      <NodeScreen></NodeScreen>
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
        <AddNodeButton />
        <AddConnectionButton />
      </div>
    </div>
  );
};

export default View;
