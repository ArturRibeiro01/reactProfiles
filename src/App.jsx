import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Post author="Artur Ribeiro" content="Post Numero 1" />
      <hr />
    </div>
  );
}
export default App;
