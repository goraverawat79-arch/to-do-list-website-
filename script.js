const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

function addtask(){
    if ( inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputbox.value = "";
    savedata();
}

listcontainer.addEventListener('click',function (e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    savedata();
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
  };
},false);


function savedata(){
  localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata(){
  listcontainer.innerHTML = localStorage.getItem("data");
}

showdata();


// update the progress bar // 

function updateProgress() {

    // Get all tasks
    const totalTasks = listcontainer.querySelectorAll("li").length;

    // Get completed tasks
    const completedTasks =
        listcontainer.querySelectorAll("li.checked").length;

    // Calculate percentage
    let percentage = 0;

    if (totalTasks > 0) {
        percentage = Math.round(
            (completedTasks / totalTasks) * 100
        );
    }

    // Update percentage text
    document.getElementById("progress-text").textContent =
        percentage + "%";

    // Update progress bar
    document.getElementById("progress-fill").style.width =
        percentage + "%";
}

