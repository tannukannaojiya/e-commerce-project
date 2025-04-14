
import  ReactDOM  from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store.js';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
    <ToastContainer position='top-center'/>
  </Provider>
)
