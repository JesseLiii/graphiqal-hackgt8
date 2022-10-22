export const mockdata = {
	id1: {
		title: 'Parent Node - PMA',
		content: [],
		connections: {
			id2: 'connection1-2',
			id3: 'connection1-3',
		},
	},
	id2: {
		title: 'Pain Point 1',
		content: [],
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
