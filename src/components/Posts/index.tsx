import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ptBr from 'dayjs/locale/pt-br';
dayjs.extend(relativeTime);
dayjs.locale(ptBr);
import { useNavigate } from 'react-router-dom';

import { IItens } from '../../pages/Home';
import s from './styles.module.scss';

type TPostProps = Omit<IItens, 'id' | 'url'>;

const Posts = ({ title, body, number, updated_at }: TPostProps) => {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => {
        console.log('redirecionando', number);
        navigate(`/${number}`);
      }}
      className={s.postCard}
    >
      <div className={s.titleAndTime}>
        <h3 className={s.title}>{title}</h3>
        <time className={s.time}>{dayjs(updated_at).fromNow()}</time>
      </div>
      <p className={s.description}>{body}</p>
    </article>
  );
};

export default Posts;
