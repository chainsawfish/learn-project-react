import { useState } from "react";

function App() {
  const [password, setPassword] = useState('')

  const inputChangeHandler = (e) => {
    console.log(password)
    setPassword(e.target.value)
  };

  return (
    <>
      <input type="text" value={password} placeholder="enter password" onChange={inputChangeHandler}/>
      <div>Error text: </div>
    </>
  );
}

export default App;
