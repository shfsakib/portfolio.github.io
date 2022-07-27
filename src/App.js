import { Fragment, Suspense, useEffect } from 'react';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import LogIn from './components/pages/log-in';
import Register from './components/pages/register';
import Dashboard from './components/pages/dashboard';
import NotFound from './components/pages/not-found';
import PreLoader from './components/pages/pre-loader';

const App = ({ currentUser }) => {

  return (
    <Fragment>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          {
            currentUser !== null ?
              <Fragment>
                <Route path=""
                  element={<Navigate to="/login" replace />} />
                <Route path="home"
                  element={<Navigate to="/login" replace />} />
                <Route exact path='login' element={<LogIn />}></Route>
                <Route exact path='register' element={<Register />}></Route>
              </Fragment>
              :
              <Fragment >
                (<Route exact path='*' element={<Dashboard />}>
                  <Route path='*' element={<NotFound />} />
                </Route>)
              </Fragment>
          }
        </Routes>
      </Suspense>
    </Fragment >
  );
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(App);