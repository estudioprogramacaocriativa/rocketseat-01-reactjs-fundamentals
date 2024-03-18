import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/6819427?v=4',
            name: 'Samuel dos Santos',
            role: 'CTO Programação Criativa'
        },
        content: [
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋'
            },
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, event'
            },
            {
                type: 'paragraph',
                content: 'Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare'
            },
        ],
        publishedAt: new Date('2024-03-15 14:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/59840647?v=4',
            name: 'Rafael Gil',
            role: 'Desenvolvedor Sênior'
        },
        content: [
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋'
            },
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, event'
            },
            {
                type: 'paragraph',
                content: 'Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare'
            },
        ],
        publishedAt: new Date('2024-03-15 18:00:00')
    }
]

function App() {
    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {
                        posts.map(post => {
                            return (
                                <Post
                                    key={post.id}
                                    author={post.author}
                                    content={post.content}
                                    publishedAt={post.publishedAt}
                                />
                            )
                        })
                    }
            </main>
        </div>
      </>
  )
}

export default App
