import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { setCurrentUser } from '../../../redux/user/user.action'
import { selectCurrentUser } from '../../../redux/user/user.selector'

const ProfileContent = ({ currentUser, setCurrentUser }) => {

    const handleSignOut = () => {
        setCurrentUser(null);
    };

    return (
        <>
            <div className="profile-content pb-3">
                <div className="profile">
                    <div className="profile-details">
                        <img src="/dist/img/user-pro.png" alt="profile" />
                        <div className="name-job">
                            <div className="name">
                                Admin
                                {/* {currentUser &&
                                    currentUser.UserType === 'admin' ?
                                    currentUser.FullName :
                                    currentUser.FirstName + ' ' + currentUser.LastName
                                } */}
                                {/* {`${currentUser.FirstName} ${currentUser.LastName}`} */}
                            </div>
                            <div className="job">{currentUser &&
                                (currentUser.UserType.slice(0, 1).toUpperCase()
                                    + currentUser.UserType.slice(1))}</div>
                            {/* <div className="job">{currentUser.roles[0].charAt(0).toUpperCase()+currentUser.roles[0].slice(1)}</div> */}
                        </div>
                    </div>
                    {/* <span onClick={handleSignOut}><i className="fas fa-sign-out-alt" id="log-out"></i></span> */}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContent);
