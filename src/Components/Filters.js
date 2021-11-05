import { useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filterActions } from '../store/filterSlice';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filters = () => {
    const Ref = useRef([]);
    const [Filters, setFilters] = useState();
    let modFilters = [];

    const dispatch = useDispatch();
    const deletedFilter = useSelector(state => state.filter.removedFilter);

    const fetchfilters = useCallback(async () => {
        try {
            const response = await fetch('https://sapapi.scrubskp.com/api/Filters', { mode: 'cors' })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();

            setFilters(data);

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
            dispatch(filterActions.addFilter(event.target.name));
        }
        else {
            dispatch(filterActions.removeFilter(event.target.name));
        }
    }


    for (const key in Filters) {
        const modKey = key.charAt(0).toUpperCase() + key.slice(1);

        const subFilters = Filters[key].map(c => {
            let modName = c.name.trim();
            modName = modName.charAt(0).toUpperCase() + modName.slice(1);
            return modName
        });

        const subFil = subFilters.map((fil, i) =>
            <li className="box">
                <input name={fil} value={fil} type="checkbox" ref={el => Ref.current[i] = el} onChange={setFilterHandler} className="check-box" />
                <lable>{fil}</lable>
            </li>);

        const item =
            <li className="dropdown" >
                <a className="" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{modKey}<span><i><FontAwesomeIcon icon={faChevronDown} /></i></span></a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <form>
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <span><i className="fas fa-search"></i></span>
                            </div>
                        </form>
                    </li>
                    {subFil}
                </ul>
            </li >

        modFilters.push(item);
    }

    Ref.current.forEach(element => {
        if (deletedFilter === element.name) {
            element.checked = false;
        }
    });

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