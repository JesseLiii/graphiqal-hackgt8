import React, { useState, createRef, useEffect } from 'react';
import usePrevious from '../../helpers/usePrevious';
import ContentEditable from 'react-contenteditable';

const EditableBlock = (props) => {
	console.log('props');
	console.log(props);

	const [data, setdata] = useState({
		html: '',
		tag: 'p',
	});

	const contentEditable = createRef();
	const prevData = usePrevious(data);

	useEffect(() => {
		// Your code here
		setdata({ html: props.html, tag: props.tag });
	}, []);

	useEffect(() => {
		// Your code here
		console.log('prevData');
		console.log(prevData);
		console.log(data);

		if (!prevData) return;

		const htmlChanged = prevData.html !== data.html;
		const tagChanged = prevData.tag !== data.tag;
		if (htmlChanged || tagChanged) {
			props.updatePage({
				id: props.id,
				html: data.html,
				tag: data.tag,
			});
		}
	}, [data]);

	const onChangeHandler = (e) => {
		console.log('change');
		console.log({ html: e.target.value });
		console.log({ ...data, html: e.target.value });
		setdata({ ...data, html: e.target.value });
	};

	const onKeyDownHandler = (e) => {
		if (e.key === '/') {
			setdata({ htmlBackup: data.html });
		}

		if (e.key === 'Enter') {
			if (data.previousKey !== 'Shift') {
				e.preventDefault();
				props.addBlock({
					id: props.id,
					ref: contentEditable.current,
				});
			}
		}
		if (e.key === 'Backspace' && !data.html) {
			e.preventDefault();
			props.deleteBlock({
				id: props.id,
				ref: contentEditable.current,
			});
		}

		// setdata({ ...data, html: e.target.value });
	};

	return (
		<ContentEditable
			className='Block'
			innerRef={contentEditable}
			html={data.html}
			tagName={data.tag}
			onChange={onChangeHandler}
			onKeyDown={onKeyDownHandler}
		/>
	);
};

export default EditableBlock;
