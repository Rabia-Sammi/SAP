

import MenuIcon from '../../assets/images/menu-white.png'
import { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


const MainNavigation = () => {

    const [menu, setMenu] = useState([]);
    const fetchNav = useCallback(async () => {

        try {
            const response = await fetch('https://sap-erp-73adc-default-rtdb.asia-southeast1.firebasedatabase.app/mainnavigation.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const loadedMenu = data;
            setMenu(loadedMenu);

        }
        catch (error) {
            console.log("ERROR");
            // setError(error.message);
        }
        // setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchNav();
    }, [fetchNav]);

    const menuItems = menu.map((d) => <Link to='/listing'><li><a key={d}>{d}</a></li></Link>);
// console.log(key);

    return (
        <div id="navDesk" className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <nav className="navbar navbar-expand-lg nav-menu">
                            <ul className="navbar-nav">
                                <div onclick="openMenu(menu)">
                                    <li>
                                        <span>
                                            <img src={MenuIcon} />
                                        </span>Browse
                                        </li>
                                </div>
                                {menuItems}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <button><span><i><FontAwesomeIcon icon={faQuestionCircle} /></i></span> Need Help</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavigation;
