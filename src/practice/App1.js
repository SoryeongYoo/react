import { useState, useEffect } from "react";

function App() {
  const [counter,setValue] =useState(0);
  const [keyword, setKeyword]=useState("");
  const onClick=()=>setValue((prev)=>prev+1);
  const onChange=(event)=>setKeyword(event.target.value);

  useEffect(()=>{ //api를 한 번만 호출하고 싶을 때 사용
    console.log("I run only once.");
  },[]);

  useEffect(()=>{ //keyword가 변화할 때만 실행
    console.log("I run when 'keyword' changes.");
  },[keyword]);

  useEffect(()=>{ //counter가 변화할 때만 실행
    console.log("I run when 'counter' changes.");
  },[counter]);

  return (
    <div>
      <input 
        value={keyword}
        type="text" 
        onChange={onChange}
        placeholder="Search here..." 

      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
