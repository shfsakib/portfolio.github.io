import React from 'react'
import { Dropdown } from 'react-bootstrap'

const NotificationList = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-notification" className="dropdown-basic">
                    <i className="far fa-bell"></i><sup className="bg-green">3</sup>
                </Dropdown.Toggle>
                <Dropdown.Menu className="drop-notify">
                    <Dropdown.Item href="#/action-1" className="dropdown-anchor-height text-center">15 Notifications</Dropdown.Item>
                    <div className="col-12">
                        <div className="row mrl-0 notify-row">
                            <div className="col-2 p-2 d-flex">
                                <i className="fas fa-envelope notify-i"></i>
                            </div>
                            <div className="col-7">
                                <div className="notify-title">4 new messages</div>
                            </div>
                            <div className="col-3">
                                <div className="notify-time text-center">12 Hours</div>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="row mrl-0 notify-row">
                            <div className="col-2 p-2 d-flex">
                                <i className="fas fa-users notify-i"></i>
                            </div>
                            <div className="col-7">
                                <div className="notify-title">8 friend requests</div>
                            </div>
                            <div className="col-3">
                                <div className="notify-time text-center">14 Hours</div>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="row mrl-0 notify-row">
                            <div className="col-2 p-2 d-flex">
                                <i className="fas fa-file notify-i"></i>
                            </div>
                            <div className="col-7">
                                <div className="notify-title">3 new reports</div>
                            </div>
                            <div className="col-3">
                                <div className="notify-time text-center">14 Hours</div>
                            </div>
                        </div>
                        <hr className="m-0" />
                    </div>
                    <Dropdown.Item href="#/action-1" className="dropdown-anchor-height text-center">See All Notifications</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default NotificationList
