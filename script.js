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

document.querySelectorAll('.accordion-header').forEach(function (button) {
    button.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none': 'block';
    });
}); 

const PASSWORD = "iamcassie";

function validatePass() {
    const login = document.getElementById('password');
    const message = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll('.hidden');

    if (login.value === PASSWORD) {
        message.textContent= "password confirmed!!!!! see hidden entries bellow!";
        hiddenEntries.forEach(function(entry) {entry.style.display = 'flex';});
    } else {
        message.textContent= "password denied :( try harder or GO AWAY!!";
        hiddenEntries.forEach(function(entry) {entry.style.display = 'none';});
    }
    
    login.value = '';
}
