import { useEffect, useState } from 'react';
import Posts from '../../components/Posts';
import s from './styles.module.scss';
import api from '../../lib/api';
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react';
import Loading from '../../components/Loading';

interface IUser {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  company: string;
  html_url: string;
  login: string;
}

export interface IItens {
  url: string;
  title: string;
  body: string;
  id: number;
  updated_at: string;
  number: number;
}

interface IIssues {
  total_count: number;
  items: IItens[];
}

const Home = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [issues, setIssues] = useState<IIssues | null>(null);
  const [query, setQuery] = useState('');
  const username = 'rocketseat-education';
  const repo = 'reactjs-github-blog-challenge';

  useEffect(() => {
    try {
      async function getData() {
        const { data } = await api.get<IUser>(`/users/${username}`);
        setUser(data);

        const { data: issuesData } = await api.get<IIssues>(
          `/search/issues?q=${query}%20repo:${username}/${repo}`
        );
        setIssues(issuesData);
      }

      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  async function handleOnChange(query: string) {
    setQuery(query);
    console.log(query);

    const { data: issuesData } = await api.get<IIssues>(
      `/search/issues?q=${query}%20repo:${username}/${repo}`
    );

    console.log(issuesData);
    setIssues(issuesData);
  }

  return user === null ? (
    <Loading />
  ) : (
    <main className={s.homeContainer}>
      <section className={s.userCard}>
        <img src={user.avatar_url} alt='' />
        <div className={s.userData}>
          <div className={s.nameAndGithubLink}>
            <h1 className={s.username}>{user.name}</h1>
            <a className={s.githubLink} href={user.html_url} target='_blank'>
              GitHub
              <ArrowSquareOut size={16} weight='bold' />
            </a>
          </div>
          <p className={s.userDescription}>{user.bio}</p>
          <aside className={s.aside}>
            <span className={s.asideInfo}>
              <GithubLogo size={18} weight='duotone' />
              {user.login}
            </span>
            {user.company && (
              <span className={s.asideInfo}>
                <Buildings size={18} weight='duotone' />
                {user.company}
              </span>
            )}
            <span className={s.asideInfo}>
              <Users size={18} weight='duotone' />
              {`${user.followers} Seguidores`}
            </span>
          </aside>
        </div>
      </section>
      <form action=''>
        <div>
          <h2 className={s.formTitle}>Publicações</h2>
          <span className={s.issuesAmount}>
            {issues?.total_count} Publicações
          </span>
        </div>
        <input
          value={query}
          onChange={(e) => handleOnChange(e.target.value)}
          placeholder='Buscar conteúdo'
          type='text'
        />
      </form>
      {issues === null ? (
        <Loading />
      ) : (
        <div className={s.postsContainer}>
          {issues?.items.map(({ id, ...post }) => (
            <Posts key={id} {...post} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
