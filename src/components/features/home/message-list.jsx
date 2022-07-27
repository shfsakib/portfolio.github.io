import React from 'react'
import { Dropdown } from 'react-bootstrap'

const MessageList = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-messages" className="dropdown-basic">
                    <i className="far fa-comments"></i><sup className="bg-red">3</sup>
                </Dropdown.Toggle>
                <Dropdown.Menu className="drop-body">
                    <div className="col-12">
                        <div className="row mrl-0 message-row">
                            <div className="col-3 p-2 d-flex">
                                <img src="/dist/img/user-pro.png" />
                            </div>
                            <div className="col-9">
                                <div className="msg-title">Mohammad Sakib Hossain</div>
                                <div className="msg-sub-title">Call me whenever you can...</div>
                                <div className="msg-time"><i className="fas fa-clock fa-sm"></i>&nbsp;4 Hours ago</div>
                            </div>
                            <hr className="m-0" />
                        </div>
                        <div className="row mrl-0 message-row">
                            <div className="col-3 p-2 d-flex">
                                <img src="/dist/img/user-pro.png" />
                            </div>
                            <div className="col-9">
                                <div className="msg-title">Robin Haider</div>
                                <div className="msg-sub-title">I got your message bro</div>
                                <div className="msg-time"><i className="fas fa-clock fa-sm"></i>&nbsp;4 Hours ago</div>
                            </div>
                            <hr className="m-0" />
                        </div>
                        <div className="row mrl-0 message-row">
                            <div className="col-3 p-2 d-flex">
                                <img src="/dist/img/user-pro.png" />
                            </div>
                            <div className="col-9">
                                <div className="msg-title">Robin Haider</div>
                                <div className="msg-sub-title">I got your message bro</div>
                                <div className="msg-time"><i className="fas fa-clock fa-sm"></i>&nbsp;4 Hours ago</div>
                            </div>
                            <hr className="m-0" />
                        </div>
                    </div>

                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default MessageList
