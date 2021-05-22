import React,{useState,useEffect}  from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Item from '../../components/Item';
import BreadCrumb from '../../components/BreadCrumb';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';
import ItemBox from '../../components/ItemBox';
import './showItems.scss';

const ShowItems = () => {
    const location = useLocation();
    
    const queryParams = new URLSearchParams(location.search).get("search");

    const [itemResults, setItemResults]= useState({
        items: [],
        categories: [],
        error: false
    });

    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{ 
        setLoading(true);

        const fetchData=async()=>{

        try {
            const response= await axios.get(`/api/items?q=${queryParams}`)
            const { items, categories } = response.data;

            setItemResults({
                items,
                categories,
                error: false
            });

            setLoading(false);
        } catch(error) {
            setItemResults(prevState=>({
                ...prevState,
                error: error.response.data
            }));     
        };
        
        setLoading(false);
    };
    
        fetchData();

    }, [queryParams]);

    return (     
        <section className="show-items">

            {loading && <Spinner />}

            {!itemResults.items.length && !loading && <Error />}
            
            {!loading && itemResults.items.length > 0 && 
                <> 
                    <BreadCrumb categories={itemResults.categories}/>

                    <ItemBox className="show-items__results-box"> 
                        <ul className="show-items__item">
                            {itemResults.items.map(item => {
                                return <Item key={item.id} item={item} categories={itemResults.categories} />
                            })}
                        </ul>
                    </ItemBox>
                </>
            };

        </section>
    )
};

export default ShowItems;
