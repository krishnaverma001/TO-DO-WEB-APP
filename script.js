const inputBox=document.getElementById("input_box");
const listContainer=document.getElementById("list_container");

function addTask(){
    if(inputBox.value === ''){
        alert("ENTER A TASK !");
    }
    else{
        let l=document.createElement("li");
        l.innerHTML=inputBox.value;
        listContainer.appendChild(l);

        let cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        l.appendChild(cross);
    }

    inputBox.value="";
    saveData();
}

document.addEventListener("keydown", function(e) {
    if (e.key === "/" && document.activeElement !== inputBox) {
        e.preventDefault();         // Prevent typing "/" in the input
        inputBox.focus();
    }
});

inputBox.addEventListener("keydown", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();