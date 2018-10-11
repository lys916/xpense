import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import CardContent from '@material-ui/core/CardContent';
// import { Link } from 'react-router-dom';

class MyTrans extends React.Component {
	render() {
		const { transactions, classes } = this.props;
		return (
			<div className={classes.root}>
				{transactions.map(trans=>{
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
				<Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
					<AddIcon />
				</Button>
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

const styles = {
	root: {
		height: '100vh'
	},
	card: {
		margin: '5px 0px',
		width: '100%',
		textAlign: 'left'
	},
	button: {
		position: 'absolute',
		bottom: 80,
		right: 10
	}
};


export default connect(mapStateToProps, {})(withStyles(styles)(MyTrans));
