//Shows all task when loading page
showtask();

//getting the id "addtaskinput"
let addtaskinput = document.getElementById("addtaskinput");
//getting the id "addtaskbtn"
let addtaskbtn = document.getElementById("addtaskbtn");

//Add Task
addtaskbtn.addEventListener("click", function(){
    //takes the Value stored in the addtaskinput
    addtaskinputval = addtaskinput.value;

    //if the 
    if(addtaskinputval.trim()!=0){
        //Sets a variable to take the local storage
        let webtask = localStorage.getItem("localtask");
        //If the object doesn't exist create it. 
        if(webtask == null){
            taskObj = [];
        }
        else{
            //If the object does exist adds to it.
            taskObj = JSON.parse(webtask);
        }
        //Create the structure of the Json
        taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
        //puts it in the Local storage
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        addtaskinput.value = '';
    }
    //runs showtask()
    showtask();
})

// Showtask
function showtask(){
    //Sets a variable to take the local storage
    let webtask = localStorage.getItem("localtask");
    //if it does't exist shows empty else shwos it
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
    }

    //Create the HTML table element with the parsed Json elements. 
    let html = '';
    let addedtasklist = document.getElementById("addedtasklist");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    
    addtaskinput.value = taskObj[index]['task_name'];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}

// savetask
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function(){
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = addtaskinput.value;
        }
      }

    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

// complete task
let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        
        let webtask = localStorage.getItem("localtask");
        let taskObj = JSON.parse(webtask);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        
        
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
            for (keys in taskObj[mytargetid]) {
                if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
                    taskObj[mytargetid].completeStatus = false;
                }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
                    taskObj[mytargetid].completeStatus = true;
                }
              }    
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savetaskbtn = document.getElementById("savetaskbtn");
    let addtaskbtn = document.getElementById("addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

})


// serachlist
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="grid";
        }
        else{
            item.style.display="none";
        }
    })
})

//Show Complited task
let showCompliteTask = document.getElementById("showCompliteTask");
showCompliteTask.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let i = 0;
    
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let showCompliteTask = item.getElementsByTagName("td")[0].innerText;
        let showCompliteTaskVal = showCompliteTask.value;
        let re = new RegExp(showCompliteTaskVal, 'gi');

        for (keys in taskObj[i]) {
            if(keys == 'completeStatus' && taskObj[i][keys]==true){
                
                item.style.display="grid";

            }else if(keys == 'completeStatus' && taskObj[i][keys]==false){

                item.style.display="none";
                
            }
          }
        i++;
    })
})

//Show all Task
let showAllTask = document.getElementById("showAllTask");
showAllTask.addEventListener("click", function(){showtask()})

//Show To Do Task
let toDoTaskShow = document.getElementById("toDoTaskShow");
toDoTaskShow.addEventListener("click", function(){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let i = 0;
    
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let toDoTaskShow = item.getElementsByTagName("td")[0].innerText;
        let toDoTaskShowVal = toDoTaskShow.value;
        let re = new RegExp(toDoTaskShowVal, 'gi');

        for (keys in taskObj[i]) {
            if(keys == 'completeStatus' && taskObj[i][keys]==true){
                
                item.style.display="none";

            }else if(keys == 'completeStatus' && taskObj[i][keys]==false){

                item.style.display="grid";
                
            }
          }
        i++;
    })
})












