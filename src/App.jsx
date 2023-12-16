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
  console.log("render");
  const [first, setfirst] = useState(null);

  useEffect(() => {
    axios.get(URL_POSTS).then((response) => {
      setfirst(response.data);
    });
  }, []);

  return (
    <>
      {first &&
        first.map((post) => {
          return (
            <div key={post.id} style={cardStyle}>
              <div>{post.title}</div>
              <div>----------</div>
            </div>
          );
        })}
    </>
  );
}

export default App;
