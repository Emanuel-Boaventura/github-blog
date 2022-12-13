import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayour';
import Issue from './pages/Issues';
import Loading from './components/Loading';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:number' element={<Issue />} />
      </Route>
    </Routes>
  );
};

export default Router;
