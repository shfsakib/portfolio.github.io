import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import HomePage from './components/features/home/home-page';
import NotFound from './components/pages/not-found';
import Owners from './components/pages/owners';
import { selectCurrentUser } from './redux/user/user.selector';

const AppRoutes = ({ currentUser }) => {

    return (
        <Fragment>
            <Routes>
                {
                    currentUser === null &&
                    <Fragment>
                        <Route path=""
                            element={<Navigate to="/home" replace />} />
                        <Route path="login"
                            element={<Navigate to="/home" replace />} />
                        <Route path="register"
                            element={<Navigate to="/home" replace />} />
                        <Route exact path='home' element={<HomePage />}></Route>
                        <Route exact path='owners' element={<Owners />}></Route>
                        <Route path='*' element={<NotFound />} />
                    </Fragment>

                }
            </Routes>
        </Fragment>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(AppRoutes)