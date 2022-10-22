import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import colours from '../assets/colours';
const TabBar = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor={colours.p2}
      aria-label='secondary tabs example'
    >
      <Tab value='one' label='Detail View' />
      <Tab value='two' label='Graph View' />
    </Tabs>
  );
};
export default TabBar;
