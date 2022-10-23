import { Fab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import colours from '../assets/colours';

const AddConnectionButton = ({ addConnection, onClick }) => {
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

  return (
    <div onClick={onClick}>
      <ThemeProvider theme={theme}>
        <Fab color='primary' aria-label='add'>
          <FontAwesomeIcon
            fontSize={20}
            icon={faCircleNodes}
            color={colours.p1}
          />
        </Fab>
      </ThemeProvider>
    </div>
  );
};
export default AddConnectionButton;
