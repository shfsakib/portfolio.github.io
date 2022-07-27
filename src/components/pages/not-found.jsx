import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <div className="error-page pt-5 mt-5 text-center">
                <h1 className="headline text-warning"> 404</h1>
                <div className="error-content">
                    <h3>
                        <i className="fas fa-exclamation-triangle text-warning" /> Oops!
                        Page not found.
                    </h3>
                    <p>
                        We could not find the page you were looking for. Meanwhile, you may{" "}
                        <Link to="/home">return to dashboard</Link> or please click menu from sidebar.
                    </p>

                </div>
            </div>
        </Fragment>
    );
};

export default NotFound;
