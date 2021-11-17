
import { Fragment } from 'react';

import ss from '../../src/assets/images/ss.jpg';
import f1 from '../../src/assets/images/f1.jpg';
import sym from '../../src/assets/images/sym.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { bottom } from '@popperjs/core';

const DeatailPage = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="nav-detail">
                    <div className="row">
                        <div className="col-5">
                            <div className="prod">
                                <div>
                                    <img src={sym} />
                                </div>
                                <div className="prod-name">
                                    <h1>Account Payable Automation</h1>
                                    <h2>By Symbeo Inc.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
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
            </div>

            {/* <!-- Slider Section --> */}
            <div className="s-section">
                < div class="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="s-text">
                                <h1>Digital Customar Experience</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam accusantium neque nemo
                                velit veritatis sit perspiciatis dicta quod maxime?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos mollitia harum distinctio fuga nemo, repudiandae animi error, sequi repellat vitae officia eius. Quo molestias incidunt animi doloribus dolorem aliquid, eligendi consequatur laboriosam cupiditate dignissimos magnam quis nemo quaerat nobis temporibus nesciunt at quia reiciendis est rem quos ea accusamus?</p>
                                <button>Get It Now</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="s-img">
                                <img src={ss}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Slider Section --> */}

            {/* <!-- Benefit Section --> */}
            <div class="benefit">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Key Benefits</h1>
                            <div className="bnf">
                                <div className="ben">
                                    <h3>Bridge the gap between paper and electronic invoices</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptate provident laborum eligendi!</p>
                                </div>
                                <div className="ben">
                                    <h3>Bridge the gap between paper and electronic invoices</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptate provident laborum eligendi!</p>
                                </div>
                                <div className="ben">
                                    <h3>Eliminate 80-90% of your effort</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptate provident laborum eligendi!</p>
                                </div>
                                <div className="ben">
                                    <h3>Validate, automate and route to downstrem systems</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aperiam aut, hic accusamus ea omnis
                                reiciendis accusantium similique labore quasi cumque? Eius iusto voluptates eaque! Sit voluptat provident laborum eligendi!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- End Benefit Section --> */}

            {/* <!-- Features --> */}
            <div className="features">
                <div className="container">
                    <h1>Key Features</h1>
                    <div className="row">
                        <div className="col-12 col-lg-4 p-left">
                            <img src={f1} />
                        </div>
                        <div className="col-12 col-lg-8 p-right">
                            <h3>Virtual Mailroom Scanning and Classification </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                quam provident culpa temporibus nostrum repellendus non voluptatibus odit beatae assumenda
                        voluptas dignissimos quo voluptate aut? Inventore, iste.</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 col-lg-4 p-left">
                            <img src={f1} />
                        </div>
                        <div className="col-12 col-lg-8 p-right">
                            <h3>Virtual Mailroom Scanning and Classification </h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                quam provident culpa temporibus nostrum repellendus non voluptatibus odit beatae assumenda
                        voluptas dignissimos quo voluptate aut? Inventore, iste.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End Features --> */}

            {/* Tech Information Section */}
            <div className="tech f-sec">
                <h1>Technical Information</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-2 pt-5">
                            <ul>
                                <li><button className="activeBtn">General Information</button></li>
                                <li><button>Deployment</button></li>
                                <li><button>Operation</button></li>
                                <li><button>Security</button></li>
                                <li><button>Compliance</button></li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-10 pt-5" style={{ backgroundColor: "#F0EFED" }} >
                            <div className="row">
                                <div className="bnf">
                                    <div className="info">
                                        <h4>User Assisstance Provided</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facil
                                </p>
                                    </div>

                                    <div className="info">
                                        <h4>Deployed at scale on device</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                            quam provident culpa.
                                        </p>
                                    </div>
                                    <div className="info">
                                        <h4>Integrate with SAP cloud solutions</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                            quam provident
                                        </p>
                                    </div>
                                    <div className="info">
                                        <h4>Software-as-a-service solution</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                           
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Tech Info Section */}

            {/* Resources Section */}
            <div className="resource">
                <div class="container">
                    <h1>Resources</h1>
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div class="card">
                                <p>Supply Chain Management</p>
                                <h3>SAP Certified Integration</h3>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="card">
                                <p>Supply Chain Management</p>
                                <h3>SAP Certified Integration</h3>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4">
                            <div class="card">
                                <p>Supply Chain Management</p>
                                <h3>SAP Certified Integration</h3>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Resources Section */}

        </Fragment>
    )
};

export default DeatailPage;