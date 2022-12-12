import { IItens } from '../../pages/Home';
import s from './styles.module.scss';

type TPostProps = Omit<IItens, 'id' | 'url'>;

const Posts = ({ title, body }: TPostProps) => {
  return (
    <div className={s.postCard}>
      <div className={s.titleAndTime}>
        <h3 className={s.title}>{title}</h3>
        <span className={s.time}>Há 2 dias</span>
      </div>
      <p className={s.description}>{body}</p>
    </div>
  );
};

export default Posts;
