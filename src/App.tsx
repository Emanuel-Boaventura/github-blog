import './GlobalStyles.module.scss';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './assets/pages/Home';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
