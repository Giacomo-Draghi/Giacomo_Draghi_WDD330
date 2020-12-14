//Shows all scripture when loading page
showScripture();

//getting the imputs by id
let addBook = document.getElementById("addBook");
let addVerses = document.getElementById("addVerses");
let addNotes = document.getElementById("addNotes");

//getting the id "addScriptureBtn"
let addScriptureBtn = document.getElementById("addScriptureBtn");

//Add scripture
addScriptureBtn.addEventListener("click", function(){
    //takes the Value stored in the form
    addBookVal = addBook.value;
    addVersesval = addVerses.value;
    addNotesVal = addNotes.value;

    if(addVersesval.trim()!=0){
        //Sets a variable to take the local storage
        let webscripture = localStorage.getItem("scriptureApp");
        //If the object doesn't exist create it. 
        if(webscripture == null){
            scriptureObj = [];
        }
        else{
            //If the object does exist adds to it.
            scriptureObj = JSON.parse(webscripture);
        }
        //Create the structure of the Json
        scriptureObj.push({'book_name':addBookVal, 'verses':addVersesval, 'notes':addNotesVal, 'read':false});
        //puts it in the Local storage
        localStorage.setItem("scriptureApp", JSON.stringify(scriptureObj));
        addVerses.value = '';
        addNotes.value = '';
    }
    //runs showScripture()
    showScripture();
})

// showScripture
function showScripture(){
    //Sets a variable to take the local storage
    let webscripture = localStorage.getItem("scriptureApp");
    //if it does't exist shows empty else shwos it
    if(webscripture == null){
        scriptureObj = [];
    }
    else{
        scriptureObj = JSON.parse(webscripture);
    }

    //Create the HTML table element with the parsed Json elements. 
    let html = '';
    let addedScriptureList = document.getElementById("addedScriptureList");
    scriptureObj.forEach((item, index) => {

        if(item.read==true){
            readValue = "<td id='checkbox'><input type='checkbox' checked></td>";
        }else{
            readValue = `<td id='checkbox'><input type="checkbox"></td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${item.book_name}</td>
                    <td>${item.verses}</td>
                    <td>${item.notes}</td>
                    ${readValue}
                    <td><button type="button" onclick="editscripture(${index})" class="text-primary edit"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success read" id=${index}><i class="fa fa-check-square-o"></i>Read</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger delete"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedScriptureList.innerHTML = html;
}

// editscripture
function editscripture(index){
    let saveindex = document.getElementById("saveindex");
    let addScriptureBtn = document.getElementById("addScriptureBtn");
    let savescripturebtn = document.getElementById("savescripturebtn");
    saveindex.value = index;
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture); 
    
    addBook.value = scriptureObj[index]['book_name'];
    addVerses.value = scriptureObj[index]['verses'];
    addNotes.value = scriptureObj[index]['notes'];

    addScriptureBtn.style.display="none";
    savescripturebtn.style.display="block";
}

// savescripture
let savescripturebtn = document.getElementById("savescripturebtn");
savescripturebtn.addEventListener("click", function(){
    let addScriptureBtn = document.getElementById("addScriptureBtn");
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in scriptureObj[saveindex]) {
        if(keys == 'verses'){
            scriptureObj[saveindex].verses = addVerses.value;
            scriptureObj[saveindex].notes = addNotes.value;
        }
      }

    savescripturebtn.style.display="none";
    addScriptureBtn.style.display="block";
    localStorage.setItem("scriptureApp", JSON.stringify(scriptureObj));
    addVerses.value='';
    addNotes.value = '';
    showScripture();
})
// deleteitem
function deleteitem(index){
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture);
    scriptureObj.splice(index, 1);
    localStorage.setItem("scriptureApp", JSON.stringify(scriptureObj));
    showScripture();
}

// complete scripture
let addedScriptureList = document.getElementById("addedScriptureList");
    addedScriptureList.addEventListener("click", function(e){
        
        let webscripture = localStorage.getItem("scriptureApp");
        let scriptureObj = JSON.parse(webscripture);
        
        let mytarget = e.target;
        if(mytarget.classList[0] === 'text-success'){
        let mytargetid = mytarget.getAttribute("id");
        
        
        
        mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
            
            for (keys in scriptureObj[mytargetid]) {
                if(keys == 'read' && scriptureObj[mytargetid][keys]==true){
                    scriptureObj[mytargetid].read = false;
                }else if(keys == 'read' && scriptureObj[mytargetid][keys]==false){
                    scriptureObj[mytargetid].read = true;
                }
              }    
        localStorage.setItem("scriptureApp", JSON.stringify(scriptureObj));
        showScripture();
    }
    })

    



// deleteall
let deleteallbtn = document.getElementById("deleteallbtn");
deleteallbtn.addEventListener("click", function(){
    let savescripturebtn = document.getElementById("savescripturebtn");
    let addScriptureBtn = document.getElementById("addScriptureBtn");
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture);
    if(webscripture == null){
        scriptureObj = [];
    }
    else{
        scriptureObj = JSON.parse(webscripture);
        scriptureObj = [];
    }
    savescripturebtn.style.display="none";
    addScriptureBtn.style.display="block";
    localStorage.setItem("scriptureApp", JSON.stringify(scriptureObj));
    showScripture();

})


// serachlist
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.getElementById("addedScriptureList").querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[2].innerText;
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

//Show Complited scripture
let showComplitescripture = document.getElementById("showComplitescripture");
showComplitescripture.addEventListener("click", function(){
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture);
    let i = 0;
    
    let trlist = document.getElementById("addedScriptureList").querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let showComplitescripture = item.getElementsByTagName("td")[0].innerText;
        let showComplitescriptureVal = showComplitescripture.value;
        let re = new RegExp(showComplitescriptureVal, 'gi');

        for (keys in scriptureObj[i]) {
            if(keys == 'read' && scriptureObj[i][keys]==true){
                
                item.style.display="grid";

            }else if(keys == 'read' && scriptureObj[i][keys]==false){

                item.style.display="none";
                
            }
          }
        i++;
    })
})

//Show all scripture
let showAllscripture = document.getElementById("showAllscripture");
showAllscripture.addEventListener("click", function(){showScripture()})

//Show To Do scripture
let toDoscriptureShow = document.getElementById("toDoscriptureShow");
toDoscriptureShow.addEventListener("click", function(){
    let webscripture = localStorage.getItem("scriptureApp");
    let scriptureObj = JSON.parse(webscripture);
    let i = 0;
    
    let trlist = document.getElementById("addedScriptureList").querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let toDoscriptureShow = item.getElementsByTagName("td")[0].innerText;
        let toDoscriptureShowVal = toDoscriptureShow.value;
        let re = new RegExp(toDoscriptureShowVal, 'gi');

        for (keys in scriptureObj[i]) {
            if(keys == 'read' && scriptureObj[i][keys]==true){
                
                item.style.display="none";

            }else if(keys == 'read' && scriptureObj[i][keys]==false){

                item.style.display="grid";
                
            }
          }
        i++;
    })
})












