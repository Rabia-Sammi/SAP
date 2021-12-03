
import { Fragment, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';


import ss from '../../src/assets/images/ss.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';


const DetailPage = () => {

    const params = useParams();
    const [solDetail, setsolDetail] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchSolDetails = useCallback(async () => {

        try {
            const response = await fetch(`https://sapapi.scrubskp.com/api/Solution/${params.id}`);
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            // console.log(response);
            const data = await response.json();
            setsolDetail(data);

            setLoaded(true);


        }
        catch (error) {
            console.log("ERROR in catch");
            // setError(error.message);
        }
        // setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchSolDetails();
    }, [fetchSolDetails]);

    useEffect(() => {
        if (loaded == true) {
            showTechDetailHandler(0);
        }
    }, [loaded])




    const prodImg = solDetail.iconUrl;
    const prodName = solDetail.name;
    const prodCompany = solDetail.companyName;
    const prodHeading = solDetail.headline;
    const prodDescription = solDetail.shortDescription;
    const benefits = solDetail.customerBenefits;
    const features = solDetail.features;
    const resources = solDetail.resources;
    const techInfo = solDetail.technicalInformation;
    const sliderImgs = solDetail.screenShots;
    let prodBenefits = [];
    let prodFeatures = [];
    let prodResources = [];
    let prodTechInfo = [];
    let prodTechDetail = [];
    let prodSlider = [];
    const [isActive, setIsActive] = useState(0);
    const [techInfoDetails, setTechInfoDetails] = useState([]);


    //Benefits
    for (const key in benefits) {
        const ben =
            <div className="ben">
                <h3>{benefits[key].title}</h3>
                <p>{benefits[key].description}</p>
            </div>
        prodBenefits.push(ben);
    }

    //Features
    for (const key in features) {
        const feature =
            <div className="row">
                <div className="col-12 col-lg-4 p-left">
                    <img src={features[key].imageUrl} />
                </div>
                <div className="col-12 col-lg-8 p-right">
                    <h3>{features[key].title}</h3>
                    <p>{features[key].description}</p>
                </div>
            </div>
        prodFeatures.push(feature);
    }

    //Resources

    for (const key in resources) {
        const res =
            <div class="col-12 col-lg-4">
                <div class="card">
                    <p>Supply Chain Management</p>
                    <h3>{resources[key].title}</h3>
                    <a href={resources[key].resourceUrl}>Explore More</a>
                </div>
            </div>
        prodResources.push(res);
    }

    //Tech Information

    for (const key in techInfo) {
        if (key == 0) {
            const info =
                <li><button
                    id={key}
                    className={key == isActive ? 'activeBtn' : ''}
                    onClick={() => showTechDetailHandler(key)}>{techInfo[key].name}</button></li>
            prodTechInfo.push(info);
        }
        else {
            const info =
                <li><button
                    id={key}
                    className={key === isActive ? 'activeBtn' : ''}
                    onClick={() => showTechDetailHandler(key)}>{techInfo[key].name}</button></li>
            prodTechInfo.push(info);
        }
    }

    //Slider
    for (const key in sliderImgs) {
        if (key == 0) {
            const imgs =
                // <div className="item"><img src={sliderImgs[key]} alt="Owl Image"/></div>
                <div className="carousel-item active">
                    <img src={sliderImgs[key]} className="d-block w-100" alt="..." />
                </div>
            prodSlider.push(imgs);

        }
        else {
            const imgs =

                // <div className="item"><img src={sliderImgs[key]} alt="Owl Image"/></div>
                <div className="carousel-item">
                    <img src={sliderImgs[key]} className="d-block w-100" alt="..." />
                </div>
            prodSlider.push(imgs);
        }
    }



    const showTechDetailHandler = (key) => {
        setIsActive(key);
        const infoDet = techInfo[key].details;
        for (const d in infoDet) {
            const detail =
                <li className="info">
                    <h4>{infoDet[d]}</h4>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis saepe, voluptates
                        quam provident
                    </p>
                </li>
            prodTechDetail.push(detail);
        }
        setTechInfoDetails(prodTechDetail);
    }








    return (

        <Fragment>
            <div class="top-bar">
                <div className="container">
                    <div className="nav-detail ">
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
                            <div className="col-lg-8 d-flex justify-content-end align-items-center">
                                <nav className="navbar navbar-expand-lg desktop sticky-top">
                                    <ul className="navbar-nav">
                                        <li id=""><a href="#">At a Glance</a></li>
                                        <li id=""><a href="#">Features</a></li>
                                        <li id=""><a href="#">Pricing</a></li>
                                        <li id=""><a href="#">Technical Information</a></li>
                                        <li id=""><a href="#">Resources</a></li>
                                        <li id=""><a href="#">Reviews</a></li>
                                        <li id=""><a href="#">Publisher</a></li>
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
                                <div id="carouselSlider" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {prodSlider}
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlider" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselSlider" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                                {/* <OwlCarousel className="owl-theme" item={1} nav={true} stagePadding={0} margin={50} singleItem={true}>
                                    {prodSlider}
                                    
                                </OwlCarousel>
                             */}
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
                                {prodBenefits}
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
                    {prodFeatures}
                </div>
            </div>
            {/* <!-- End Features --> */}

            {/* Tech Information Section */}
            <div className="tech">
                <div className="container">
                    <h1>Technical Information</h1>
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="desktop">
                                <ul>
                                    {prodTechInfo}
                                </ul>
                            </div>
                            <div className="mobile">
                                <ul><OwlCarousel className="owl-theme" item={3} margin={15} dots={false}>
                                    {prodTechInfo}
                                </OwlCarousel>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9" style={{ backgroundColor: "#F0EFED" }} >
                            <div className="row">
                                <ul className="bnf">
                                    {techInfoDetails}
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
                        {prodResources}
                    </div>
                </div>
            </div>
            {/* End Resources Section */}

        </Fragment>
    )
};

export default DetailPage;