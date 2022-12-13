import { useEffect, useState } from 'react';

import s from './styles.module.scss';
import api from '../../lib/api';
import { ArrowSquareOut, CaretLeft, GithubLogo } from 'phosphor-react';

interface IIssue {
  html_url: string;
  title: string;
  body: string;
  updated_at: string;
  comments: number;
}

const Issue = () => {
  // const [issue, setIssue] = useState<IIssue | null>(null);
  // const username = 'rocketseat-education';
  // const repo = 'reactjs-github-blog-challenge';
  // useEffect(() => {
  //   async function getData() {
  //     const { data } = await api.get<IIssue>(
  //       `/repos/${username}/${repo}/issues/2 `
  //     );
  //     setIssue(data);
  //     console.log(data);
  //   }
  //   getData();
  // }, []);
  // return (
  //   <main className={s.homeContainer}>
  //     <section className={s.userCard}>
  //       <div className={s.userData}>
  //         <nav className={s.nav}>
  //           <a className={s.back}>
  //             <CaretLeft size={12} weight='duotone' />
  //             Voltar
  //           </a>
  //           <a className={s.githubLink} href={issue?.html_url} target='_blank'>
  //             GitHub
  //             <ArrowSquareOut size={16} weight='bold' />
  //           </a>
  //         </nav>
  //         <h2 className={s.title}>{issue?.title}</h2>
  //         <aside className={s.aside}>
  //           <a className={s.asideInfo} href={user?.html_url} target='_blank'>
  //             <GithubLogo size={18} weight='duotone' />
  //             {user?.login}
  //           </a>
  //           <a
  //             className={s.asideInfo}
  //             href={`https://twitter.com/${user?.twitter_username}`}
  //             target='_blank'
  //           >
  //             <Buildings size={18} weight='duotone' />
  //             {user?.twitter_username}
  //           </a>
  //           <span className={s.asideInfo}>
  //             <Users size={18} weight='duotone' />
  //             {`${user?.followers} Seguidores`}
  //           </span>
  //         </aside>
  //       </div>
  //     </section>
  //     <form action=''>
  //       <div>
  //         <h2 className={s.formTitle}>Publicações</h2>
  //         <span className={s.issuesAmount}>
  //           {issues?.total_count} Publicações
  //         </span>
  //       </div>
  //       <input placeholder='Buscar conteúdo' type='text' />
  //     </form>
  //     <div className={s.postsContainer}>
  //       {issues?.items.map(({ id, ...post }) => (
  //         <Posts key={id} {...post} />
  //       ))}
  //     </div>
  //   </main>
  // );
};

export default Issue;
