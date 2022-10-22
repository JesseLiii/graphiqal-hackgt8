import React, { useState } from 'react';
import EditableBlock from './EditableBlock';

const uid = () => {
	return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const EditablePage = ({ props }) => {
	const [blocks, setblocks] = useState([{ id: uid(), html: '', tag: 'p' }]);

	const updatePageHandler = (updatedBlock) => {
		const tempblocks = blocks;
		const index = tempblocks.map((b) => b.id).indexOf(updatedBlock.id);
		const updatedBlocks = [...tempblocks];
		updatedBlocks[index] = {
			...updatedBlocks[index],
			tag: updatedBlock.tag,
			html: updatedBlock.html,
		};
		setblocks(updatedBlocks);
	};

	const addBlockHandler = (currentBlock) => {
		const newBlock = { id: uid(), html: '', tag: 'p' };
		const tempblocks = blocks;
		const index = tempblocks.map((b) => b.id).indexOf(currentBlock.id);
		const updatedBlocks = [...tempblocks];
		updatedBlocks.splice(index + 1, 0, newBlock);
		setblocks(updatedBlocks, () => {
			currentBlock.ref.nextElementSibling.focus();
		});
	};

	const setCaretToEnd = (element) => {
		const range = document.createRange();
		const selection = window.getSelection();
		range.selectNodeContents(element);
		range.collapse(false);
		selection.removeAllRanges();
		selection.addRange(range);
		element.focus();
	};

	const deleteBlockHandler = (currentBlock) => {
		const previousBlock = currentBlock.ref.previousElementSibling;
		if (previousBlock) {
			const tempblocks = blocks;
			const index = tempblocks.map((b) => b.id).indexOf(currentBlock.id);
			const updatedBlocks = [...tempblocks];
			updatedBlocks.splice(index, 1);
			setblocks(updatedBlocks, () => {
				setCaretToEnd(previousBlock);
				previousBlock.focus();
			});
		}
	};

	return (
		<div className='Page'>
			{blocks.map((block, key) => {
				return (
					<EditableBlock
						key={key}
						id={block.id}
						tag={block.tag}
						html={block.html}
						updatePage={updatePageHandler}
						addBlock={addBlockHandler}
						deleteBlock={deleteBlockHandler}
					/>
				);
			})}
		</div>
	);
};

export default EditablePage;
