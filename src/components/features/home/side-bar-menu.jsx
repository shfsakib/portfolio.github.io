import React, { useState, Fragment } from "react";
import { Dropdown, Fade } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import agent from "../../../api/agent";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { confirmAlert } from "react-confirm-alert";

const SideBarMenu = ({ currentUser }) => {
  const [paymentCollpase, setPaymentCollapse] = useState(false);

  return (
    <>
      <ul className="nav-links">
        <Fragment>
          <li>
            <NavLink to="/home">
              <i className="fas fa-home"></i>
              <span className="link-name">DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/owners`} activeclassname="active">
              <i className="fas fa-users"></i>
              <span className="link-name">Owners</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/properties`} activeclassname="active">
              <i className="fas fa-house-circle-check"></i>
              <span className="link-name">Properties</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/tenants`} activeclassname="active">
              <i className="fas fa-building-user"></i>
              <span className="link-name">Tenants</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/contracts`} activeclassname="active">
              <i className="fas fa-file-signature"></i>
              <span className="link-name">Contracts</span>
            </NavLink>
          </li>
          <li>
            <div
              className='icon-link'
              onClick={() => setPaymentCollapse(!paymentCollpase)}
              aria-controls='example-collapse-text'
              aria-expanded={paymentCollpase}
            >
              <a>
                <i className='fas fa-money-check-dollar'></i>
                <span className='link-name'>Payments</span>
              </a>
              {!paymentCollpase ? (
                <i className='fas fa-chevron-right'></i>
              ) : (
                <i className='fas fa-chevron-down'></i>
              )}
            </div>
            <Collapse in={paymentCollpase}>
              <ul className='sub-menu' id='example-collapse-text'>
                <li className="p-2">
                  <NavLink to='/paid' activeclassname="active">
                    <i className='far fa-circle nav-icon' />
                    <span className='link-name'>Paid</span>
                  </NavLink>
                </li>
                <li className="p-2">
                  <NavLink to='/unpaid' activeclassname="active">
                    <i className='far fa-circle nav-icon' />
                    <span className='link-name'>Unpaid</span>
                  </NavLink>
                </li>
              </ul>
            </Collapse>
          </li>
          <div className="col-12 text-white p-2 mt-2 mb-2">
            <h6>Reports</h6>
          </div>
          <li>
            <NavLink to="/monthly-rent">
              <i className="fas fa-file-lines"></i>
              <span className="link-name">Monthly Rent Report</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/monthly-count">
              <i className="fas fa-file-invoice"></i>
              <span className="link-name">Total Count Reports</span>
            </NavLink>
          </li>
        </Fragment>


        {/* <li>
          <div
            className='icon-NavLink'
            onClick={() => setManageUserCollapse(!manageUserCollapse)}
            aria-controls='example-collapse-text'
            aria-expanded={manageUserCollapse}
          >
            <NavLink>
              <i className='far fa-id-badge'></i>
              <span className='link-name'>Manage User</span>
            </NavLink>
            {!manageUserCollapse ? (
              <i className='fas fa-chevron-right'></i>
            ) : (
              <i className='fas fa-chevron-down'></i>
            )}
          </div>
          <Collapse in={manageUserCollapse}>
            <ul className='sub-menu' id='example-collapse-text'>
              <li>
                <NavNavLink to='/manage-user/add'>
                  <i className='far fa-circle nav-icon' />
                  <span className='link-name'>Add User</span>
                </NavNavLink>
              </li>
              <li>
                <NavNavLink to='/manage-user'>
                  <i className='far fa-circle nav-icon' />
                  <span className='link-name'>Manage Users</span>
                </NavNavLink>
              </li>
            </ul>
          </Collapse>
        </li> */}
      </ul>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(SideBarMenu);
