import { Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home';
import DefaultLayout from './layouts/DefaultLayour';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
