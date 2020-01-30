import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-apollo';
import { GET_INFLUENCESERS } from '../graphql/queries';
import Searchinput from './SearchInput';

export const Rootcontainer = () => {
    const [influencers, setInfluencer] = useState();

    // const { data, loading, error } = useQuery(GET_INFLUENCESERS, {
    //     variables: {
    //         first: 10,
    //         query: "",
    //     }
    // });

    // useEffect(() => {
    //     if (data) {
    //         setInfluencer(data);
    //     }
    // }, [data]);


    return (
        <>
            <Searchinput setInfluencer={setInfluencer} />
            <div>
                {JSON.stringify(influencers)}
            </div>
        </>
    )
}