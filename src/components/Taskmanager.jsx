import React,{useState} from "react";
const Taskmanager =()=>{
    const [task,settask]=useState('');
    const [priority, setpriority]=useState(0);
    const [tasks,settasks]=useState([]);
const addTask=()=>{
    if(task && priority){
        const newtask={ name: task, priority: priority };
        settasks((prev)=>[...prev,newtask]);
        settask('');
        setpriority(0);
    }
  
};
const sortedTasks = tasks.sort((a, b) => a.priority - b.priority);
return (
    <div>
        <form >
            <input type="text" value={task} onChange={(e)=>settask(e.target.value)} placeholder="Task Name"></input>
            <input type="number" value={priority} onChange={(e)=>setpriority(e.target.value)} placeholder="Priority (lower numner=1)"></input>
            <button type="submit" onClick={addTask()}>Add Task</button>
        </form>
        <ul>
        {tasks&&tasks.map((t)=><li>{t.name}{t.priority}</li>)}
    </ul>
    </div>
    
);
};
export default Taskmanager;