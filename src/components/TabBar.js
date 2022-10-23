import { Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import colours from '../assets/colours';
const TabBar = ({ activeState, changeState, views }) => {
  console.log('views' + JSON.stringify(views));
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeState(activeState == 0 ? 1 : 0);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: colours.p1,
      },
      secondary: {
        main: colours.p2,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor={colours.p2}
        aria-label='secondary tabs example'
        indicatorColor='secondary'
      >
        {Object.values(views).map((view, i) => {
          console.log('curr view' + JSON.stringify(view) + ' ' + i);
          console.log(view.title);
          return <Tab value={i} key={i} label={view.title} />;
        })}
      </Tabs>
    </ThemeProvider>
  );
};
export default TabBar;
