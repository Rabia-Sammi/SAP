import { Fragment } from 'react';
import Logo from '../../assets/images/logo.jpg';
import MenuIcon from '../../assets/images/menu-white.png'
import ERP from '../../assets/images/menu-svg/1erp-and-finance.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            {/* <!--Header  --> */}
            <div className="header">
                <div class="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <img src={Logo} />
                            </div>
                            <div class="col-6 d-flex justify-content-center">
                                <div class="searchbox">
                                    <input type="text" placeholder="Search By Solution, Keyword" />
                                    <span><i class="fas fa-search"></i></span>
                                </div>
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <button><span><i><FontAwesomeIcon icon={faUserCircle} /></i></span>My Account</button>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="navDesk" class="nav-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <nav class="navbar navbar-expand-lg nav-menu">
                                    <ul class="navbar-nav">
                                        <li><a class="" data-bs-toggle="offcanvas" href="#offCanvas" role="button" aria-controls="offCanvas"><span><img src={MenuIcon} /></span>Browse</a></li>
                                        <li><a href="#">Showcased Solutions</a></li>
                                        <li><a href="#">Popular on Store</a></li>
                                        <li><a href="#">Customer Success</a></li>
                                        <li><a href="#">News and Blogs</a></li>
                                        <li><a href="#">What's New</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="col-2 d-flex justify-content-end">
                                <button><span><i><FontAwesomeIcon icon={faQuestionCircle} /></i></span> Need Help</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <!-- Header Mobile --> */}
            <div class="header-mob">
                <div class="top">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-1">
                                <a class="bar-icon" data-bs-toggle="offcanvas" href="#offCanvas" role="button" aria-controls="offCanvas"><span><FontAwesomeIcon icon={faBars} /></span></a>
                            </div>
                            <div class="col-7">
                                <img src={Logo} />
                            </div>
                            <div class="col-4" style={{ textAlign: "end" }}>
                                <button><span><i><FontAwesomeIcon icon={faUserCircle} /></i></span></button>
                                <button><span><i><FontAwesomeIcon icon={faQuestionCircle} /></i></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Header --> */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offCanvas" data-bs-backdrop="false" aria-labelledby="offcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">Browse</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <nav class="side-menu">
                        <ul>
                            <li><span><img src={ERP} /></span>ERP and Finance</li>
                            <li><span><img src={ERP} /></span>CRM and Customer Expirience</li>
                            <li><span><img src={ERP} /></span>Network and Spend Management</li>
                            <li><span><img src={ERP} /></span>Customer Success</li>
                            <li><span><img src={ERP} /></span>News and Blogs</li>
                            <li><span><img src={ERP} /></span>What's New</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Fragment>
    );
};
export default Header;