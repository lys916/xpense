import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class UserList extends React.Component {

	state = {}
	render() {
		return (
			<div className="new-trans">
				User list component
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, {})(UserList);