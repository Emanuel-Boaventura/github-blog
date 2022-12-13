import s from './styles.module.scss';

import { useEffect, useState } from 'react';
import api from '../../lib/api';
import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircleText,
  GithubLogo,
} from 'phosphor-react';
import ReactMarkdown from 'react-markdown';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ptBr from 'dayjs/locale/pt-br';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
dayjs.extend(relativeTime);
dayjs.locale(ptBr);

interface IIssue {
  html_url: string;
  title: string;
  body: string;
  updated_at: string;
  comments: number;
  user: { login: string };
}

const Issue = () => {
  const [issue, setIssue] = useState<IIssue | null>(null);
  const username = 'rocketseat-education';
  const repo = 'reactjs-github-blog-challenge';

  useEffect(() => {
    async function getData() {
      const { data } = await api.get<IIssue>(
        `/repos/${username}/${repo}/issues/1`
      );
      setIssue(data);
    }

    try {
      getData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return issue === null ? (
    <Loading />
  ) : (
    <main className={s.issueContainer}>
      <section className={s.issueHeader}>
        <div className={s.issueData}>
          <nav className={s.nav}>
            <Link to={'/'} className={s.back}>
              <CaretLeft size={16} weight='duotone' />
              Voltar
            </Link>

            <a className={s.githubLink} href={issue?.html_url} target='_blank'>
              GitHub
              <ArrowSquareOut size={16} weight='bold' />
            </a>
          </nav>

          <h2 className={s.title}>{issue?.title}</h2>

          <aside className={s.aside}>
            <span>
              <GithubLogo size={18} weight='duotone' />
              {issue?.user.login}
            </span>

            <span>
              <CalendarBlank size={18} weight='duotone' />
              {dayjs(issue?.updated_at).fromNow()}
            </span>

            <span>
              <ChatCircleText size={18} weight='duotone' />
              {`${issue?.comments} Comentários`}
            </span>
          </aside>
        </div>
      </section>

      <ReactMarkdown className={s.articleContainer}>
        {issue?.body ? issue.body : ''}
      </ReactMarkdown>
    </main>
  );
};

export default Issue;
