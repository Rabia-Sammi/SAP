import { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import p1 from '../../src/assets/images/p1.png';
import { useDispatch } from 'react-redux';
import { filterActions } from '../store/filterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';



const Solutions = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filter.filter);
    const haveFilter = useSelector(state => state.filter.haveFilter);
    const [fetchedSolutions, setfetchedSolutions] = useState([]);




    const fetchSol = useCallback(async () => {

        try {
            const response = await fetch('https://sapapi.scrubskp.com/api/listing', { mode: 'cors' })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            // console.log(response);
            const data = await response.json();

            const loadedSolutions = [];
            for (const key in data) {
                let cats = data[key].categories.map(c => {
                    return c.name
                });
                loadedSolutions.push({
                    id: key,
                    icon: data[key].iconUrl,
                    name: data[key].name,
                    description: data[key].description,
                    category: cats[0]
                });
            }

            setfetchedSolutions(loadedSolutions);
        }
        catch (error) {
            console.log("ERROR");
            // setError(error.message);
        }
        // setIsLoading(false);
    }, []);
    useEffect(() => {
        fetchSol();
    }, [fetchSol]);

    let filteredSolutions = [...fetchedSolutions];

    filteredSolutions = filteredSolutions.filter((f) => (filters.includes(f.category)) || (filters.includes(f.industry)));

    const displayCount = () => {
        if (filteredSolutions.length > 0) {
            const count = filteredSolutions.length;
            return <h3>{count} Results</h3>;
        }
    }
    const clearFilterHandler = () => {
        dispatch(filterActions.clearAll());

    }
    const removeFilterHandler = (event) => {
        dispatch(filterActions.removeFilter(String(event.target.innerText).trim()));
    }

    const renderSol = () => {
        if (haveFilter === true) {
            return filteredItems;
        }
        else { return allItems }
    }

    // Mapping into jsx

    const allItems = fetchedSolutions.map((d) =>
        <div className="col item">
            <div className="card ">
                <div className="card-body ">
                    <img key={d} src={d.icon} />
                    <h2 key={d}>{d.name}</h2>
                    <p key={d}>{d.description}</p>
                    <h3 key={d}>Category: {d.category}</h3>
                </div>
            </div>
        </div>
    );
    const filteredItems = filteredSolutions.map((d) =>
        <div className="col item">
            <div className="card ">
                <div className="card-body ">
                    <img key={d} src={d.icon} />
                    <h2 key={d}>{d.name}</h2>
                    <p key={d}>{d.description}</p>
                    <h3 key={d}>Category: {d.category}</h3>
                </div>
            </div>
        </div>
    );

    const filterTags = filters.map((f) =>
        <li id={f} role="button" onClick={removeFilterHandler}>{f} <span><i id={f}><FontAwesomeIcon icon={faTimes} /></i></span></li>);

    // Mapping End  


    return (
        <div class="listing pop-sec">
            <div class="container">
                <div class="result">
                    <div class="row">
                        <div class="col-6">
                            <h3>{displayCount()}</h3>
                        </div>
                        <div class="col-6">
                            <div class="dropdown">
                                <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Sort: Alphabetical(A-Z)<i class="fas fa-chevron-down"></i>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Sort By Date</a>
                                    <a class="dropdown-item" href="#">Sort By Popularity</a>
                                    <a class="dropdown-item" href="#">Sort By Recent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <ul class="tags">
                                {filterTags}
                                {haveFilter && <a onClick={clearFilterHandler}>Clear All</a>}
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="POP" className="section">
                    <div className="row  row-cols-1 row-cols-lg-3 owl-carousel owl-theme">
                        {renderSol()}
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="yellowBtn">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Solutions; 