import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import agent from "../../../api/agent";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const HomePage = (currentUser) => {

  return (
    <div className="home-page">
      <div className="row">
        <div className="col-12 p-4 pb-0">
          <h2>Dashboard</h2>
        </div>
      </div>

      <div className="row m-2">

        <Fragment>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-3 text-white">
            <div className="bg-primary bg-gradient min-ht-120p">
              <div className="p-3 row">
                <div className="col-lg-4 col-md-12 p-lg-0 text-center">
                  <i className="fas fa-users fa-3x"></i>
                </div>
                <div className="col-lg-8 col-md-12 pt-md-2 pt-lg-0">
                  <h5 className="wrap-text">Social Impact</h5>
                </div>
              </div>
              <div className="row m-0 p-2 transparent-bg">
                <div className="col-12 text-center">
                  <h3>0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-3 text-white">
            <div className="bg-danger bg-gradient min-ht-120p">
              <div className="p-3 row">
                <div className="col-lg-4 col-md-12 p-lg-0 text-center">
                  <i className="fas fa-dollar-sign fa-3x"></i>{" "}
                </div>
                <div className="col-lg-8 col-md-12 pt-md-2 pt-lg-0">
                  <h5 className="wrap-text">Debtcoins Earned</h5>
                </div>
              </div>
              <div className="row m-0 p-2 transparent-bg">
                <div className="col-12 text-center">
                  <h3>0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-3 text-white">
            <div className="bg-dark bg-gradient min-ht-120p">
              <div className="p-3 row">
                <div className="col-lg-5 col-md-12 p-lg-0 text-center">
                  <i className="fas fa-calendar-day fa-3x"></i>
                </div>
                <div className="col-lg-7 col-md-12 pt-md-2 pt-lg-0">
                  <h5 className="wrap-text">
                    Total Events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                </div>
              </div>
              <div className="row m-0 p-2 transparent-bg">
                <div className="col-12 text-center">
                  <h3>0</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 p-3 text-white">
            <div className="bg-success bg-gradient min-ht-120p">
              <div className="row p-3">
                <div className="col-lg-5 col-md-12 p-lg-0 text-center">
                  <i className="fas fa-praying-hands fa-3x"></i>
                </div>
                <div className="col-lg-7 col-md-12 pt-md-2 pt-lg-0">
                  <h5 className="wrap-text">
                    Total Days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                </div>
              </div>
              <div className="row m-0 p-2 transparent-bg">
                <div className="col-12 text-center">
                  <h3>0</h3>
                </div>
              </div>
            </div>

          </div>
        </Fragment>

      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, null)(HomePage);
