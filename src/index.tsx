import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from 'react-redux';
import store from './redux/store';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import setToken from './functions/setToken';

store.subscribe(()=>{
  const data = store.getState();
  setToken(data.sesion.token);
  localStorage.setItem('reduxState', JSON.stringify(data));


})

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
defineCustomElements(window);
serviceWorkerRegistration.register();

// reportWebVitals();
