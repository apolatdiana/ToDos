var inputElement = document.getElementById('todo-text');
var itemList = document.getElementById('todoItems');
var submitBtn = document.getElementById('submit')
 
submitBtn.addEventListener('click', addItem );
itemList.addEventListener('click', removeItem);
itemList.addEventListener('click', strikeItem);

  var todoItems = [];
  
  function addItem(e){
     e.preventDefault();

     var newitem =inputElement.value;

     if (newitem === "") {
        alert("Please enter a task!");
      } else {
        if (todoItems.length < 3) {

     var li = document.createElement('li');
     li.className = 'list-group-item';
     li.appendChild(document.createTextNode(newitem));

 var deleteBtn = document.createElement('button');
     deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
     deleteBtn.appendChild(document.createTextNode('X'));
     li.appendChild(deleteBtn);

 var successBtn = document.createElement('button');
     successBtn.className = 'btn btn-success btn-sm float-right strike mr-2';
     successBtn.appendChild(document.createTextNode('√'));
     li.appendChild(successBtn);

     itemList.appendChild(li);
     todoItems.push(newitem);
     inputElement.value = "";
    }
    else {
      alert("List can only contain a maximum of 3 tasks.");
    }
    }
 };    
     function removeItem(e){
         if(e.target.classList.contains('delete')){
             if(confirm('Are You Sure?')){
                 var li = e.target.parentElement;
                 itemList.removeChild(li);
             }
         }   
     };
     function strikeItem(e){
        if(e.target.classList.contains('strike')){
            if(confirm('Are You Sure?')){
                var itemInLi = (e.target.parentElement);
                itemInLi.style.textDecoration = "line-through";
            }   
        }   
    };   