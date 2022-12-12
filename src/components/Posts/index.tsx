import s from './styles.module.scss';

const Posts = () => {
  return (
    <div className={s.postCard}>
      <div className={s.titleAndTime}>
        <h3 className={s.title}>JavaScript data types and data structures</h3>
        <span className={s.time}>Há 1 dia</span>
      </div>
      <p className={s.description}>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </div>
  );
};

export default Posts;
