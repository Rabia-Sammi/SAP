import MainNavigation from './MainNavigation';
import Logo from '../../assets/images/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars,faSearch,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="main">
            <div class="header">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                            <Link to='/landingpage'><img src={Logo}></img></Link>
                            </div>
                            <div className="col-6 d-flex justify-content-center">
                                <div className="searchbox">
                                    <input type="text" placeholder="Search By Solution, Keyword"></input>
                                    <span><i><FontAwesomeIcon icon={faSearch} /> </i></span>
                                </div>
                            </div>
                            <div className="col-3 d-flex justify-content-end">
                                <button><span><i><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></i></span>My Account</button>
                                <i><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></i>
                            </div>
                        </div>
                    </div>
                </div>
                <MainNavigation />
            </div>

            <div class="header-mob">
                <div class="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-2">
                                <div onclick="openMenu(menu)"><span><i><FontAwesomeIcon icon={faBars}></FontAwesomeIcon> </i></span></div>
                            </div>
                            <div class="col-6">
                            <img src={Logo}></img>
                            </div>
                            <div class="col-4 d-flex justify-content-end">
                                <button><span><i><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></i></span></button>
                                <button><span><i><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;