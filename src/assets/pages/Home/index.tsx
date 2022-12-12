import Posts from '../../../components/Posts';
import s from './styles.module.scss';

const Home = () => {
  const issues = [1, 2, 3];

  return (
    <div className={s.homeContainer}>
      <section className={s.userCard}>
        <img src='https://github.com/Emanuel-Boaventura.png' alt='' />
        <div className={s.userData}>
          <div className={s.nameAndGithubLink}>
            <h1 className={s.username}>Emanuel Boaventura</h1>
            <span className={s.githubLink}>GitHub</span>
          </div>
          <p className={s.userDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            doloribus cumque eveniet consectetur quibusdam aut atque? Odio
            molestias illum fugit?
          </p>
          <div className={s.anothersInfo}>
            <span>github</span>
            <span>rocketseat</span>
            <span>21 followers</span>
          </div>
        </div>
      </section>
      <form action=''>
        <div>
          <h2 className={s.formTitle}>Publicações</h2>
          <span className={s.issuesAmount}>6 Publicações</span>
        </div>
        <input placeholder='Buscar conteúdo' type='text' />
      </form>
      <div className={s.postsContainer}>
        {issues.map((issue) => (
          <Posts key={issue} />
        ))}
      </div>
    </div>
  );
};

export default Home;
