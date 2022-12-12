import logo from '../../assets/logo.svg';
import effectLeft from '../../assets/Header/effect-left.png';
import effectRight from '../../assets/Header/effect-right.png';
import s from './styles.module.scss';

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <div className={s.effects}>
        <img src={effectLeft} alt='' />
        <img src={effectRight} alt='' />
        <img className={s.logo} src={logo} alt='' />
      </div>
    </div>
  );
};

export default Header;
