import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import appStore from "./redux/store"; // as export default in the index file so we can name any varialbe: app, appStore....
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={appStore}><App /></Provider>);
