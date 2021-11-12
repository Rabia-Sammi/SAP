
import { Fragment } from 'react';

import ss from '../../src/assets/images/ss.jpg';
import f1 from '../../src/assets/images/f1.jpg';
import sym from '../../src/assets/images/sym.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const DeatailPage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="nav-detail">
                    <div className="row">
                        <div className="col-6">
                            <div className="review">
                                <div>
                                    <img src={sym} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h1>Account Payable automation</h1>
                                    <h2>By Symbeo Inc.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li><a href="#">At a Glance</a></li>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Technical Information</a></li>
                                        <li><a href="#">Resources</a></li>
                                        <li><a href="#">Reviews</a></li>
                                        <li><a href="#">Publisher</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* <!-- End Nav Section --> */}

                {/* <!-- Slider Section --> */}
                <div className="s-section">
                    <div className="row">
                        <div className="col-12 col-lg-6 p-right">
                            <h1>True invoice automation bridges the gap between manual and digital processing</h1>
                            <h2>Solution Types</h2>
                            <h3>Extension and Addons</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam accusantium neque nemo
                            velit veritatis sit perspiciatis dicta quod maxime?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos mollitia harum distinctio fuga nemo, repudiandae animi error, sequi repellat vitae officia eius. Quo molestias incidunt animi doloribus dolorem aliquid, eligendi consequatur laboriosam cupiditate dignissimos magnam quis nemo quaerat nobis temporibus nesciunt at quia reiciendis est rem quos ea accusamus?</p>
                            <button className="btn-blue">Get It Now</button>
                        </div>
                        <div className="col-12 col-lg-6 p-left">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={ss} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ss} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={ss} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Slider Section --> */}

                {/* <!-- BnF Section --> */}
                <div className="row">
                    <div className="col">
                        <div className="bnf">
                            <h1>Benefits and Features</h1>
                            <h2>BENEFITS</h2>
                            <h3>Bridge the gap between paper and electronic invoices</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptate provident laborum eligendi!</p>
                            <h3>Eliminate 80-90% of your effort</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptate provident laborum eligendi!</p>
                            <h3>Validate, automate and route to downstrem systems</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptat provident laborum eligendi!</p>
                            <a href="#">More Benefits</a>
                        </div>
                    </div>
                </div>
                {/* <!-- End BnF --> */}
                {/* <!-- Features --> */}
                <div className="features">
                    <div className="row align-md">
                        <div className="col-12 col-lg-6 p-right">
                            <h3>Virtual Mailroom Scanning and Classification </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                quam provident culpa temporibus nostrum repellendus non voluptatibus odit beatae assumenda
                        voluptas dignissimos quo voluptate aut? Inventore, iste.</p>
                        </div>
                        <div className="col-12 col-lg-6 p-left">
                            <img src={ss} />
                        </div>
                    </div>
                    <div className="row align-md">
                        <div className="col-12 col-lg-6 p-right">
                            <img src={f1} />
                        </div>
                        <div className="col-12 col-lg-6 p-left">
                            <h3>Raw Data Capture</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                quam provident culpa temporibus nostrum repellendus non voluptatibus odit beatae assumenda
                        voluptas dignissimos quo voluptate aut? Inventore, iste.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- End Features --> */}

                {/* <!-- Pricing Section --> */}
                <div className="pricing">
                    <h1>Plans and Pricing</h1>
                    <h1>Virtual Mailroom (Entry Level)</h1>
                    <ul>
                        <li><i><FontAwesomeIcon icon={faCheck} /></i>Manual and Email Receiving</li>
                        <li><i><FontAwesomeIcon icon={faCheck} /></i>Scanning</li>
                        <li><i><FontAwesomeIcon icon={faCheck} /></i>Document Destruction</li>
                        <li><i><FontAwesomeIcon icon={faCheck} /></i>FTP Scanner</li>
                    </ul>
                    <h5>From</h5>
                    <h3><span>USD</span>7000<span>.00</span></h3>
                    <h5>Per Month</h5>
                    <button className="btn-blue">Contact Support</button>
                </div>
                {/* <!-- End Pricing Section --> */}
            </div>

        </Fragment>
    )
};

export default DeatailPage;