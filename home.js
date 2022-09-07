let count = 0;

function add(){
    
    let boxd = document.getElementById("box-div");
    
    let  box = document.createElement("div");

    box.className = "box";
    box.id = count;

    
    let heading = String(prompt("Enter the Title of Your Task"));
    
    let  item = Number(prompt("Enter the number of task u want to add"));

    
    let  arr=new Array();

    for(let i=0;i<item;i++){
        arr[i]=prompt("Enter your task "+ (i+1));
    }

    box.innerHTML+=`<h2>${heading}</h2>`;
    box.innerHTML+=`<hr>`;
   

    for(let i=0;i<item;i++){
        box.innerHTML+=`<h4>
            <input type="checkbox" onclick="check(box${count}id${i}, box${count}label${i})" id="box${count}id${i}">
            <label for="box${count}id${i}" id="box${count}label${i}"> ${arr[i]}</label>
            </h4>`
        
    }
    

    box.innerHTML+=`<button class="btn3" id="${count}" onclick="del(${box.id})">Delete</button>`;
    boxd.appendChild(box);
    count++;
}

function check(idd,labell){
    
    let checkb = idd;
    let  label = labell;

    if(checkb.checked == true)
    {
        label.style.textDecorationLine="line-through";
        label.style.color="#C2C2C2";
    }
    else{
        label.style.textDecorationLine="none";
        label.style.color="black";
    }
}



function del(box_id){
    const b = document.getElementById(box_id);
    b.remove();
}