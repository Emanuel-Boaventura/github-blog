import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import s from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
