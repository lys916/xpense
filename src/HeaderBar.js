import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from './DrawerMenu';

class HeaderBar extends React.Component {
	state = {
		openMenu: false
	}

	toggleDrawer = () => {
		this.setState({
			openMenu: !this.state.openMenu
		});
	};

	redirect = (path)=>{
		this.props.history.push(`/${path}`);
	}

	render() {
		const { classes, user } = this.props;
		return (
			<div className={classes.root}>

				{/* HEADER */}
				<AppBar position="static">
					<Toolbar className={classes.toolBar} >
						<Button className={classes.loginButton}
							color="inherit">XPENSE
						</Button>
						<IconButton
							// aria-owns={open ? 'menu-appbar' : null}
							aria-haspopup="true"
							onClick={this.handleMenu}
							color="inherit"
							>
							<AccountCircle />
							</IconButton>
					</Toolbar>
				</AppBar>
				<DrawerMenu openMenu={this.state.openMenu} toggleDrawer={this.toggleDrawer} />
			</div>
		);
	}
}

HeaderBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = {
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	toolBar: {
		justifyContent: 'space-between'
	}
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {})(withStyles(styles)(HeaderBar));