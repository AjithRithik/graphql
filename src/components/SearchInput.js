import React, { useState, useEffect } from 'react';
import { useLazyQuery } from 'react-apollo';
import { GET_INFLUENCESERS } from '../graphql/queries';
import Debounce from './common/Debounce';

const Searchinput = ({ setInfluencer }) => {
    const [searchInput, setSearchInput] = useState('');
    const debouncedSearchTerm = Debounce(searchInput);

    const [getInfluensers, getInfluensersDetails] = useLazyQuery(GET_INFLUENCESERS, {
        variables: {
            first: 10,
            query: searchInput.toString().trim(),
        }
    });

    useEffect(() => {
        if (debouncedSearchTerm && debouncedSearchTerm.length > 0) {
            console.log(debouncedSearchTerm);
            getInfluensers();
        }
    }, [debouncedSearchTerm]);

    useEffect(() => {
        if (getInfluensersDetails.data) {
            setInfluencer(getInfluensersDetails.data);
        } else {
            setInfluencer();
        }
    }, [getInfluensersDetails.data]);

    return (
        <div>
            <input className="w250" type="text" id="searchText" name="searchText" onChange={(e) => setSearchInput(e.target.value)} />
        </div>
    )
}

export default Searchinput;