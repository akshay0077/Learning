const inputBox = document.getElementById("input-box");
const ListContainter = document.getElementById("list-continer");

function addTask() {
    if (inputBox.value === '') {
        alert("Please Enter the value")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainter.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

ListContainter.addEventListener("click", function(e){
   if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", ListContainter.innerHTML);
}
function showTask(){
    ListContainter.innerHTML = localStorage.getItem("data");
}
showTask();