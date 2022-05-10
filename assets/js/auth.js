function signIn(e) {
    e.preventDefault();
    // let form = document.getElementById('form');
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('password').value;

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
 
        fetch('https://mybrand-blog-api.herokuapp.com/auth/login', {
          method: 'POST',
          headers: {
            'content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: pwd
          })
        })
          .then(res =>  res.json())
          .then(data => {
      
        // if (email === '' || password === '') {
        //   alert('Fill all fields')
        // }
         if (data.message === 'User with this email could not be found.' || data.message === 'Wrong password!') {
              alert('Incorrect credentials')
            } 
        else {
              // console.log("token: " + data.token);

              const token = data.token; // data.data.token ?
              const userId = data.userId;

              localStorage.setItem('token', token);
              localStorage.setItem('userId', userId);
              localStorage.setItem("isLoggedIn", true);

              if (userId == "627292f5f87b635c52386f5e") {
                location.href = '../Admin dashboard/index.html';
              }

              else location.href = '../Blog/index.html';
            }
          })
          .catch(err => console.log(err.message)
          );

          email = '';
          password = '';
 
}