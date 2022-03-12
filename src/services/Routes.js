import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Women from '../pages/women';
import Cart from '../pages/cart';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'http://localhost:4000/' });
const client = new ApolloClient({
    link,
    cache
});


const RouteWrapper = () => {
    return (
        <BrowserRouter>
            <Header />
            <ApolloProvider client={client}>
                <Routes>
                    <Route exact path='/' element={<Women />} />
                    <Route exact path='/Cart' element={<Cart />} />
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    )
}

export default RouteWrapper;