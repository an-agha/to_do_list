let list_id = 1; 

input = document.getElementById("list")
to_do = document.getElementById("to do");

function list()
{
    li = document.createElement("li")
    li.innerText = input.value
    li.id = list_id;
    li.setAttribute('onclick' ,'done(' + list_id +')')
    to_do.appendChild(li)
    input.value = ""
    list_id += 1;
}
function done(id) {
 task = document.getElementById(id);
 if(task.classList=="")
 {
     class_name = 'strike'
 }
 else
 {
     class_name = ""
 }
 task.setAttribute('class' , class_name)
    
}
