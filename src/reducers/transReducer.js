
// import { LOGGED_IN, LOGGED_OUT } from '../actions/userAction';
// initial user state
let dummyTrans = [
	{
		title: 'Transaction title 1',
		desc: 'Transaction description 1',
		count: 3,
		amount: '$40',
		id: 1
	},
	{
		title: 'Transaction title 2',
		desc: 'Transaction description 2',
		count: 5,
		amount: '$40',
		id: 2
	},
	{
		title: 'Transaction title 3',
		desc: 'Transaction description 4',
		count: 7,
		amount: '$40',
		id: 3
	}
]
// if user exists in local storage, assign username to user initial name
// const user = JSON.parse(localStorage.getItem('user'));
// if(user){
// 	userInit = user;
// }

const transReducer = (state = dummyTrans, action) => {
	switch (action.type) {

		default:
		console.log('returning transactions');
			return state;
	}
};

export default transReducer;