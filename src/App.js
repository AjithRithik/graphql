import React from 'react';
import './App.css';
import { ApolloProvider } from 'react-apollo';
import getClient from './graphql/client';
import { Rootcontainer } from './components/Rootcontainer';


function App() {
  console.log(process.env);
  return (
    <ApolloProvider client={getClient}>
      <Rootcontainer />
    </ApolloProvider>
  );
}

export default App;
