import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
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
				<div className='card' style={style}>
					<div>ayy ppeeepeepeopopo</div>
				</div>
			</Modal>
		</>
	);
};

export default ConnectionModal;
