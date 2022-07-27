import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../../redux/user/user.action';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import MessageList from './message-list';
import NotificationList from './notification-list';

const TopNav = ({
  sideMenu,
  setsideMenu,
  currentUser,
  setCurrentUser,
}) => {

  const signout = () => {
    setCurrentUser(null);
  };
  return (
    <>
      <div className='home-content'>
        <a onClick={() => setsideMenu(!sideMenu)}>
          <i
            className='fas fa-bars'
            id='btn-side-menu'
          ></i>
        </a>
        {/* <span className="text">Home</span>
                    <span className="text">App</span> */}
        <ul className='top-nav-link'>
          {/* <li>
            <span className='top-buttons'>
              <MessageList />
            </span>
          </li>
          <li>
            <span className='top-buttons'>
              <NotificationList />
            </span>
          </li> */}
          <li>
            <span className='top-buttons'>
              <Dropdown>
                <Dropdown.Toggle
                  id='dropdown-profile'
                  className='dropdown-basic'
                >
                  <img src='/dist/img/user-pro.png' />
                </Dropdown.Toggle>
                <Dropdown.Menu className='drop-profile'>
                  <Dropdown.Item as={Link} to='/edit-profile'>
                    Edit Profile
                  </Dropdown.Item>
                  <a className='dropdown-item' href='#' onClick={signout}>Log out</a>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
