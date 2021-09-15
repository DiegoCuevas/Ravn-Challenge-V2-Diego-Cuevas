import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/index.css';
import App from './components/App';
import { ApolloProvider } from "@apollo/client/react";
import client from "./data/client.js";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
