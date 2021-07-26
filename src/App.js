import './App.css';
import {ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import OrderItem from './Item'
import DescriptionAlerts, {AlertsContext, alerts as initialAlerts} from "./Alert";
import {useState} from "react";

const base_url = 'http://localhost:3000/'
const client = new ApolloClient({
    uri: base_url,
    cache: new InMemoryCache()
});

const App = () => {
    const [alerts, setAlerts] = useState(initialAlerts)

    const openSuccessAlert = (message) => setAlerts(alerts => ({...alerts, success: {open: true, message}}))

    const closeSuccessAlert = () => setAlerts(alerts =>
        ({...alerts, success: {...alerts.success, open: false}}))

    const openErrorAlert = (message) => setAlerts(alerts => ({...alerts, error: {open: true, message}}))

    const closeErrorAlert = () => setAlerts(alerts =>
        ({...alerts, error: {...alerts.error, open: false}}))

    return (
        <AlertsContext.Provider
            value={{...alerts, openSuccessAlert, openErrorAlert, closeSuccessAlert, closeErrorAlert}}>
            <ApolloProvider client={client}>
                <OrderItem/>
            </ApolloProvider>
            <DescriptionAlerts/>
        </AlertsContext.Provider>
    );
}

export default App;
