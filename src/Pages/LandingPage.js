import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import img2 from '../../src/assets/images/img2.jpg';
import img3 from '../../src/assets/images/img3.jpg';
import imgProd from '../../src/assets/images/img-prod.jpg';
import p1 from '../../src/assets/images/p1.png';
import p2 from '../../src/assets/images/p2.png';
import p3 from '../../src/assets/images/p3.png';
import p4 from '../../src/assets/images/p4.png';
import p5 from '../../src/assets/images/p5.png';
import p6 from '../../src/assets/images/p6.png';

import b1 from '../../src/assets/images/b1.svg';
import b2 from '../../src/assets/images/b2.svg';
import b3 from '../../src/assets/images/b3.svg';
import b4 from '../../src/assets/images/b4.svg';
import b5 from '../../src/assets/images/b5.svg';

import dell1 from '../../src/assets/images/dell-1.png';





const LandingPage = () => {
    return (
        <div>
            <div className="first-sec">
                <div className="main-sec">
                    <div className="bg1 bg1position"></div>
                    <div className="bg2 bg2position"></div>
                    <div className="text">
                        <p id="p1-main">I am looking for <span type="button" data-toggle="drawer"> Software Extensions<i><FontAwesomeIcon icon={faChevronDown} /></i></span></p>
                        <p id="p2-main">that work with <span>SAP Analytical Cloud<i><FontAwesomeIcon icon={faChevronDown} /></i></span></p>
                        <p id="p3-main">and help me <span>Create Dashboard<i><FontAwesomeIcon icon={faChevronDown} /></i></span></p>
                        <button id="btn-main">Find Solutions</button>
                    </div>
                    <div className="text-mob">
                        <p>Power your Inteligent Enterprise with ERP and Partner Solutions</p>
                        <button>Find Solutions</button>
                    </div>

                </div>
            </div>
            <div className="main-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <p>Welcome to ERP store, the simplest and most sustainable way to find and buy solutions</p>
                        </div>
                        <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center">
                            <button>Search our Products</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sap-sec">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        <div className="col">
                            <div className="card h-100 d-flex">
                                <div className="card-body  d-flex flex-column">
                                    <img src={img3} className="card-img-top" alt="..."></img>
                                    <h2>SAPPHIRE NOW: Automated Bussiness Process with SAP</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                                        possimus
                                        culpa pariatur et
                                        est nemo
                                        neque tempore architecto. Reiciendis quibusdam voluptate officia at, quasi eveniet
                                        sunt
                                        enim
                                        odit
                                        nostrum adipisci?</p>
                                    <button className="greyBtn mt-auto ">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <img src={img2} className="card-img-top" alt="..."></img>
                                    <h2> Automated Bussiness Process with SAP Intelligent RPA</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                                        possimus
                                        culpa pariatur et
                                        est nemo
                                        neque tempore Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eaque
                                        quaerat eum ipsum beatae amet fugiat unde ipsa eligendi eos! Animi minima
                                        repellendus
                                        assumenda nulla commodi sunt sit libero excepturi. architecto. Reiciendis quibusdam
                                        voluptate officia at, quasi eveniet sunt enim
                                        odit
                                            nostrum adipisci?</p>
                                    <button className="greyBtn mt-auto ">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body d-flex flex-column">
                                    <img src={img3} className="card-img-top" alt="..."></img>
                                    <h2>From a Crowded Field, Three SAP Store Partners</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                                        possimus
                                        culpa pariatur et
                                        est nemo
                                        neque tempore architecto. Reiciendis quibusdam voluptate officia at, quasi eveniet
                                        sunt
                                        enim
                                        odit
                                        nostrum adipisci?</p>
                                    <button className="greyBtn mt-auto">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*FEATURE SECTION  */}
            <div className="f-sec">
                <h1>This Week SAP Featured Solution</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3 pt-5">

                            <ul>
                                <li><button className="activeBtn">SAP Upscale Commerece</button></li>
                                <li><button>Customer Comunity</button></li>
                                <li><button>Cloud Learning</button></li>
                            </ul>

                        </div>
                        <div className="col-12 col-lg-9 pt-5" style={{ backgroundColor: "#F0EFED" }} >
                            <div className="row">
                                <div className="col-12 col-lg-6 d-flex justify-content-end">
                                    <img src={imgProd}></img>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="text-sec">
                                        <h2>SAP Upscale Commerece</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ducimus nisi ea
                                            officiis
                                            dolorum quos minus sit voluptatibus nemo saepe quisquam id nulla quaerat,
                                            temporibus mollitia illo accusamus laboriosam molestias!</p>
                                        <button className="outlinedBtn">SAP Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* POPULAR SECTION */}
            <div className="pop-sec">
                <h1>Popular on Addon 2 ERP Store</h1>
                <div className="container">
                    <div className="menu">
                        <nav>
                            <ul className="menu-nav owl-carousel owl-theme">
                                <li className="item" role="button" onclick="">ERP and Finance</li>
                                <li className="item" role="button" onclick="">CRM and Customer Expirience</li>
                                <li className="item" role="button" onclick="">Network and Spent Management</li>
                                <li className="item" role="button" onclick="">HR and People Engagement</li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        More Categories<i className="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div id="POP" className="section">
                        <div className="row  row-cols-1 row-cols-lg-3 owl-carousel owl-theme">
                            <div className="col item">
                                <div className="card ">
                                    <div className="card-body ">
                                        <img src={p1} />
                                        <h2>SAP S4HANA Trail</h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col item">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={p2} />
                                        <h2>SAP Cloud for Real Estate</h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col item">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={p3} />
                                        <h2>Order Management Solution </h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col item">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={p4} />
                                        <h2>SAP S4HANA Trail</h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col item">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={p5} />
                                        <h2>SAP S4HANA Trail</h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col item">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={p6} />
                                        <h2>SAP S4HANA Trail</h2>
                                        <p>Free trail gives insight across end-to-end bussiness process in a variety</p>
                                        <h3>SAP Product</h3>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Browse By Industry --> */}
            <div className="industry">
                <h1>Browse by Industry</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-6 col-lg-2">
                            <img src={b1} />
                            <p>Retail</p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <img src={b2} />
                            <p>Chemical</p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <img src={b5} />
                            <p>Automative</p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <img src={b4} />
                            <p>Consumer Products</p>
                        </div>
                        <div className="col-6 col-lg-2">
                            <img src={b5} />
                            <p>Wholesale Distribution</p>
                        </div>
                    </div>
                </div>
                <button className="yellowBtn">All ERP and Finance</button>
            </div>

            {/* <!--Customer Success --> */}
            <div className="success">
                <h1>Customer Success</h1>
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                        <div className="col-6 col-lg-3"><img src={dell1} /></div>
                    </div>
                </div>
                {/* <!-- News and Blogs --> */}
                <div className="news">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <div className="img-sec"></div>

                            </div>
                            <div className="col-12 col-lg-7">
                                <div className="text-sec">
                                    <h2>News and Blogs</h2>
                                    <p>Stay updated on upcoming events, annoucement and all things new at ERP Store</p>
                                    <button className="outlinedBtn">Read the Story</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* Show cased solutions */}
        <div className="sap-sec showcase-sec">
        <h1>Showcased Solutions</h1>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <div className="overlay-img oimg-position">
                        <div className="overlay-div odiv-position"></div>
                    </div>
                    <div className="card h-100 d-flex">
                        <div className="card-body  d-flex flex-column">
                            <h2>INTURN 360 Excess Inventory Optimization</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt dicta cum!</p>
                            <button className="yellowBtn mt-auto ">Sap Endorsed App</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="overlay-img oimg-position">
                        <div className="overlay-div odiv-position"></div>
                    </div>
                    <div className="card h-100 d-flex">
                        <div className="card-body  d-flex flex-column">
                            <h2>INTURN 360 Excess Inventory Optimization</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt dicta cum!</p>
                            <button className="yellowBtn mt-auto ">Sap Endorsed App</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="overlay-img oimg-position">
                        <div className="overlay-div odiv-position"></div>
                    </div>
                    <div className="card h-100 d-flex">
                        <div className="card-body  d-flex flex-column">
                            <h2>INTURN 360 Excess Inventory Optimization</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt dicta cum!</p>
                            <button className="yellowBtn mt-auto ">Sap Endorsed App</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="overlay-img oimg-position">
                        <div className="overlay-div odiv-position"></div>
                    </div>
                    <div className="card h-100 d-flex">
                        <div className="card-body  d-flex flex-column">
                            <h2>INTURN 360 Excess Inventory Optimization</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt dicta cum!</p>
                            <button className="yellowBtn mt-auto ">Sap Endorsed App</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            {/* <!-- Application-sec --> */}
            <div className="app-sec">
                <h2>List your appication on ERP Store</h2>
                <p>Show how our customers and partners are driving their businessess together on ERP store</p>
                <button className="yellowBtn">Get Started</button>
            </div>




        </div>


    );

};

export default LandingPage;

