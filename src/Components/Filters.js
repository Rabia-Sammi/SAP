import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {filterActions} from '../store/filterSlice';
import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Filters =()=>{
    let category=["Aerospace", "Cybersecurity", "Nanophysics"];
    let industry=["Industry 1", "Industry 2", "Industry 3"];
    const catRef= useRef([]);
    const indRef= useRef([]);

    const dispatch =useDispatch();
    const deletedFilter = useSelector(state => state.filter.removedFilter);
    
    const setFilterHandler =(event)=>{      
    
        if(event.target.checked){   
            console.log("filter name");
            console.log(event.target.name);     
            dispatch(filterActions.addFilter(event.target.name));
        }
        else{
            dispatch(filterActions.removeFilter(event.target.name));
        }
    }
    const catFilters = category.map((category,i) =>
        <li className="box">
           
                <input name={category} value={category} type="checkbox" ref = {el=> catRef.current[i]=el} onChange={setFilterHandler} className="check-box" />
                <lable>{category}</lable>
           
        </li>);

 const industryFilters = industry.map((industry,i) =>
 <li className="box">
    
         <input name={industry} type="checkbox" ref = {el=> indRef.current[i]=el} onChange={setFilterHandler} className="check-box" />
         <lable>{industry}</lable>
    
 </li>);

        catRef.current.forEach(element => {
            if(deletedFilter===element.name){
                element.checked=false;
            }});
        indRef.current.forEach(element => {
            if(deletedFilter===element.name){
                element.checked=false;
            }});
        


return(

<div>
    <div className="filter">
        <div id="" className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg nav-menu">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span>Filters <i><FontAwesomeIcon icon={faChevronDown}/></i> </span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">Category<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search"/>
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            {catFilters}
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">Industry<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search"/>
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            {industryFilters}
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Works
                                            With<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search" />
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            <li className="box">
                                
                                                <input type="checkbox" checked="checked" className="check-box"/>
                                                <lable>Aero Space</lable>
                                
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Solution
                                            Type<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search"/>
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            <li className="box">
                                
                                                <input type="checkbox" checked="checked" className="check-box"/>
                                                <lable>Aero Space</lable>
                                
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">Publisher<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search"/>
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            <li className="box">
                                
                                                <input type="checkbox" checked="checked" className="check-box"/>
                                                <lable>Aero Space</lable>
                                
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">Certification<span><i><FontAwesomeIcon icon={faChevronDown}/></i></span></a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <form>
                                                    <div className="search">
                                                        <input type="text" placeholder="Search"/>
                                                        <span><i className="fas fa-search"></i></span>
                                                    </div>
                                                </form>
                                            </li>
                                            <li className="box">
                                
                                                <input type="checkbox" checked="checked" className="check-box"/>
                                                <lable>Aero Space</lable>
                                
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                            <li className="box">
                                                <div>
                                                    <input type="checkbox" className="check-box"/>
                                                    <lable>Aero Space</lable>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
);
};

export default Filters;