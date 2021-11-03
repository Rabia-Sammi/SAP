import { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../store/filterSlice';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {
    let category = ["Analytics", "Accounting and Financial Close", "Application Development and Integration", "CRM and Customer Experience", "Procurement"];
    let industry = ["Industry 1", "Industry 2", "Industry 3"];
    const catRef = useRef([]);
    const indRef = useRef([]);
    const [Filters, setFilters] = useState();
    let modFilters=[];

    const dispatch = useDispatch();
    const deletedFilter = useSelector(state => state.filter.removedFilter);

    const fetchfilters = useCallback(async () => {

        try {
            const response = await fetch('https://sapapi.scrubskp.com/api/Filters', { mode: 'cors' })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            // console.log(response);
            const data = await response.json();

            setFilters(data);
            //for (const key in data) {


            //     let cats = data[key].categories.map(c =>{
            //         return c.name
            //     });
            //     loadedSolutions.push({
            //         id: key,
            //         icon: data[key].iconUrl,
            //         name: data[key].name,
            //         description: data[key].description,
            //         category: cats[0]
            //     });
            //}

            // setfetchedSolutions(loadedSolutions);
        }
        catch (error) {
            console.log("ERROR");
            // setError(error.message);
        }
        // setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchfilters();
    }, [fetchfilters]);

    const setFilterHandler = (event) => {

        if (event.target.checked) {
            console.log("filter name");
            console.log(event.target.name);
            dispatch(filterActions.addFilter(event.target.name));
        }
        else {
            dispatch(filterActions.removeFilter(event.target.name));
        }
    }
  
       
        for (const key in Filters)
        {


        const subFilters= Filters[key].map(c =>{
            return c.name
        });      
        console.log("subfilters"+ subFilters);
        const item=
                <li className="dropdown" >
                    <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">{key}<span><i><FontAwesomeIcon icon={faChevronDown} /></i></span></a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <form>
                                <div className="search">
                                    <input type="text" placeholder="Search" />
                                    <span><i className="fas fa-search"></i></span>
                                </div>
                            </form>
                        </li>
                        {subFilters}
                    </ul>
                </li >    
        
        modFilters.push(item); 

            
        // );
       }

       



    // const catFilters = category.map((category, i) =>
    //     <li className="box">

    //         <input name={category} value={category} type="checkbox" ref={el => catRef.current[i] = el} onChange={setFilterHandler} className="check-box" />
    //         <lable>{category}</lable>

    //     </li>);

    // const industryFilters = industry.map((industry, i) =>
    //     <li className="box">

    //         <input name={industry} type="checkbox" ref={el => indRef.current[i] = el} onChange={setFilterHandler} className="check-box" />
    //         <lable>{industry}</lable>

    //     </li>);

    // catRef.current.forEach(element => {
    //     if (deletedFilter === element.name) {
    //         element.checked = false;
    //     }
    // });
    // indRef.current.forEach(element => {
    //     if (deletedFilter === element.name) {
    //         element.checked = false;
    //     }
    // });



    return (

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
                                        <span>Filters <i><FontAwesomeIcon icon={faChevronDown} /></i> </span>
                                    </button>
                                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            {modFilters}
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