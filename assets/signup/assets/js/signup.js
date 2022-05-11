
const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    signup();
})

const signup = () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    fetch('https://mybrand-blog-api.herokuapp.com/auth/signup', {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        alert(result.message)

        if (result.message === 'User created!') {
            username = '';
            email = '';
            password = '';
            location.href = '../../../assets/login/login.html'
        }
    })
    .catch(err => console.log(err))
}