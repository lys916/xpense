import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


class UserList extends React.Component {

	state = {}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				User list component
			</div>
		);
	}
}

const styles = {
	root: {
		paddingTop: 100
	}
};

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, { })(withStyles(styles)(UserList));
