import logo from './logo.svg';
import './App.css';

import { Amplify, API, graphqlOperation } from 'aws-amplify';

// import * as queries from './graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { GraphQLSubscription } from '@aws-amplify/api';

const myAppConfig = {
  aws_appsync_graphqlEndpoint:
    'https://v2hlavkz65g7hmpnk7sokb6yiq.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-*******************'
};

Amplify.configure(myAppConfig);

console.log(Amplify)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
