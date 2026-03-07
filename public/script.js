const API = "/api/tasks";

async function loadTasks(){
 const res = await fetch(API);
 const tasks = await res.json();

 const list = document.getElementById("taskList");
 list.innerHTML="";

 tasks.forEach(task=>{
   const li = document.createElement("li");
   li.innerHTML = `
   ${task.title}
   <button onclick="deleteTask('${task._id}')">Delete</button>
   `;
   list.appendChild(li);
 });
}

async function addTask(){
 const title = document.getElementById("taskInput").value;

 await fetch(API,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({title,completed:false})
 });

 loadTasks();
}

async function deleteTask(id){
 await fetch(API+"/"+id,{method:"DELETE"});
 loadTasks();
}

loadTasks();