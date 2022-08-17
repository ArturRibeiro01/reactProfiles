import { Header } from "./components/Header";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/59667445?v=4",
        name: "Artur Ribeiro",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Lorem ipsum dolor sit." },
        {
          type: "paragraph",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe et vel eaque ipsam iure ad?",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-08-13 18:21:01"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Teste Diego",
        role: "@CTO da RocketSeat",
      },
      content: [
        { type: "paragraph", content: "Lorem ipsum dolor sit." },
        {
          type: "paragraph",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe et vel eaque ipsam iure ad?",
        },
        { type: "link", content: "👉 jane.design/doctorcare" },
      ],
      publishedAt: new Date("2022-01-25 18:23:23"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
export default App;
