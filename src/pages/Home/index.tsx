import { useEffect, useState } from 'react';
import Posts from '../../components/Posts';
import s from './styles.module.scss';
import api from '../../lib/api';

interface IUser {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  twitter_username: string;
  html_url: string;
  login: string;
}

export interface IItens {
  url: string;
  title: string;
  body: string;
  id: number;
}

interface IIssues {
  total_count: number;
  items: IItens[];
}

const Home = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [issues, setIssues] = useState<IIssues | null>(null);
  const username = 'rocketseat-education';
  const repo = 'reactjs-github-blog-challenge';

  useEffect(() => {
    async function getData() {
      const { data } = await api.get<IUser>(`/users/${username}`);
      const { data: issuesData } = await api.get<IIssues>(
        `/search/issues?q=repo:${username}/${repo}`
      );

      setUser(data);
      setIssues(issuesData);
      console.log(issuesData);
    }

    getData();
  }, []);

  return (
    <div className={s.homeContainer}>
      <section className={s.userCard}>
        <img src={user?.avatar_url} alt='' />
        <div className={s.userData}>
          <div className={s.nameAndGithubLink}>
            <h1 className={s.username}>{user?.name}</h1>
            <a className={s.githubLink} href={user?.html_url} target='_blank'>
              GitHub
            </a>
          </div>
          <p className={s.userDescription}>{user?.bio}</p>
          <div className={s.anothersInfo}>
            <a href={user?.html_url} target='_blank'>
              {user?.login}
            </a>
            <a
              href={`https://twitter.com/${user?.twitter_username}`}
              target='_blank'
            >
              {user?.twitter_username}
            </a>
            <span>{user?.followers} Seguidores</span>
          </div>
        </div>
      </section>
      <form action=''>
        <div>
          <h2 className={s.formTitle}>Publicações</h2>
          <span className={s.issuesAmount}>
            {issues?.total_count} Publicações
          </span>
        </div>
        <input placeholder='Buscar conteúdo' type='text' />
      </form>
      <div className={s.postsContainer}>
        {issues?.items.map(({ id, ...post }) => (
          <Posts key={id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
