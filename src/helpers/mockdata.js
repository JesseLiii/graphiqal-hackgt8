export const mockdata = {
	id1: {
		id: 'id1',
		title: 'PM App',
		content: [
			{
				_id: '6354f158172bc25d9630159f',
				tag: 'p',
				html: 'The PMA (! PMS !) is an application to facilitate the creative process by aiding with all the steps from resource gathering, to ideating, to brainstorming, to executing.',
				imageUrl: '',
				id: '6354f158172bc25d9630159f',
			},
			{
				_id: '6354a9447dc8fbeeab8c7423',
				tag: 'h3',
				html: "Pain Point 1: Can't capture resources efficiently",
				node_id: '6354a9447dc8fbeeab8c7423',
				imageUrl: '',
			},
			{
				_id: '6354a93fb9664d50cbb7457c',
				tag: 'p',
				html: 'When looking online, sometimes we find resources that we would like to capture parts of, such as podcasts and videos, but we have no way to comment/distill these resources.',
				imageUrl: '',
				id: '6354a93fb9664d50cbb7457c',
			},
			{
				_id: '6354a9447dc8fbeeab8c7422',
				tag: 'h3',
				html: "Pain Point 2: Can't save resources in more than one place",
				node_id: '6354a9447dc8fbeeab8c7422',
				imageUrl: '',
			},
			{
				_id: '6354f29903b32db43351ac8f',
				tag: 'p',
				html: 'Existing tools are too linear and hierarchical, when we are brainstorming, things are messier. Different ideas/resources can be connected to different things',
				imageUrl: '',
				id: '6354f29903b32db43351ac8f',
			},
			{
				_id: '6354a923c5994750dcea49aa',
				tag: 'h3',
				node_id: '6354f2c61d5b956b9e7cbd16',
				title: 'Feature 1: Node + Connection View',
			},
			{
				_id: '6354a923c5994750dcea491asd',
				tag: 'p',
				html: 'This app :)',
				imageUrl: '',
				node_parent: 'id2',
				id: '6354a923c5994750dcea491asd',
			},
		],
		connections: {
			id2: 'connection1-2',
			id3: 'connection1-3',
		},
	},
	id2: {
		id: 'id2',
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
		id: 'id3',
		title: 'Piano Point 2',
		content: [],
		connections: {
			id5: 'connection3-5',
		},
	},
	id4: {
		id: 'id4',
		title: 'Feature 1',
		content: [],
	},
	id5: {
		id: 'id5',
		title: 'Feature 2',
		content: [],
	},
	'6354f2c61d5b956b9e7cbd16': {
		id: '6354f2c61d5b956b9e7cbd16',
		title: 'Feature 1: Node + Connection View',
		content: [],
		connections: {},
	},
	'6354a9447dc8fbeeab8c7423': {
		id: '6354a9447dc8fbeeab8c7423',
		title: 'Pain Point 1: No way to save resources',
		content: [
			{
				_id: '6354a93fb9664d50cbb7457c',
				tag: 'p',
				html: 'When looking online, sometimes we find resources that we would like to capture parts of, such as podcasts and videos, but we have no way to comment/distill these resources.',
				imageUrl: '',
				id: '6354a93fb9664d50cbb7457c',
			},
		],
		connections: {},
	},
	'6354a9447dc8fbeeab8c7422': {
		id: '6354a9447dc8fbeeab8c7422',
		title: "Pain Point 2: Can't save resources in more than one place",
		content: [
			{
				_id: '6354f29903b32db43351ac8f',
				tag: 'p',
				html: 'Existing tools are too linear and hierarchical, when we are brainstorming, things are messier. Different ideas/resources can be connected to different things',
				imageUrl: '',
				id: '6354f29903b32db43351ac8f',
			},
		],
		connections: {},
	},
};

export const mockconnections = {
	'connection1-2': {
		id: 'connection1-2',
		title: '',
		content: [],
		type: 'parent',
		nodes: ['id1', 'id2'],
	},
	'connection1-3': {
		id: 'connection1-3',
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id1', 'id3'],
	},
	'connection2-4': {
		id: 'connection2-4',
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id2', 'id4'],
	},
	'connection2-5': {
		id: 'connection2-5',
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id2', 'id5'],
	},
	'connection3-5': {
		id: 'connection3-5',
		title: 'Parent Node',
		content: [],
		type: 'parent',
		nodes: ['id3', 'id5'],
	},
};

export const mockviewnodes = {
	id1: [
		{
			id: 'id22',
			title: 'Detail PMA',
			content: [],
			type: 'detail',
		},
		{
			id: 'id11',
			title: 'Graph PMA',
			content: {
				// id2: {
				//   pos: {
				//     x: '100',
				//     y: '100',
				//   },
				// },
			},
			type: 'graph',
		},
	],
};
