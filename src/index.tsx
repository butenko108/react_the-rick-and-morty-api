import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'app/App';
import { MaterialUIProvider } from 'app/providers';

import './app/styles/index.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MaterialUIProvider>
        <App />
      </MaterialUIProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
