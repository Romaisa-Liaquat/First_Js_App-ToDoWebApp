var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);
var removeButton = document.getElementById('delete', removeItem);
removeButton.addEventListener('click', removeItem);

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === '') {
        alert("must write something");
        return false;

    } else
        //li created
        li = document.createElement('li');
    // checkbox done
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check')
    checkbox.setAttribute("class","check");
    //turn for label
    var label = document.createElement('label');
    label.setAttribute('for', 'item') //optional
    label.setAttribute("class","lbl");
   
    //ading them to page
    ul.appendChild(label)
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);
    li.className = 'visual';
}


function removeItem(){
    li = ul.children;
    for(var index = 0; index < li.length; index++){
        while( li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        } 
    }
}