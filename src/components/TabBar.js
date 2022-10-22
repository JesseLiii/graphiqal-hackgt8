import { Tabs, Tab } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import colours from '../assets/colours';
const TabBar = ({ activeState, changeState }) => {
	const [value, setValue] = useState('one');

	const handleChange = (event, newValue) => {
		setValue(newValue);
		changeState(activeState == 1 ? 2 : 1);
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
				<Tab value='one' label='Detail View' />
				<Tab value='two' label='Graph View' />
			</Tabs>
		</ThemeProvider>
	);
};
export default TabBar;
