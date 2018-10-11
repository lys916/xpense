import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import CardContent from '@material-ui/core/CardContent';
// import { Link } from 'react-router-dom';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

class MyTrans extends React.Component {
	state = {
		open: false,
	};
	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		const { transactions, classes } = this.props;
		return (
			<div className={classes.root}>
				{transactions.map(trans => {
					return (
						<CardActionArea className={classes.card}>
							<Card>
								<CardContent>
									{trans.title}
								</CardContent>
							</Card>
						</CardActionArea>
					)
				})}
				<Button variant="fab" color="primary" aria-label="Add" className={classes.button} onClick={this.handleOpen}>
					<AddIcon />
				</Button>

				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.state.open}
					onClose={this.handleClose}
				>
					<div className={classes.paper}>
					
						<TextField
							id="standard-dense"
							label="Title"
							className={classes.input}
							margin="dense"
							// InputProps={{
							// 	startAdornment: <InputAdornment position="start">$</InputAdornment>,
							//  }}
						/>
						<TextField
							id="standard-multiline-static"
							label="Description"
							multiline
							rows="2"
							//  defaultValue="Default Value"
							className={classes.input}
							margin="normal"
						/>
						<TextField
							id="standard-dense"
							label="$ Amount"
							className={classes.input}
							margin="dense"
							// InputProps={{
							// 	startAdornment: <InputAdornment position="start">$</InputAdornment>,
							//  }}
						/>
						<Button variant="contained" color="primary" className={classes.save} onClick={this.handleSignIn}>
							Save
						</Button>
					</div>
				</Modal>

			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		transactions: state.transactions
	}
}
// initialize prop classes
MyTrans.propTypes = {
	classes: PropTypes.object.isRequired,
};

const styles = theme => ({
	paper: {
		  position: 'relative',
		width: '90%',
		height: '70vh',
		margin: '10px auto',
		padding: '0px 10px',
		//   width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		//   padding: theme.spacing.unit * 4,
	},
	root: {
		paddingTop: 70,
		paddingBottom: 100
	},
	card: {
		marginRight: "100px",
		width: '100%',
		textAlign: 'left'
	},
	button: {
		position: 'fixed',
		bottom: 80,
		right: 10
	},
	input: {
		width: '100%',
	},
	save: {
		width: '100%',
		margin: '20px 0px'
	}
});

// const styles = {
// 	root: {
// 		paddingTop: 70,
// 		paddingBottom: 100,
// 	},
// 	card: {
// 		marginRight: "100px",
// 		width: '100%',
// 		textAlign: 'left'
// 	},
// 	button: {
// 		position: 'fixed',
// 		bottom: 80,
// 		right: 10
// 	}
// };


export default connect(mapStateToProps, {})(withStyles(styles)(MyTrans));
