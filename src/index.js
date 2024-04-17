import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import DisplayTable from './DisplayTable';
import { ApolloClient, InMemoryCache, ApolloProvider,  createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: 'https://amused-lemming-14.hasura.app/v1/graphql',
});

// Add Hasura admin secret header to allow permission to perform mutations and queries
const authLink = setContext((_, { headers }) => {
  const token = 'CsCEi9CPRT2M28qe9CInBZIoZBFmXFfS4XA72y0o3VPvJM2NUaU8sxEXsCooaSz7';
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": token
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={App} />
    <Route path='/display-data' Component={DisplayTable}/>

    </Routes>
    </BrowserRouter>
    </ApolloProvider>
    
    </React.StrictMode>
);

