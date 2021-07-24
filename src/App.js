import './App.css';

import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import OrderItem from './Item'

const base_url = 'http://localhost:3000/'
const client = new ApolloClient({
    uri: base_url
});

function App() {
    return (
        <ApolloProvider client={client}>
            <OrderItem/>
        </ApolloProvider>
    );
}

export default App;
