import React from 'react';
import { connect } from 'react-redux';
import HeaderBar from './HeaderBar';
import IconTabs from './Tabs';

// import { Link } from 'react-router-dom';

class Home extends React.Component {

	state = {
	}

	componentDidMount() {
		console.log('comp mount');
		const path = this.props.history.location.pathname;
		
	}

	render() {
		const path = this.props.history.location.pathname;
		return (
			<div className="home">
			{console.log('IN HOME')}
				<HeaderBar history={this.props.history} path={path} />

				{this.props.user ? <IconTabs history={this.props.history}/> : null}
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('home user', state.user);
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {})(Home);