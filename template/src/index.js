import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

//function that routes the user to the correct page

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirect_uri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      onRedirectCallback={onRedirectCallback}
    >
      <Provider store={store}>
        <Router>
          <App />,
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
    
  document.getElementById('root')
  );


