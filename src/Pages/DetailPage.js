
import { Fragment, useState, useEffect, useCallback } from 'react';
import {useParams} from 'react-router-dom';

import ss from '../../src/assets/images/ss.jpg';
import f1 from '../../src/assets/images/f1.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-regular-svg-icons';


const DetailPage = () => {

    const params=useParams();
    const [solDetail, setsolDetail] = useState([]);
    
    const fetchSolDetails = useCallback(async () => {    
        try {
            const response = await fetch(`https://sapapi.scrubskp.com/api/Solution/${params.id}`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            // console.log(response);
            const data = await response.json();
            console.log(data);

            setsolDetail(data);
        }
        catch (error) {
            console.log("ERROR");
            // setError(error.message);
        }
        // setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchSolDetails();
    }, [fetchSolDetails]);
 
        const prodImg=solDetail.iconUrl;
        const prodName=solDetail.name;
        const prodCompany=solDetail.companyName;
        const prodHeading=solDetail.headline;
        const prodDescription=solDetail.shortDescription;



    return (
    
        <Fragment>
            <div className="container">
                <div className="nav-detail">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="prod">
                                <div>
                                    <img src={prodImg} />
                                </div>
                                <div className="prod-name">
                                    <h1>{prodName}</h1>
                                    <h2>{prodCompany}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex justify-content-end">
                            <nav className="navbar navbar-expand-lg desktop">
                                <ul className="navbar-nav">
                                    <li><a href="#">At a Glance</a></li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Pricing</a></li>
                                    <li><a href="#">Technical Information</a></li>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">Publisher</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12">
                            <div className="mobile" >
                                <OwlCarousel className="owl-theme" items={3} dots={false} margin={20}>
                                    <div class="item"><a href="#">At a Glance</a></div>
                                    <div class="item"><a href="#">Features</a></div>
                                    <div class="item"><a href="#">Pricing</a></div>
                                    <div class="item"><a href="#">Technical Information</a></div>
                                    <div class="item"><a href="#">Resources</a></div>
                                    <div class="item"><a href="#">Reviews</a></div>
                                    <div class="item"><a href="#">Publisher</a></div>
                                </OwlCarousel>
                            </div>
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
                                <h1>{prodHeading}</h1>
                                <p>{prodDescription}</p>
                                <div className="star">
                                    <span ><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <span ><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <span ><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <span ><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <span ><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <span>(0)  Write a Review</span>
                                </div>
                                <button>View Pricing</button>
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
                <div className="container">
                    <h1>Technical Information</h1>
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
                                <ul className="bnf">
                                    <li className="info">
                                        <h4>User Assisstance Provided</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facil
                                        </p>
                                    </li>
                                    <li className="info">
                                        <h4>Deployed at scale on device</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                            quam provident culpa.
                                        </p>
                                    </li>
                                    <li className="info">
                                        <h4>Integrate with SAP cloud solutions</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                            quam provident
                                        </p>
                                    </li>
                                    <li className="info">
                                        <h4>Software-as-a-service solution</h4>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                                        </p>
                                    </li>
                                </ul>
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

export default DetailPage;