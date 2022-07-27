import React from 'react';
import AppRoutes from '../../../app-routes'; 

const MainBody = ({ width, setsideMenu }) => {
    const SideBarHide = () => {
        if (width <= 992) {
            setsideMenu(false);
        }
    }
    return (
        <>
            <div className="home-body" onClick={() => SideBarHide()}>
                <div className="card card-body h-100 main-body">
                    <AppRoutes />
                </div>
            </div>
        </>
    )
}

export default MainBody
