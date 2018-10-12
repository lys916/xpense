// import { fireDatabase, fireAuth } from "../config/firebase";
import { tranRef } from "../config/firebase";


export const addTran = (tran) => {
	return (dispatch) => {
        tranRef.push().set(tran, function(res){
            console.log('after add?', res);
        });
	// 	fireAuth.createUserWithEmailAndPassword(user.email, user.password)
	// 	.then(function(res){
	// 		localStorage.setItem('user', JSON.stringify(res.user));
	// 		const user = localStorage.getItem('user');
	// 		console.log('local user', user);
	// 		dispatch({
	// 			type: 'LOGGED_IN',
	// 			payload: res.user
	// 		});

	// 	}).catch(function(error) {
	// 	// Handle Errors here.
	// 	var errorCode = error.code;
	// 	var errorMessage = error.message;
	// 	if (errorCode == 'auth/weak-password') {
	// 		alert('The password is too weak.');
	// 	} else {
	// 		alert(errorMessage);
	// 	}
	// 	console.log(error);
	// 	});
	}
}

export const fetchTrans = () => {
    console.log('fetching');
    return (dispatch) => {
        tranRef.on("value", snapshot => {
            console.log('tran snapshot', snapshot.val());
            dispatch({
              type: 'FETCHED_TRANS',
              payload: snapshot.val()
            });
          });
    }
}
// export const signIn = (user) => {
// 	return (dispatch) => {
// 		fireAuth.signInWithEmailAndPassword(user.email, user.password)
// 		.then(function(res){
// 			localStorage.setItem('user', JSON.stringify(res.user));
// 			const user = localStorage.getItem('user');
// 			console.log('local user', user);
// 			dispatch({
// 				type: 'LOGGED_IN',
// 				payload: res.user
// 			});

// 		}).catch(function(error) {
// 		// Handle Errors here.
// 		var errorCode = error.code;
// 		var errorMessage = error.message;
// 		if (errorCode == 'auth/weak-password') {
// 			alert('The password is too weak.');
// 		} else {
// 			alert(errorMessage);
// 		}
// 		console.log(error);
// 		});
// 	}
// }

// export const signOut = (history) => {
// 	return (dispatch) => {
// 		fireAuth.signOut().then(function() {
// 			localStorage.removeItem('user');
// 			dispatch({ type: 'LOGGED_OUT' });
// 			history.push('/login');
// 		 }).catch(function(error) {
// 			// An error happened.
// 			alert('Unable to sign out');
// 			console.log(error);
// 		});
// 	}
//   }
