import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-eu-central-1.graphcms.com/v2/cl3cz5se61g5k01xn8gmo0g46/master',
    cache: new InMemoryCache()
});

export default client;