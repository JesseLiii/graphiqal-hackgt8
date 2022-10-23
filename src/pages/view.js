import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import AddConnectionButton from '../components/AddConnectionButton';
import AddNodeButton from '../components/AddNodeButton';
import TabBar from '../components/TabBar';
import GraphScreen from '../screens/GraphScreen';
import NodeScreen from '../screens/NodeScreen';

import { mockconnections, mockdata, mockviewnodes } from '../helpers/mockdata';

const View = ({ data }) => {
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
    setViews(newView);
  };

  const changeState = (newState) => {
    setActiveState(newState);
  };

  //modal stuff
  const [checked, setChecked] = useState({});
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    const newTitle = 'connection' + Object.keys(connections).length;
    let node1 = Object.keys(checked)[0];
    let node2 = Object.keys(checked)[1];
    let newConnection = {
      id: newTitle,
      title: '',
      content: [],
      type: 'parent',
      nodes: [node1, node2],
    };
    connections[newTitle] = newConnection;
    setConnections({ ...connections });
    setOpen(false);
    setChecked({});
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked[value];

    if (!currentIndex) {
      checked[value] = true;
    } else {
      delete checked[value];
    }

    setChecked({ ...checked });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box
          sx={{
            ...style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <h2 id='child-modal-title'>Select two nodes to connect</h2>
          <Paper
            sx={{
              width: '100%',
              overflow: 'auto',
              margin: 10,
            }}
          >
            <List dense component='div' role='list'>
              {Object.values(nodes).map((node) => {
                return (
                  <ListItem
                    key={node.id}
                    role='listitem'
                    button
                    onClick={handleToggle(node.id)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        checked={checked[node.id]}
                        tabIndex={-1}
                        disableRipple
                        // inputProps={{
                        //   'aria-labelledby': node.title,
                        // }}
                      />
                    </ListItemIcon>
                    <ListItemText id={node.id} primary={node.title} />
                  </ListItem>
                );
              })}
              <ListItem />
            </List>
          </Paper>
          <Button onClick={handleClose}>Create Connection</Button>
        </Box>
      </Modal>
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
          }}
          parentNode={parentNode}
          connections={connections}
        />
        <AddConnectionButton
          addConnection={(newConnection) => {
            setConnections([...connections, newConnection]);
          }}
          onClick={handleOpen}
        />
      </div>
    </div>
  );
};

export default View;
