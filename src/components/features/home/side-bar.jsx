import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../redux/user/user.selector';
import ProfileContent from './profile-content';
import SideBarMenu from './side-bar-menu';

const SideBar = ({ sideMenu, currentUser }) => {
    return (
        <>
            <div className={`side-bar ${sideMenu ? '' : 'close'}`}>
                <div className="logo-content">
                    <Link to="/dashboard" className="brand-link">
                        <img src="/dist/img/house.png" alt="logo" />
                        {/* <i className="fas fa-building"></i> */}
                        <div className="logo-name">RMS</div>
                        {/* <i className="fas fa-bars" id="btn-bar"></i> */}
                    </Link>
                </div>
                <SideBarMenu />
                <ProfileContent />
            </div>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(SideBar)
