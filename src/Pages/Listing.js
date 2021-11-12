
import { Fragment } from 'react';
import Filters from '../Components/Filters';
import Solutions from '../Components/Solutions';


const Listing = () => {

    return (
        <Fragment>
            <Filters></Filters>
            <div className="listing-main">
                <div className="main-sec">
                    <div className="bg1 bg1position"></div>
                    <div className="bg2 bg2position"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <nav >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Applications</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">AI Apps</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="text">
                                    <h1>Supply Chain Planning</h1>
                                    <p></p>
                                    <p>Try and buy leadibg partner solutions and SAP software for supply Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Sed, rerum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Solutions></Solutions>
            <div class="app-sec">
                <h2>List your appication on ERP Store</h2>
                <p>Show how our customers and partners are driving their businessess together on ERP store</p>
                <button class="yellowBtn">Get Started</button>
            </div>
        </Fragment>
    );
};

export default Listing;

