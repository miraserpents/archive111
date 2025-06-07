let name = "mirabela";
let age = "1111";
let likesSushi = false;

function greeting(name) {
    console.log("hello", name);
}

greeting("mira");

function saveName() {
    let newName = document.getElementById("greeter").value; // text field value from the user 
    document.getElementById('username').textContent = newName; 
    document.getElementById("greeter").value = "";
}