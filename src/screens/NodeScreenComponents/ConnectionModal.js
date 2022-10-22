import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import colours from '../../assets/colours';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90vw',
	height: '90vh',
	backgroundColour: colours.p1,
};

const ConnectionModal = ({ connection }) => {
	console.log(connection);
	// const { content, nodeTitle } = connection;
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<div className='card' style={{ ...style, display: 'flex' }}>
					<div
						className='borderRight'
						style={{ flex: 1, padding: '5%' }}
					>
						<div>Connection Title</div>
						<div className='input'></div>
					</div>
					<div style={{ flex: 1, padding: '5%' }}>
						<div>Node Title </div>
						<div className='input'></div>
						{/* <div
							style={{
								position: 'absolute',
								bottom: '10px',
								right: '10px',
							}}
						>
							<Button variant='contained' color='success'>
								Save
							</Button>
						</div> */}
					</div>
				</div>
			</Modal>
		</>
	);
};

export default ConnectionModal;
