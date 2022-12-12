import { useEffect, useState } from 'react';
import Posts from '../../../components/Posts';
import s from './styles.module.scss';
import api from '../../lib/api';
import { Link } from 'react-router-dom';

interface IUser {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  twitter_username: string;
}

const Home = () => {
  const issues = [1, 2, 3];
  const [user, setUser] = useState({} as IUser);
  const username = 'rocketseat-education';

  async function getData() {
    const { data } = await api.get(`/users/${username}`);

    setUser(data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.homeContainer}>
      <section className={s.userCard}>
        <img src={user.avatar_url} alt='' />
        <div className={s.userData}>
          <div className={s.nameAndGithubLink}>
            <h1 className={s.username}>{user.name}</h1>
            <span className={s.githubLink}>GitHub</span>
          </div>
          <p className={s.userDescription}>{user.bio}</p>
          <div className={s.anothersInfo}>
            <span>github</span>
            <Link to={`https://twitter.com/${user.twitter_username}`}>
              {user.twitter_username}
            </Link>
            <span>{user.followers} Seguidores</span>
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
