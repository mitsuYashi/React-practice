import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
// import firebase from './firebase';

// import Home from './Home';
// import Profile from './Profile';
import SignIn from './SignIn';
import SignUp from './SignUp';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={SignIn} />
				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
				{/* <Route exact path="/" component={Home} />
				<Route exact path="/profile" component={Profile} />
				<Route render={() => <p>not found.</p>} /> */}
			</Switch>
		</Router>
	);
}

export default App;

ReactDOM.render(
    <App />,
  document.getElementById('root')
);