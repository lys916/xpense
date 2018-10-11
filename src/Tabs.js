import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/FormatListBulleted';
import FavoriteIcon from '@material-ui/icons/People';
import PersonPinIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

class IconTabs extends React.Component {
	state = {
		value: 0
	};

	componentDidMount(){
		const path = this.props.history.location.pathname;
		console.log('did mount path', path);
		if(path === '/my-trans'){
			this.setState({value: 0});
		}
		if(path === '/user-list'){
			this.setState({value: 1});
		}
		if(path === '/settings'){
			this.setState({value: 2});
		}
	}

	handleChange = (event, value) => {
		const history = this.props.history;
		if (value === 0) {
			history.push('/my-trans');
		}
		if (value === 1) {
			history.push('/user-list');
		}
		if (value === 2) {
			history.push('/settings');
		}
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		return (
			<Paper square className={classes.root}>
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					fullWidth
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab className={classes.tab} icon={<PhoneIcon />} label="Transactions" />
					<Tab className={classes.tab} icon={<FavoriteIcon />} label="Users" />
					<Tab className={classes.tab} icon={<PersonPinIcon />} label="settings" />
				</Tabs>
			</Paper>
		);
	}
}

Tabs.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = {
	root: {
		flexGrow: 1,
		position: 'fixed',
		bottom: 0,
		zIndex: 1,
		width: '100%'
	},
	tab: {
		width: '100%',
		fontSize: 13
	}
};

export default withStyles(styles)(IconTabs);