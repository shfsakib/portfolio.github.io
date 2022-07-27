import React, { Fragment, useEffect, useState } from 'react' 
import Footer from '../features/home/footer';
import MainBody from '../features/home/main-body';
import SideBar from '../features/home/side-bar';
import TopNav from '../features/home/top-nav';

const Dashboard = ({ }) => {

    const [sideMenu, setsideMenu] = useState(true);
    const [windowWidth, setWindowWidth] = useState([window.innerWidth]);


    useEffect(() => {
        window.addEventListener("resize", changeWindowWidth);
    }, []);

    useEffect(() => {
        triggerSideBar();
    }, [windowWidth]);

    const changeWindowWidth = () => {
        setWindowWidth([window.innerWidth]);
    }

    const triggerSideBar = () => {
        if (windowWidth <= 992) {
            setsideMenu(false);
        } else {
            setsideMenu(true);
        }
    }
    const width = windowWidth;
    return (
        <Fragment>
            <div>
                <SideBar sideMenu={sideMenu} />
                <section className="home-section">
                    <TopNav sideMenu={sideMenu} setsideMenu={setsideMenu} />
                    <MainBody width={width} setsideMenu={setsideMenu} />
                    <Footer />
                </section>

            </div>
        </Fragment>
    )
}

export default Dashboard
