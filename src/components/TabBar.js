import Tab from './Tab';
const TabBar = () => {
	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				flexDirection: 'row',
				// justifyContent: 'space-around',
				width: '100%',
				height: '5vh',
			}}
		>
			<Tab />
			<Tab />
			<Tab />
		</div>
	);
};
export default TabBar;
