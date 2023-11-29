console.log('working!!!');


const users = [
    {name:'admin', pw:'password'},
    {name:'ashu', pw:'asdf'},
    {name:'gilfoyle', pw:'qwert'}
]

function validate(){
    event.preventDefault();
    var currentUser = document.getElementById('user');
    localStorage.setItem('userId', currentUser.value);
    var currentPassword = document.getElementById('password');
    localStorage.setItem('passWord', currentPassword.value);

    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('passWord'));

    let i = 0;
    var userFound = false;
    for(;i<users.length;i++){
        if(users[i].name === currentUser.value){
            userFound = true;
            console.log("in here")
            if(users[i].pw === currentPassword.value){
                window.location.replace('main.html')
            }
            else{
                alert('Invalid Password');
            }
        }
    }

    if(i==users.length && userFound==false){
        alert('invalid credentials');
    }
}



function showOptions() {
    var x = document.getElementById("filter-options");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}