import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = () => {
    return new HttpLink({
        uri: process.env.REACT_APP_GQL_ENDPOINT,
    });
};

const cache = new InMemoryCache();

const getClient = new ApolloClient({
    link: httpLink(),
    cache: new InMemoryCache()
});

export default getClient; 
