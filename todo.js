alert("connected")

let h = document.createElement('h3')
let myValue =document.createTextNode('Welcome')

//we are updating the text in to h3
h.appendChild(myValue)
//for paste it in web page
document.querySelector('h3').appendChild(h);

let ul = document.getElementById('list');
let li


//creating event for add button
let addBtn = document.getElementById('add');
addBtn.addEventListener('click', addItem)

//creating event for remove button
let removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', removeItem)

//creating event for removeAll button
let removeAllItem = document.getElementById('removeAll');
removeAllItem.addEventListener('click',removeEverything)


function addItem() {
    console.log('Add button clicked')
    let input =document.getElementById('input');
    let item = input.value;
    let textnode = document.createTextNode(item)
    if (item ==='') {
        return false;
    }
    //add a p-tag and assign a value of enter your tododata
    else {
        //create li
        li = document.createElement('li');

        //create checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check')

        //create label
        let label = document.createElement('label')
        label.setAttribute('for','item')//optional

        //add these elements on webpage
        //inside ul we are cretaing the label
        ul.appendChild(label);//generating the elements and putting some textnode inside the label
        //this label we are holding as an li as checkbox inside the label
        li.appendChild(checkbox);
        label.appendChild(textnode);//
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        // li.className = 'visual'

        setTimeout(() => {
            li.className = 'visual';
        },10);
    }


}
function removeItem() {
    li  = ul.children;
    console.log('Remove button clicked')
    for (let i = 0; i < li.length; li++)
    {
        //here we have other item to loop
        while (li[i] && li[i].children[0].checked) {
            ul.removeChild (li[i])
        }
        // const result = li[i]
        // console.log(result);
     }
   // console.log(li);
}
function removeEverything() {
    li  = ul.children;
    console.log('RemoveAll button clicked')
    for (let i=0; i < li.length; i++)
    {
        ul.removeChild(li[i])
    }
}