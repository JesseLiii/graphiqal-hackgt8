import Node from '../screens/GraphScreenComponents.js/Node';
import { Fab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import colours from '../assets/colours';

const AddNodeButton = ({ addNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: colours.accent1,
      },
      secondary: {
        // This is green.A700 as hex.
        main: colours.accent2,
      },
    },
  });

  const newRef = useRef(null);
  return (
    <div
      onClick={() =>
        addNode({ id: 'newNode', x: 350, y: 80, reference: newRef })
      }
    >
      <ThemeProvider theme={theme}>
        <Fab color='secondary' aria-label='add'>
          <FontAwesomeIcon icon={faCircle} color={colours.p1} />
        </Fab>
      </ThemeProvider>
    </div>
  );
};
export default AddNodeButton;
