
// Targetting all classes & id from HTML

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error")

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  validate(email, 0, "Email cannot be blank");
  validate(password, 1, "Password cannot be blank");
  
});

// validate function which will do all the works

let validate = (inputField, serial, message) => {
  if (inputField.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    inputField.parentNode.style.border = "2px solid #af4444";
 
  } else {
    
    
    errorMsg[serial].innerHTML = "";
    inputField.parentNode.style.border = "2px solid green";
    
  }
};

// function Login() {
  
//   let users = [
//     {
//       name:"abcd@gmail.com",
//       password:btoa("abc@12")
//      },

//      {
//       name:"bcd@gmail.com",
//       password:btoa("bcd@12")
//      },
//   ]

//   let usernameValue = email.value;
//   let passwordValue = password.value;

//   sessionStorage.setItem("currentloggedin", usernameValue);

//   localStorage.setItem('all_users',JSON.stringify(users));

//   const hash = Object.fromEntries(
//     a.map(e => [e.name, e.password])
//   )

//   for (let key of hash) {
    
//     if(key[0] === usernameValue && key[1]===atob(passwordValue)) {
//          alert('Login successful');
//      }
 
//     else {
//          alert("login fail");
//      }
//   }

//   let hashmap = a.reduce(function(map, obj) {
//     map[obj.key] = obj.val;
//     return map;
// }, {});
// }
