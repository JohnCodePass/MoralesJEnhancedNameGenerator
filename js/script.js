let names = JSON.parse(localStorage.getItem('data'));
if (localStorage.getItem('data') == null) {
    localStorage.setItem('data', '[]');
}

let addNameBtn = document.getElementById('addNameBtn').addEventListener('click', function () {
    addNameArray();
    document.getElementById("inputName").value = '';
})

let subNameBtn = document.getElementById('subNameBtn').addEventListener('click', function () {
    subNameArray();
    document.getElementById("inputName").value = '';
})

function addNameArray() {
    let inputName = document.getElementById("inputName").value;
    let inCheck = names.includes(inputName);
    inCheck == true ? alert('That name is already added') : inputName === "" ? alert("Yo bro enter a name to add!!") : names.push(inputName),localStorage.setItem('data', JSON.stringify(names));;
    console.log(inputName);
};

function subNameArray() {
    let inputName = document.getElementById('inputName').value;
    if (inputName === "") {
        alert('Yo bro enter a name to remove!!');
    }
    for (let i = 0; i < names.length; i++) {
        if (inputName == names[i]) {
            names.splice(i, 1);
            i--;
            localStorage.setItem('data', JSON.stringify(names));
            alert('Name removed')
        }
    }
}

let randomBTN = document.getElementById("randomBTN").addEventListener("click", function () {
    if(names.length == 0){
        names = JSON.parse(localStorage.getItem('data'));
    }
    randomNameGenerator();
    document.getElementById("displayName").innerHTML = selectedName;
});

let selectedName = "";
function randomNameGenerator() {
    selectedName = names[Math.floor(Math.random() * names.length)];
};

let option1Btn = document.getElementById('selectOne').addEventListener('click', function option1Btn(){
    if(names.length == 0){
        names = JSON.parse(localStorage.getItem('data'));
    }
    document.getElementById('option1Col').innerHTML = "";
    let inputOption1 = document.getElementById('inputOption1').value;
    let br = document.createElement('BR');

    let temp = [];
    let tempVal = Math.ceil(names.length / inputOption1);
    while(names.length > 0){
        temp.push(names.splice(0, tempVal))
    }
    for(let i = 0; i < temp.length; i++){
        let node = document.createElement('LI');
        node.setAttribute('id', 'listAdded')
        let textnode = document.createTextNode(temp[i]);
        node.appendChild(textnode);
        document.getElementById('option1Col').appendChild(node);
        document.getElementById('option1Col').append(br);
    }
    document.getElementById("inputOption1").value = '';
})

let option2Btn = document.getElementById('selectTwo').addEventListener('click', function option1Btn(){
    if(names.length == 0){
        names = JSON.parse(localStorage.getItem('data'));
    }
    document.getElementById('option2Col').innerHTML = "";
    let inputOption2 = document.getElementById('inputOption2').value;
    let br = document.createElement("BR");

    let temp = [];
    while(names.length > 0){
        temp.push(names.splice(0, inputOption2));
    }
    for(let i = 0; i < temp.length; i++){
        let node = document.createElement('LI');
        node.setAttribute('id', 'listAdded')
        node.setAttribute('class', 'd-flex align-items-center flex-column')
        let textnode = document.createTextNode(temp[i]);
        node.appendChild(textnode);
        document.getElementById('option2Col').appendChild(node);
        document.getElementById('option2Col').append(br);
    }
    document.getElementById("inputOption2").value = '';
})