import React, { useState, useEffect } from 'react';
import './itemDetails.scss';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import BreadCrumb from '../../components/BreadCrumb';
import ItemDescription from '../../components/ItemDescription';
import ItemBox from '../../components/ItemBox';

const ItemDetails = () => {
    const [detailsResults, setDetailsResults] = useState({
        item: {},
        categories: [],
        error: null,
    });

    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const location = useLocation();
    const categories = location.state && location.state.categories;

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await axios(`/api/items/${id}`);
                const { item } = response.data;

                setDetailsResults((previousState) => ({
                    ...previousState,
                    item,
                    error: null,
                }));

                if (!categories || (categories && categories.length === 0)) {

                    ;const categoryId = item.category_id

                    try {
                        const categoryResponseId = await axios(`/api/categories/${categoryId}`);

                        const { categories } = categoryResponseId.data;

                        setDetailsResults((prevState) => ({
                            ...prevState,
                            categories,
                            error: null,
                        }));

                        setLoading(false);
                    } catch (error) {
                        setDetailsResults((prevState) => ({
                            ...prevState,
                            error: error.response.data,
                        }));

                        setLoading(false);
                    }
                } else {
                    setDetailsResults((previousState) => ({
                        ...previousState,
                        categories,
                        error: false,
                    }));
                }

                setLoading(false);
            } catch (error) {
                setDetailsResults((prevState) => ({
                    ...prevState,
                    error: error.response.data,
                }));
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <section className='details-container'>
            {loading && <Spinner />}

            {detailsResults.error && !loading && <Error />}

            {!loading && detailsResults.item && (
                <>
                    <BreadCrumb categories={detailsResults.categories} />
                
                    {Object.entries(detailsResults.item).length > 0 && 
                        <ItemBox>
                            <ItemDescription item={detailsResults.item} />
                        </ItemBox>
                    }
                </>
            )}
        </section>
    )
};

export default ItemDetails;
