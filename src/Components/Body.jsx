import React, { useEffect, useState } from 'react'
import { apiData } from './API/api';
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import { datass } from './data';



 
const Body = () => {
    const [state, setState] = useState([]);
    const [filteredState, setFilteredState] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
const navigate=useNavigate()
    useEffect(() => {

        async function api() {
            try {
                setState(apiData);
                setFilteredState(apiData)
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }


        }
        api()
        console.log(state);
    }, [])

    const handleClick = (filter) => {
        setActiveFilter(filter);
        if (filter === 'All') {
            setFilteredState(state);
        } else {
            const filtered = state.filter(item => item.category.toLowerCase() === filter.toLowerCase());
            setFilteredState(filtered);
        }
    }

const display=(e)=>{
e.preventDefault();
 navigate('/details')
}

    return (
        <div>
            <section className="section collection">
                <div className="title">
                    <span>COLLECTION</span>
                    <h2>Our Top Collection</h2>
                    {/* <i class="fa-brands fa-instagram fa-spin fa-xl" style={{color: "#000000"}}></i> */}
                </div>
                <div className='collection-filter'>
                    <button onClick={() => handleClick('All')} className={`collection-button ${activeFilter === 'All' ? 'active' : ''}`}>All Collection</button>

                    <div className='b-dropdown'>
                        <button onClick={() => handleClick('Dress')} className={`collection-button ${activeFilter === 'Dress' ? 'active' : ''}`}>Dress</button>
                        <div className="b-dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div className='b-dropdown'>
                        <button onClick={() => handleClick('Electronics')} className={`collection-button ${activeFilter === 'Electronics' ? 'active' : ''}`}>Electronics</button>
                        <div className="b-dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div className='b-dropdown' >
                        <button onClick={() => handleClick('Beauty')} className={`collection-button ${activeFilter === 'Beauty' ? 'active' : ''}`}>Beauty & Health</button>
                        <div className="b-dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div className='b-dropdown'>
                        <button onClick={() => handleClick('Jewelleri')} className={`collection-button ${activeFilter === 'Jewelleri' ? 'active' : ''}`}>Jewellery</button>
                        <div className="b-dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </section>



            <div >
                <div className='b-card-container'>
                    {filteredState.map(item => (
                        <div key={item.id} className="card-items" onClick={display} >
                            <img src={item.thumbnail} alt={item.name} className='card-image' />
                            <div className="card-item-details">
                                <span className='card-item-title'>{item.title}</span>
                                <span className='card-item-description'>{item.description} </span>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Body