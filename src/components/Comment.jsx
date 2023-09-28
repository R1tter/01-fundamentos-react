import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/R1tter.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Ritter</strong>
              <time title='26 de Setembro às 14:47' dateTime='2023-09-26 14:47:04'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>

          <p>Conteúdo do comentário</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Curtir<span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}