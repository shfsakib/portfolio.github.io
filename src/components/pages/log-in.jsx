import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { useMutation } from 'react-query';
import agent from '../../api/agent';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import TextField from '../core/text-field';

const Login = ({ setCurrentUser }) => {
  let navigate = useNavigate();

  const { isLoading, mutate } = useMutation((values) =>
    agent.Login.loginAdmin(values), { retry: 2 }
  );

  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      Email: Yup.mixed().required(),
      Password: Yup.mixed().required(),
    }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      // mutate(values, {
      //   onSuccess: (data) => {
      //     if (data === 'Incorrect password') {
      //       toast.error('Password Mismatch');
      //     } else if (data === 'not exist') {
      //       toast.error('User doesn\'t exist');
      //     } else {
      //       setCurrentUser(data[0]);
      //       navigate(`/home`);
      //     }
      //   },
      //   onError: (error) => {
      //     toast.warning(error);
      //   }
      // })
    }
  })
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="container h-100vh">
          <div className="row">

            <div className="card card-body float-div shadow p-0">
              <div className="row m-0">
                <div className="col-lg-12">
                  <div className="row m-0">
                    <div className="col-12 mt-5 text-center">
                      <h3>Login</h3>
                    </div>
                    <TextField
                      label={"Email"}
                      placeholder={'name@example.com'}
                      className={'mb-2'}
                      {...formik.getFieldProps("Email")}
                    />
                    <TextField
                      label={"Password"}
                      type='password'
                      placeholder={'Password'}
                      className={'mb-2'}
                      {...formik.getFieldProps("Password")}
                    />
                    <div className="col-12 mt-2">
                      {/* <Link to={'/forgot'} className='nav-link p-0 mb-2'>forgot password?</Link> */}
                    </div>
                    <div className="col-12 ">
                      <button
                        disabled={!(formik.isValid && formik.dirty)}
                        type="submit"
                        className="btn btn-primary btn-block mb-5">
                        {isLoading && (
                          <span
                            className="spinner-border spinner-border-sm me-3"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        )}
                        Login</button>
                    </div>

                  </div>
                </div>
                <div className="col-lg-12 text-center bg-base">
                  <div className="row">
                    <div className="col-12 mb-5">
                      <h3 className='text-white mt-5'>Don't have an account?</h3>
                      <Link to={'/register'} className='text-white h5'>Sign up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(Login);
