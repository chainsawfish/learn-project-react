import axios from "axios";
import { useEffect, useState } from "react";

const cardStyle = {
  border: "0px solid black",
  padding: "10px",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
};

const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

function App() {
  console.log("rener");
  const [first, setfirst] = useState(null);

  useEffect(() => {
    const p = axios.get(URL_POSTS).then((r) => {
      setfirst(r.data);
    });
  }, []);

  return (
    <>
      {first &&
        first.map((post) => {
          return (
            <div key={post.id}>
              <div>{post.title}</div>
              <div>----------</div>
            </div>
          );
        })}
    </>
  );
}

export default App;
