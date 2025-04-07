let todo = ["todo1","todo2","todo3"];
let progress =["progress1","progress2","progress3"];
let done=["done1","done2","done3"];

let todocol = document.getElementById("todo");
let progresscol= document.getElementById("progress");
let donecol=document.getElementById("done");

function renderTodo (){
    todocol.innerHTML =  "<h1>Todo</h1>";
todo.forEach((item,index) =>{
    todocol.innerHTML +=`
     <div class="task">
     <p>${item}</p>
    <button onclick=shiftToRight('todo',${index})>&rarr;</button>
    </div>
    `;
})
}

function renderProgress(){
     progresscol.innerHTML = "<h1>Progress</h1>";
progress.forEach((item,index)=>{
    progresscol.innerHTML +=`
     <div class="task">
     <p>${item}</p>
     <button onclick=shiftToLeft('progress',${index})>&larr;</button>
    <button onclick=shiftToRight('progress',${index})>&rarr;</button>
        </div>
        `;
})}

function renderDone(){
     donecol.innerHTML = "<h1>Done</h1>";
done.forEach((item,index)=>{
   donecol.innerHTML +=`
     <div class="task">
     <p>${item}</p>
    <button onclick=shiftToLeft('done',${index})>&larr;</button>
        </div>
        `;
})}



function shiftToRight(colName,index){
    if(colName ==="todo"){
        let itemToBePushed =todo[index];
        todo = todo.filter((item,i) =>i !==index);
        console.log("Array after removal of item",todo, itemToBePushed);
        renderTodo();
        progress.push(itemToBePushed);
        renderProgress();
    }

    else if(colName ==="progress"){
        let itemToBePushed =progress[index];
        progress = progress.filter((item,i) =>i !==index);
        console.log("Array after removal of item",progress, itemToBePushed);
        renderProgress();
        done.push(itemToBePushed);
       renderDone();
    }
}


function shiftToLeft(colName,index){
    if(colName ==="done"){
        let itemToBePushed =done[index];
        done = todo.filter((item,i) =>i !==index);
        console.log("Array after removal of item",todo, itemToBePushed);
        renderDone();
        progress.push(itemToBePushed);
        renderProgress();
    }

    else if(colName ==="progress"){
        let itemToBePushed =progress[index];
        progress = progress.filter((item,i) =>i !==index);
        console.log("Array after removal of item",progress, itemToBePushed);
        renderProgress();
        todo.push(itemToBePushed);
       renderTodo();
    }
}


renderTodo();
renderProgress();
renderDone();