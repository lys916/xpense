import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fireAuth } from "./config/firebase";
import { signOut } from './actions/userAction';

class Settings extends React.Component {

	state = {}

	handleSignOut = () => {
		this.props.signOut(this.props.history);
	}

	render() {
		return (
			<div className="new-trans">
				Settings component
				<button onClick={this.handleSignOut}>singOut</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, { signOut })(Settings);