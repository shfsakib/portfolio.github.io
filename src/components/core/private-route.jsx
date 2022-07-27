import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';

const PrivateRoute = ({ children, currentUser, ...rest }) => {

    return (
        <Route {...rest} render={({ location }) => {
            return currentUser !== null ?
                children :
                // <Redirect to={{
                //     pathname: '/',
                //     state: { from: location }
                // }} />
                <Navigate to={{
                    pathname: '/'
                }} />
        }} />
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(PrivateRoute)
