const signUp = e => {
    let fname = document.getElementById('username').value,
        email = document.getElementById('email').value,
        pwd =  btoa(document.getElementById('password').value);

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created successfully.");
    }
    else{
        alert("User exists! Please log in.");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && atob(data.pwd) == pwd);
    if(!exist){
        alert("Email or password is incorrect!");
    }
    else{
        location.href = "../Admin dashboard/index.html";
        
    }
    e.preventDefault();
}
