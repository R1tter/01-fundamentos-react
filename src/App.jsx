import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {

  return (
    <>
      <Header />
      <div>
      <Post
        author = 'John Smith'
        content = 'Lorem ipsum dolor sit amet, consectetur adip'
      />
      <Post
        author = 'Some other author'
        content = 'Some other content'
      />
      </div>
    </>
  )
}


