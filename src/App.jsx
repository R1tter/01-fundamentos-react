import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/R1tter.png',
      name: 'Marcelo Ritter',
      role: 'Tech Lead',
    },
    content: [
      {type: 'paragraph', content: 'Hello guys 👋🏽'},
      {type: 'paragraph', content: 'I just submitted a new project on my github portfolio. It is description generator for videos, using AI to help generate 🤖'},
      {type: 'link', content: 'github.com/R1tter/upload-ai'},
    ],
    publishedAt: new Date('2023-10-16 11:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Hello guys 👋🏽'},
      {type: 'paragraph', content: 'I just submitted a new project on my github portfolio. It is description generator for videos, using AI to help generate 🤖'},
      {type: 'link', content: 'github.com/R1tter/upload-ai'},
    ],
    publishedAt: new Date('2023-10-12 11:30:00')
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />  
            )
          })}
        </main>
      </div>
    </div>
  )
}


