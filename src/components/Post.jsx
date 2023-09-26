import styles from './Post.module.css';

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/R1tter.png" 
            />
          <div className={styles.authorInfo}>
            <strong>Marcelo Ritter</strong>
            <span>Tech Lead</span>
          </div>
        </div>

        <time title='26 de Setembro às 14:47' dateTime='2023-09-26 14:47:04'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋🏽</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz utilizando o OpenAi. O nome do projeto é UploadAi 🤖</p>
        <p>👉🏽 <a href="">https://github.com/R1tter/upload-ai</a></p>
        <p><a href="">#novoprojeto #AI</a></p>
      </div>
    </article>
  )
}