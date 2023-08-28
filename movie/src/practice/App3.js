import { useState } from "react";

function App(){
    const [toDo, setTodo]=useState("");
    const [toDos, setTodos]=useState([]);
    const onChange =(event)=>setTodo(event.target.value);
    const onSubmit=(event)=>{
        event.preventDefault();
        if(toDo===""){
            return;
        }
        setTodo(""); //toDo 값을 수정하는 함수를 비워줌
        setTodos(currentArray=>[toDo, ...currentArray]); //currentArray에 현재 값 추가
    };
    console.log(toDos);
    return(
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do..." 
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index)=>
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App;