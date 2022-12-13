import { IItens } from '../../pages/Home';
import s from './styles.module.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ptBr from 'dayjs/locale/pt-br';
dayjs.extend(relativeTime);
dayjs.locale(ptBr);

type TPostProps = Omit<IItens, 'id' | 'url'>;

const Posts = ({ title, body, updated_at }: TPostProps) => {
  return (
    <div className={s.postCard}>
      <div className={s.titleAndTime}>
        <h3 className={s.title}>{title}</h3>
        <time className={s.time}>{dayjs(updated_at).fromNow()}</time>
      </div>
      <p className={s.description}>{body}</p>
    </div>
  );
};

export default Posts;
