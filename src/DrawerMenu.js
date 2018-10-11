import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const DrawerMenu = ({ openMenu, toggleDrawer, classes }) => {
	return (
		<Drawer anchor="right" open={openMenu} onClose={toggleDrawer}>
			<div
				tabIndex={0}
				role="button"
				onClick={toggleDrawer}
				onKeyDown={toggleDrawer}
				className={classes.menu}>
				{/* MENU LIST */}
				<List component="nav">
					<Link to="/my-trans">
					<ListItem button>
						<ListItemText primary="Menu 1" />
					</ListItem>
					</Link>

					<Link to="/new-tran">
						<ListItem button>
							<ListItemText primary="Menu 2" />
						</ListItem>
					</Link>

					<ListItem button>
						<ListItemText primary="Menu 3" />
					</ListItem>

				</List>
			</div>
		</Drawer>
	)
}

const styles = {
	menu: {
		width: '50vw'
	}
};

DrawerMenu.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerMenu);