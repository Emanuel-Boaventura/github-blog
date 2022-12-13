import s from './styles.module.scss';

const Loading = () => {
  return (
    <main className={s.container}>
      <h1>Carregando...</h1>
      <p>Aguarde um momento</p>
    </main>
  );
};

export default Loading;
