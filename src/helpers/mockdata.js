export const mockdata = {
	id1: {
		title: 'Parent Node - PMA',
		content: [
			{
				_id: 'l9kqq7kytgj7gqpsf2',
				html: 'PMA',
				tag: 'h1',
				imageUrl: '',
			},
			{
				_id: '6354a92260f8431027f5c05d',
				tag: 'h3',
				html: 'Pain Point 1',
				imageUrl: '',
			},
			{
				_id: '6354a93fb9664d50cbb7457c',
				tag: 'p',
				html: 'Paragraph about pain point 1',
				imageUrl: '',
			},
			{
				_id: '6354a9447dc8fbeeab8c7422',
				tag: 'h3',
				html: 'Pain Point 2',
				imageUrl: '',
			},
			{
				_id: '6354a955cf6add6b4e4e54f0',
				tag: 'p',
				html: '',
				imageUrl: '',
			},
			{
				_id: '6354a94c4bf97cf84f6d11b4',
				tag: 'p',
				html: 'example data structure',
				imageUrl: '',
			},
			{
				_id: '6354a923c5994750dcea49aa',
				tag: 'h3',
				node_id: 'id2',
			},
			{
				_id: '6354a923c5994750dcea491e',
				tag: 'p',
				html: 'heehee',
				imageUrl: '',
			},
		],
		connections: {
			id2: 'connection1-2',
			id3: 'connection1-3',
		},
	},
	id2: {
		title: 'Pain Point 1',
		content: [
			{
				_id: '6354a923c5994750dcea491asd',
				tag: 'p',
				html: 'I fucking hate feeling like a dumbass after coming back to my code',
				imageUrl: '',
			},
		],
		connections: {
			id4: 'connection2-4',
			id5: 'connection2-5',
		},
	},
	id3: {
		title: 'Piano Point 2',
		content: [],
		connections: {
			id5: 'connection3-5',
		},
	},
	id4: {
		title: 'Feature 1',
		content: [],
	},
	id5: {
		title: 'Feature 2',
		content: [],
	},
};

export const mockconnections = {
	'connection1-2': {
		title: '',
		content: [],
		type: 'parent',
		nodes: ['id1', 'id2'],
	},
	'connection1-3': {
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id1', 'id3'],
	},
	'connection2-4': {
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id2', 'id4'],
	},
	'connection2-5': {
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id2', 'id5'],
	},
	'connection3-5': {
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id3', 'id5'],
	},
};

export const mockviewnodes = {
	id1: [
		{
			title: 'Graph PMA',
			content: {
				id: {
					pos: {
						x: '900',
						y: '900',
					},
				},
			},
			type: 'graph',
		},
		{
			title: 'Detail PMA',
			content: [],
			type: 'detail',
		},
	],
};
